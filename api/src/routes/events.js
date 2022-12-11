const {Router} = require("express");
const getEvents = require("../controllers/getEvents");

const route = Router();

route.get("/",async(req,res)=>{         // GET http://localhost:3001/events
    const {name} = req.query
    try {
        const event = await getEvents();
        if(name){
            const searchEvent = event.filter((event) => event.name.toLowerCase().includes(name.toLowerCase())) 
            searchEvent.length ? 
            res.status(200).json(searchEvent)
            :
            res.status(404).json({msg : `Can´t find event ${name}`})
        } else {
            res.status(200).json(event);
        }
    } catch (error) {

        res.status(500).send(error.message);
        
    };

});



route.get("/:id",async(req,res)=>{         // GET http://localhost:3001/events

    try {
        const {id} = req.params
        const event = await getEvents();
        const eventId = event.filter((event) => event.id == id)

        res.status(200).json(eventId);

    } catch (error) {

        res.status(500).send(error.message);
        
    };

});

module.exports= route;