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
        await updateEventRating(event.name)
    
}

const updateEventRating = async (eventName) => {
    const event = await Event.findOne({ where: { name: eventName } });
    const reviews = await Review.findAll({ where: { eventId: event.id } });
    const totalStars = reviews.reduce((total, review) => total + review.stars, 0);
    const averageStars = totalStars / reviews.length;
    event.rating = averageStars;
    await event.save();
  }
  

module.exports = {addReview, updateEventRating}