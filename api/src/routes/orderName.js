const {Router} = require("express");
const filterByAlphabet = require("../controllers/FilterbyAlphabet");

const route = Router();

route.get("/", async(req,res)=>{

    try {
        
        const {filter} = req.body;

       const eventFilter = await filterByAlphabet(filter);

        res.status(200).json(eventFilter);


    } catch (error) {
        
        res.status(500).send(error.message);
    }
});

module.exports = route;