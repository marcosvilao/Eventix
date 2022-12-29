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
            locationMap: e.location.slice( e.location.indexOf("\n",0) + 1, e.location.length),
            price: e.price?.map(el=>{

                return {
                    tipoDeTicket: el.tipoDeTicket,
                    precio:  el.precio != "Entrada Liberada" ? el.precio.replace(/\D/g, "") : el.precio
                }
            }),
            description: e.description.map( e => e.replace("Passline.", "Eventix.").replace("Passline", "Eventix")).filter(e=> !e.includes("  ")),
            image: e.image,
            imageBanner: e.imageBanner
        };
    });


    const eventDB = await Event.findAll();

    const events = [...eventDB, ...eventApi];

    return events;
};

module.exports= getEvents;