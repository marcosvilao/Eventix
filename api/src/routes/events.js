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

module.exports= route;