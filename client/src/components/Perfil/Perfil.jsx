import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentHandler } from "../../Redux/actions";


export default function Perfil () {

    const dispatch = useDispatch();
    const userId = 1


    useEffect(()=> {
        dispatch(paymentHandler(userId));

    },[dispatch]);


    const ticket = useSelector(s => s.dataPago);
    
    const ticketsPurchased = ticket.filter(e => e.ticket.pendingPayment === true || e.ticket.paymentMade === true )

    console.log("infoticket", ticketsPurchased);

    return (

        <div>

            <h1>Perfil</h1>
            <p>TICKETS:</p>

            { ticketsPurchased.length > 0 ? 

                ticketsPurchased.map(e =>
                    
                    <div>
                        <p>Event: {e.ticket.event}</p> 
                    
        
                        { e.ticket.paymentMade === true ? <img src={e.QR} /> : <p>Pending Payment...</p>}
                    </div>
                ): 
                <p>No tickets</p>
                
            }
         

        </div>
        
    )

};