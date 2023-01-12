import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentHandler, notificationPayment } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import { PersonalContainer } from "../Styles/Styles";
import './Perfil.css'

export default function Perfil () {
    const [Render, setRender] = useState(null)

    const dispatch = useDispatch();
    const userId = 1
    const ticket = useSelector(s => s.dataPago);


    useEffect(()=> {
        dispatch(paymentHandler(userId));
        dispatch(notificationPayment(userId))

    },[dispatch]);

    
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
        setRender()

    }

    const eventClick = (e) => {
        e.preventDefault();
        setRender()

    }

    return (

        <div>
            <Navbar/>
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