const {Router} = require("express");
const {addReview} = require('../controllers/reviews')
const {Review, User} = require("../db")

const route = Router();

route.post("/", async(req,res) => {

    try {
        
        await addReview(req.body);

        res.status(200).send("Review created successfully");


    } catch (error) {
        
        res.status(500).send(console.log(error.message));
    }
})

route.get("/:userId/reviews", async(req,res) => {

    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId)
           if (!user) {
                       return res.status(404).send({ message: 'User not found' });
                   }
           const reviews = await user.getReviews()
           res.status(200).send(reviews);
   } catch (error) {
       res.status(500).send({ message: 'Error fetching events' });
   }
})

module.exports = route