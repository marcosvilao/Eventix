import React, { useEffect, useState }from 'react';
import { searchEventById } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import Map from '../Map/Map';
import { payCrypto } from '../../Redux/actions';


export default function Detail() {
  const eventShowed = useSelector(state => state.events)
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [cantidad, setCantidad] = useState(1);

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


    console.log(arr.join(" ").length);

    const datosPago = {
      
      total: (Number(e.precio) * cantidad / 335).toPrecision(3),
      name: eventShowed[0].name,
      description: arr.join(" "),

      // img: eventShowed[0].image,
      // user:
      // id_user:
    };

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


  return (
    <div>

      <div>
        <button onClick={handleBack}>
          BACK
        </button>
      </div>

      <div>
        <div>
          <img src={eventShowed.length ? eventShowed[0].image : null} alt= "" />
        </div>

        <div>

          
          <p>{eventShowed.length ? eventShowed[0].name : null}</p> 
          <p>{eventShowed.length ? eventShowed[0].location : null}</p>


         {
          eventShowed[0].price.length > 0 ? eventShowed[0].price.map((e, i) => 
            <div key={i}>
              
              <p>Type Ticket: {e.tipoDeTicket}</p>
              {e.precio === "Entrada Liberada" ? <p>Price: Free</p> :<p>Price: ${Number(e.precio) * cantidad} | U$D {(Number(e.precio) * cantidad / 335).toPrecision(3)}</p>}
              <button onClick={()=>submitData(e)}>comprar</button>
              <button hidden={cantidad > 1 ? false : true} onClick={()=>buttonRest()}>-</button>
              <button onClick={()=>buttonSum()}>+</button>
              {cantidad > 1 ? <span> {cantidad} Tickets</span>: <span> {cantidad} Ticket</span>}
              
            </div>
            
          ) : 
          <p>Tickets Sold Out  :´(</p>
         }
        </div>

      </div>
      <div>
        <p>Description event: {eventShowed[0].description}</p>
      </div>

      <Map direction={eventShowed.length ? eventShowed[0].location : null}/>

      {/* 
      <div>
        <Link to={'/event/sale'}><button>BUY TICKETS</button></Link>
      </div> 
      */}

    </div>
  )
};
