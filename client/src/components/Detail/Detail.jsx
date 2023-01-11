import React, { useEffect, useState }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Map from '../Map/Map';
import { payCrypto } from '../../Redux/actions';
import Modal from 'react-modal';
import "./Detail.css";
import { Btn, Suma, BuyDetail, DetailImg, DetailInfo, H1, ModalInfo } from '../Styles/Styles';

export default function Detail() {

  const eventShowed = useSelector(state => state.events);
  const url = useSelector( s => s.payCryptoURL);

  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()

  const [cantidad, setCantidad] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(false);
  const [info, setInfo] = useState({tipoTicket: "", precio:0 })

  useEffect(() => {
    dispatch(searchEventById(id))
  }, [id, dispatch])


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

      <div>
        <Btn onClick={handleBack}>
          BACK
        </Btn>
      </div>

        <div>
          <DetailImg src={eventShowed.length ? eventShowed[0].image : null} alt= "" />
        </div>
        
      <DetailInfo>
        <div>

          
          <H1>{eventShowed.length ? eventShowed[0].name : null}</H1> 
          <p>{eventShowed.length ? eventShowed[0].location : null}</p>

          {console.log(eventShowed)}
         {
          eventShowed[0] ? eventShowed[0].price.map((e, i) => 
            <div key={i}>
              
              <p>Type Ticket: {e.tipoDeTicket}</p>
              {e.precio === "Entrada Liberada" ? <p>Price: Free</p> :<p>Price: ${Number(e.precio) * cantidad} | U$D {(Number(e.precio) * cantidad / 400).toPrecision(3)}</p>}
              <BuyDetail onClick={()=>submitData(e)}>Comprar</BuyDetail>
              <Suma hidden={cantidad > 1 ? false : true} onClick={()=>buttonRest()}>-</Suma>
              <Suma onClick={()=>buttonSum()}>+</Suma>
              {cantidad > 1 ? <span> {cantidad} Tickets</span>: <span> {cantidad} Ticket</span>}
              
            </div>
          ) : 
          <p>Tickets Sold Out  :´(</p>
         }
        

            <div>
              <p>Description event: {eventShowed[0]?.description}</p>
            </div>
            
        </div>

      <Map direction={eventShowed.length ? eventShowed[0].location : null}/>
      </DetailInfo>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">

        <ModalInfo>
        <div className='modal'>

          <h2>Eventix</h2>
          <h3>{eventShowed[0]?.name}</h3>
          <p>Type Ticket: {info.tipoTicket}</p>
          {cantidad > 1 ? <p> {cantidad} Tickets</p>: <p> {cantidad} Ticket</p>}
          <p>ARS$ {info.precio * cantidad}</p>
          <p>US$ {Number(info.precio) * cantidad / 400}</p>
          <p>You will be redirected to the Coinbase payment gateway</p>

          { 
            index? <div>

            <a href={`${url}`}><Btn>Buy Ticket</Btn></a>
            <Btn onClick={closeModal}>Cancel</Btn>
    
            </div> : <p>Generating payment link</p>

          }

        </div>
        </ModalInfo>       
      </Modal>   


      {/* 
      <div>
        <Link to={'/event/sale'}><button>BUY TICKETS</button></Link>
      </div> 
      */}

    </div>
  )
};
