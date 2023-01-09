const {Router} = require("express");
const addReview = require('../controllers/reviews')

const route = Router();

route.post("/", async(req,res) =>{

    try {
        
        await addReview(req.body);

        res.status(200).send("Review created successfully");


    } catch (error) {
        
        res.status(500).send(console.log(error.message));
    }
})

module.exports = route