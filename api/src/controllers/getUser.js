const {User, Review, Event, Ticket} = require('../db')

const getUser = (id) => {
    const user = User.findByPk(id, {
        include : Event,
        include : Review,
        include : Ticket
    })

    if(!user){
        throw new Error('User doesnt exist')
    }

    return user
}

module.exports = getUser