const getEvents = require("../controllers/getEvents");


const orderByName = async(order) =>{

    const events = await getEvents();

    const eventOrder = order === "A-Z" ? events.sort(function(a,b){

        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
        return 0;
    
    }) : events.sort(function (a,b){

        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;

        return 0;
    });

    return eventOrder;

};

module.exports = orderByName;