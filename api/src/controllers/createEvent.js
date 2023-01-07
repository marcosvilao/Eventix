const {Event} = require("../db");

const createEvent = async(req) =>{

    const {name, date, image, location, price, description, reviews} = req;

    await Event.create({

        name,
        date,
        image,
        location,
        price,
        description,
        reviews
    })
};

module.exports = createEvent;