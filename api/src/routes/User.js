const {Router} = require("express");
const getUser = require("../controllers/getUser");
const route = Router();

route.get("/:id",async(req,res)=>{         // GET http://localhost:3001/events

    try {
        const {id} = req.params
        const user = await getUser(id)
        

        res.status(200).json(user);

    } catch (error) {

        res.status(500).send(error.message);
        
    };

});
