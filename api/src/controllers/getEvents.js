const getApi = require("../../../apiDev/API");


const getEvents = async()=>{

    const api = await getApi();
    
    let id = 1;

    const event = api.results.map(e => {

        return {

            id: id++,
            name: e.name,
            date: e.date,
            location: e.location,
            price: typeof e.price  === "object"? e.price.filter(e => e.includes("$") ): "Info price", 
            image: e.image
        };
    });

    return event;
};

module.exports= getEvents;