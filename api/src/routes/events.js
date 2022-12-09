const {Router} = require("express");
const getApi = require("../../../apiDev/API");

const route = Router();

route.get("/",async(req,res)=>{         // GET http://localhost:3001/events

    try {
        
        const api = await getApi();
        let id = 1;

        const event = api.results.map(e => {

            return {

                id: id++,
                name: e.name,
                date: e.date,
                location: e.location,
                // price: e.price.find(e => e.imcludes("$"))? e.price.find(e => e.imcludes("$")) : "info price",
                image: e.image
            }
        })

        res.status(200).json(event);

    } catch (error) {

        res.status(500).send(error.message);
        
    };

});

module.exports= route;