const {Ticket} = require("../db");


const getTickets = async(userId) =>{

    const ticket = await Ticket.findAll({

        where:{usersId: userId}
    });

    if(!ticket.length > 0){

        // console.log("ticketget::", ticket);
        return "No tickets"
    };

    return ticket;

};

module.exports = getTickets;