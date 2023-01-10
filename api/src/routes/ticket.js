const {Router} = require("express");
const getTickets= require("../controllers/getTickets");
const qrCode = require("qrcode");
const {Ticket} = require("../db");
const nodemailer = require("nodemailer");
require('dotenv').config();
const {PASS_GMAIL, GMAIL, EMAIL_PRUEBA} = process.env;


const route = Router();


route.get("/notification/:infoPago", async(req,res)=>{
    

    try {
        
        const {infoPago} = req.params;

        // console.log("id0", infoPago);
        
        const ticket = await getTickets(Number(infoPago));


        if(typeof ticket === "string"){

            // console.log("tipeof ticket", typeof ticket === "string");
            return res.status(400).send("The user has not purchased tickets recently")
        }  


        let ticketUser = []

        // console.log("largoo",ticket.length);
        
        for(let i=0; i<ticket.length; i++){ 

            if(ticket[i].emailSent === false && ticket[i].paymentMade === true){ 
                
                const qrGenerate = async text => {

                    try {

                        let qr = await qrCode.toDataURL(text);

                        ticketUser.push({
                            ticket: ticket[i],
                            QR: qr
                        })

                        // console.log("ticketfuncion", ticket[0]);
                        // console.log("qr::::", qr);
                        if(i == ticket.length -1){

                            for(let i= 0; i< ticketUser.length; i++){

                                // console.log("tiquet enviado", ticketUser[i].QR);
                
                                // console.log("id ticket",ticketUser[i].ticket.id);
                                //.................................

                                await Ticket.update({emailSent: true},{ where: {id: ticketUser[i].ticket.id}})

                                if(i == ticketUser.length -1){

                                    const transporter = nodemailer.createTransport({
                                        host: 'smtp.gmail.com',   //smtp.ethereal.email
                                        port: 465,   //587
                                        secure: true,   // true for 465, false for other ports
                                        auth: {
                                            user: `${GMAIL}`,
                                            pass: `${PASS_GMAIL}`
                                        }
                                    });

                                    let mostrarInfo = ticketUser.map(function(info){
                                        return  '<div>'
                                                    +'<p>'+info.ticket.event+'</p>'
                                                    +'<p>QR:</p>'
                                                    +'<img src='+info.QR+' />' 
                                                +'</div>';
                                    }).join('');
                                
                                    const mailOption = {

                                        from: 'Eventix', // sender address
                                        to: `${EMAIL_PRUEBA}`, // list of receivers
                                        subject: "Eventix tickets", // Subject line
                                        html: `<div><p>Thanks for your purchase. Enjoy the event :D</p>${mostrarInfo}<p>Eventix</p></div>`
                                        
                                        // text: ` Event: ${ticketUser[i].ticket.event}
                                        // price: ${ticketUser[i].ticket.price}
                                        // typeTicket: ${ticketUser[i].ticket.typeTicket}
                                        // QR: ${ticketUser[i].QR}`, // plain text body
                                        
                                    };


                                    transporter.sendMail(mailOption, async(err, info) =>{

                                        if(err){

                                            res.status(404).send(err.message);
                                        }else{

                                            console.log("email enviado");
                                            
                                            res.status(200).json(info);
                                        };
                                    });
                                };

                            };
                
                        };
                        
                
                            
                    } catch (error) {
                        
                        console.log(error);
                    };
                

                };
                                
                qrGenerate(`                      
                    event: ${ticket[i].event},
                    price: ${ticket[i].price},
                    typeTicket: ${ticket[i].typeTicket},
                    usersId: 01,
                    ticketId: ${ticket[i].id}
                `);
                // console.log("ticketevent:", ticket[i].event);
            }
        }
           
        
    } catch (error) {
        
        res.status(500).json(error.message)
    }
});



route.get("/:userId", async(req,res)=>{

    try {
        
        const {userId} = req.params;


        const ticket = await getTickets(Number(userId));

        if(typeof ticket === "string"){

            return res.status(400).send("The user has not purchased tickets recently")
        } 

        let ticketUser = []

        //console.log("largoo",ticket.length);
        
        for(let i=0; i<ticket.length; i++){ 

            const qrGenerate = async text => {

                try {

                    let qr = await qrCode.toDataURL(text);

                    ticketUser.push({
                        ticket: ticket[i],
                        QR: qr
                    });

  
                    // console.log("ticketfuncion", ticket[0]);
                    // console.log("qr::::", qr);
                    if(i == ticket.length -1){

                        return res.status(200).json(ticketUser);
                    };
                    
                        
                } catch (error) {
                    
                    console.log(error);
                };
            

            };
                            
            qrGenerate(`                      
                event: ${ticket[i].event},
                price: ${ticket[i].price},
                typeTicket: ${ticket[i].typeTicket},
                usersId: 01,
                ticketId: ${ticket[i].id}
            `);
            // console.log("ticketevent:", ticket[i].event);
        };
 

    } catch (error) {
        
        res.status(500).send(error.message);
    }
});

module.exports= route;
