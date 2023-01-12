import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentHandler, notificationPayment, getUserEvents, getUserReviews } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import { PersonalContainer } from "../Styles/Styles";
import './Perfil.css';
import {Rating} from 'react-simple-star-rating';
import { Carousel } from "react-responsive-carousel";
import Modal from '../createEvent/createEvent'
import {Link} from 'react-router-dom'

export default function Perfil () {
    const [Render, setRender] = useState(null)

    const dispatch = useDispatch();
    const user = useSelector((state => state.user))
    const ticket = useSelector(s => s.dataPago);
    const events = useSelector(state => state.userEvents)
    const reviews = useSelector(state => state.userReviews)

    const userId = Object.keys(user).length > 0 ? user.user.id : null
 
    const [isOpen, setIsOpen] = useState(false)

    const openIt = () => {
      setIsOpen(true)
    }
  
    const closeIt = () => {
      setIsOpen(false)
    }

    useEffect(()=> {
        dispatch(paymentHandler(userId));
        dispatch(notificationPayment(userId))
        dispatch(getUserEvents(userId))
        dispatch(getUserReviews(userId))
    },[dispatch, userId]);

    
    const ticketsPurchased = ticket.filter(e => e.ticket.pendingPayment === true || e.ticket.paymentMade === true )

    // console.log("infoticket", ticketsPurchased);
    const ticketClick = (e) => {
        e.preventDefault();
        setRender(ticketsPurchased.length > 0 ? 
            
            ticketsPurchased.map(e =>
                
                <div>
                    <p>Event: {e.ticket.event}</p> 
                
    
                    { e.ticket.paymentMade === true ? <img src={e.QR} alt='' /> : <p>Pending Payment...</p>}
                </div>
            ): 
            <p>No tickets</p>)

    }

    const reviewClick = (e) => {
        e.preventDefault();
        setRender(reviews.length > 0 ? 
            <Carousel>
                {
                  reviews.map(e =>
                
                <div>
                    <h3 style={{'text-align' : 'center'}}>{e.title}</h3>
                    <Rating readonly={true} initialValue={e.stars} />
                    <p style={{'text-align' : 'center'}}>{e.text}</p>
                </div>
            )  
                }
                
            </Carousel>
            : 
            <p>No Reviews</p>)

    }

    const eventClick = (e) => {
        e.preventDefault();

        setRender(events.length > 0 ? 
            <div style={{display : 'flex'}}>{events.map(e =>
                <Link to={'/home/' + e.id}>
                    <div>
                        <img src={e.image} alt="" styles={{'border-radius' : '10px', 'margin-left' : '3vw'}} width={278} height={300}/>
                        <h3>{e.name}</h3>
                    </div>
                </Link>
                
            ) }
                
            </div>
           : 
            <p>No events</p>)

    }

    return (

        <div>
            <Navbar open={openIt}/>
            <PersonalContainer>
               <nav>
                    <button className="btn1" onClick={ticketClick}>Tickets</button> 
                    <button className="btn2" onClick={reviewClick}>Reviews</button>
                    <button className="btn3" onClick={eventClick}>Events</button>

                </nav>
                <section>
                    {Render}
                </section> 
            </PersonalContainer>
            
            
            
            
            <Modal isopen={isOpen} close={closeIt}/>
            {/* { ticketsPurchased.length > 0 ? 

                ticketsPurchased.map(e =>
                    
                    <div>
                        <p>Event: {e.ticket.event}</p> 
                    
        
                        { e.ticket.paymentMade === true ? <img src={e.QR} alt='' /> : <p>Pending Payment...</p>}
                    </div>
                ): 
                <p>No tickets</p>
                
            } */}
         

        </div>
        
    )

};