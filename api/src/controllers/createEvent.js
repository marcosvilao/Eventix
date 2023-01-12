const {Event, User} = require("../db");

const createEvent = async(req) =>{

    const {name, date, image, location, price, description, typeEvent, userId} = req;

    const event = await Event.create({

        name,
        date,
        image,
        location,
        price,
        description,
        typeEvent
    })

    const user = await User.findOne({
        where : {id : userId}
    })

    await user.addEvent(event)
};

module.exports = createEvent;