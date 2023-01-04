import React from 'react'
import {Link} from 'react-router-dom'
import { EventCard, EventImg, ECard, CardImage, CardTitle, CardDate, H5, BuyBtn } from '../Styles/Styles';
import './card.css'


export default function Card({event}) {


  let price = event.price.length? event.price.map(e => e.precio) : ["Tickets Sold Out  :´("];
  let free = price?.filter(e => e === "Entrada Liberada");
  let minPrice = free.length? "FREE" : price[0] === "Tickets Sold Out  :´("? price[0] : Math.min(...price);


  return (
    <ECard>
        <Link to={'/home/' + event.id}>
            <CardImage src={event.image} alt={event.name} />
            <CardTitle>{event.name}</CardTitle>
            <div className='bottom'>
            <CardDate>{event.date}</CardDate>
            {typeof minPrice === "string"? <H5>Price: {minPrice}</H5> : <H5>Price: $ {minPrice}</H5>}
            <BuyBtn>Buy Ticket</BuyBtn>
            </div>
        </Link>
    </ECard>
  )
}
