import React, { useEffect, useState }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';
import Map from '../Map/Map';
import { payCrypto } from '../../Redux/actions';
import Modal from 'react-modal';
import "./Detail.css";
import Review from '../Reviews/createReview';
import Reviews from '../Reviews/Reviews';
import { Rating } from 'react-simple-star-rating';
import { DetailContainer, DetailEvent, BuyEvent} from '../Styles/Styles';
import Navbar from '../Navbar/Navbar'
import {FcPlus} from 'react-icons/fc'

export default function Detail() {
  const eventShowed = useSelector(state => state.events);
  const url = useSelector( s => s.payCryptoURL);
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [reload, setReload] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(false);
  const [info, setInfo] = useState({tipoTicket: "", precio:0 })
  const updateComponent = (message) => {
    setReload(message)
  }
  console.log(reload)
  useEffect(() => {
    dispatch(searchEventById(id))
    setReload(false)
  }, [id, reload, dispatch])
  function handleBack() {
    eventShowed.shift()
    return history.goBack()
  }
  function submitData (e){

    if(e.precio === "Entrada Liberada"){

      return history.push("/");
    };

    let arr = [];

    arr.push( e.tipoDeTicket, "$ "+ e.precio,"cantidad: "+ cantidad + " ticket", eventShowed[0].date[0],"Ubicacion: "+ eventShowed[0].location)

    if(arr.join(" ").length > 200 ){

      arr = [];

      arr.push(  "$ "+ e.precio,"cantidad: "+ cantidad + " ticket", eventShowed[0].date[0])
    };


    // console.log(arr.join(" ").length);

    const datosPago = {
      
      total: (Number(e.precio) * cantidad / 400).toPrecision(3),
      name: eventShowed[0].name,
      description: arr.join(" "),
      typeTicket: e.tipoDeTicket,
      price: e.precio,
      cantidad: cantidad
      // img: eventShowed[0].image,
      // user:
      // id_user:
    };

    setInfo({
      tipoTicket: e.tipoDeTicket,
      precio: e.precio 
    });

    openModal();

    return dispatch(payCrypto(datosPago));

  };
  function buttonRest (){
    
    if(cantidad > 1){
      return setCantidad(cantidad - 1);
    };
  };
  function buttonSum (){

    return setCantidad( cantidad +1);
  };
  function openModal() {
    setIsOpen(true);
    timer();
  };
  function closeModal() {
    setIsOpen(false);
  };
  function timer() {setTimeout(function (){

    setIndex(true)
   
  }, 5000)};
  return (
    <div>
      <Navbar/>
      <DetailContainer>
      
      <DetailEvent>
        <div>
          <img src={eventShowed.length ? eventShowed[0].image : null} alt= ""/>
        </div>
        <div>
          <h1>{eventShowed.length ? eventShowed[0].name : null}</h1> 
          <Rating readonly={true} initialValue={eventShowed.length ? Math.round(eventShowed[0].rating) : null}/>
          <p>Location: {eventShowed.length ? eventShowed[0].location : null}</p>
          <div>
            <p>Description event: {eventShowed[0]?.description}</p>
          </div>
        </div>
        <div>
            <h1>Buy your Ticket</h1>
            {
              
          eventShowed[0] ? eventShowed[0].price.map((e, i) => 
            <div key={i}>
              
              <p>Type Ticket: {e.tipoDeTicket}</p>
              {e.precio === "Entrada Liberada" ? <p>Price: Free</p> :<p>Price: ${Number(e.precio) * cantidad} | U$D {(Number(e.precio) * cantidad / 400).toPrecision(3)}</p>}
              <button className='btn1' onClick={()=>submitData(e)}>comprar</button>
              <button className='btn1' hidden={cantidad > 1 ? false : true} onClick={()=>buttonRest()}>-</button>
              <button className='btn1' onClick={()=>buttonSum()}><FcPlus/></button>
              {cantidad > 1 ? <span> {cantidad} Tickets</span>: <span> {cantidad} Ticket</span>}
              
            </div>
          ) : 
          <p>Tickets Sold Out  :´(</p>
         }
          </div>
        </DetailEvent>
        <BuyEvent>
          <Map direction={eventShowed.length ? eventShowed[0].location : null}/>
          <Review updateComponent={updateComponent} event={eventShowed.length ? eventShowed[0].name : null}/>
        </BuyEvent>
         
        

      
      

      
      <Reviews reviews={eventShowed.length ? eventShowed[0].reviews : null}/>
      
      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">

        <div className='modal' >

          <h2>Eventix</h2>
          <h3>{eventShowed[0]?.name}</h3>
          <p>Type Ticket: {info.tipoTicket}</p>
          {cantidad > 1 ? <span> {cantidad} Tickets</span>: <span> {cantidad} Ticket</span>}
          <p>ARS$ {info.precio * cantidad}</p>
          <p>US$ {Number(info.precio) * cantidad / 400}</p>
          <p>You will be redirected to the Coinbase payment gateway</p>

          { 
            index? <div>

            <a href={`${url}`}><button>Buy Ticket</button></a>
            <button onClick={closeModal}>cancel</button>
    
            </div> : <p>Generating payment link</p>

          }

        </div>
          
      </Modal>   


      {/* 
      <div>
        <Link to={'/event/sale'}><button>BUY TICKETS</button></Link>
      </div> 
      */}

    </DetailContainer>
    </div>
    
  )
};
