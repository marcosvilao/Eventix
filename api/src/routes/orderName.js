const {Router} = require("express");
const orderByName = require("../controllers/orderByName");

const route = Router();

route.get("/", async(req,res)=>{

    try {
        
        const {order} = req.body;

       const eventOrder = await orderByName(order);

        res.status(200).json(eventOrder);


    } catch (error) {
        
        res.status(500).send(error.message);
    }
});

module.exports = route;