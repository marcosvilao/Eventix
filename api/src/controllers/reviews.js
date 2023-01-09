const {Event, Review} = require('../db')

const addReview = async (req) => {

    const {eventName, title, stars, text} = req

    if(stars > 5 || stars < 1) {
        throw new Error('must be between 1 and 5')
    }
    if(!eventName || !title || !stars || !text){
        throw new Error('missing parameters')
    }

        const review = await Review.create({
            title,
            stars,
            text
        })

        const event = await Event.findOne({
            where : {name : eventName}
        })
        await event.addReview(review)
    
}

module.exports = addReview