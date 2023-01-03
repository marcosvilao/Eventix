import React from 'react'
import {Link} from 'react-router-dom'
import { EventCard, EventImg } from '../Styles/Styles';
import './card.css'


export default function Card({event}) {


  let price = event.price.length? event.price.map(e => e.precio) : ["Tickets Sold Out  :´("];
  let free = price?.filter(e => e === "Entrada Liberada");
  let minPrice = free.length? "FREE" : price[0] === "Tickets Sold Out  :´("? price[0] : Math.min(...price);


  return (
    <EventCard>
        <Link to={'/home/' + event.id}>
          <div>
            <EventImg src={event.image} alt={event.name} />
          </div>
          <div>
            <h3>{event.name}</h3>
            <h5>{event.date}</h5>
            {typeof minPrice === "string"? <h5>Price: {minPrice}</h5> : <h5>Price: $ {minPrice}</h5>}
          </div>
          
        </Link>
    </EventCard>
  )
}
