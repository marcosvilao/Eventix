const getApi = require("../../../apiDev/API");
const {Event}= require("../db");


const getEvents = async()=>{

    const api = await getApi();
    
    let id = 1;

    const eventApi = api.results.map(e => {

        return {

            id: id++,
            name: e.name,
            date: e.date.length > 0 ? e.date : ["Funciones Disponibles"],
            location: e.location,
            // price: typeof e.price  === "object"? e.price.filter(e => e.includes("$") ): "Info price", // solo muestra un precio de entrada
            price: e.price,
            description: e.description,
            image: e.image
        };
    });


    const eventDB = await Event.findAll();

    const events = [...eventDB, ...eventApi];

    return events;
};

module.exports= getEvents;