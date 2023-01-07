import React from 'react'
import {Link} from 'react-router-dom'
import {CardDate, H5, CardE } from '../Styles/Styles';
import './card.css'
import {FiShoppingCart} from 'react-icons/fi'


export default function Card({event}) {


  let price = event.price.length? event.price.map(e => e.precio) : ["Tickets Sold Out  :´("];
  let free = price?.filter(e => e === "Entrada Liberada");
  let minPrice = free.length? "FREE" : price[0] === "Tickets Sold Out  :´("? price[0] : Math.min(...price);


  return (
      <CardE>
        <Link to={'/home/' + event.id}>
          <div>
            <img src={event.image} alt={event.name}/>
          </div>
          <div className='shadow'>
            <div className='title'>
            <p>{event.name}</p>
          </div>
          
          <div className='text'>
              <div className='bottom'>
              <CardDate>{event.date}</CardDate>
              <div className='shop'>
                {typeof minPrice === "string"? <H5>Price: {minPrice}</H5> : <H5>Price: $ {minPrice}</H5>}
                <FiShoppingCart/>
              </div>
              
              {/* <BuyBtn>Buy Ticket</BuyBtn> */}
              </div>
          </div>
          </div>
          
        </Link>
      </CardE>
    )
}
