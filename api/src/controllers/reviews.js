const {Event} = require('..db/')
const {getEvents} = require('../controllers/getEvents')

async function addReview(name, title, stars, text) {
    
    if(stars > 5 || stars < 1) {
        throw new Error('must be between 1 and 5')
    }
    else if(!title || !stars || !text){
        throw new Error('missing parameters')
    }
    else{
        
    }
}