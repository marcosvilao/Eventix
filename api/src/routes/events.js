const {Router} = require("express");
const getEvents = require("../controllers/getEvents");

const route = Router();

route.get("/",async(req,res)=>{         // GET http://localhost:3001/events

    try {
        
        const event = await getEvents();

        res.status(200).json(event);

    } catch (error) {

        res.status(500).send(error.message);
        
    };

});

route.get("/",async(req,res)=>{         // GET http://localhost:3001/events

    try {
        const {name} = req.query
        const event = await getEvents();

        const searchEvent = event.filter((event) => event.name === name) 

        res.status(200).json(searchEvent);

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