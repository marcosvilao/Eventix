const getEvents = require("../controllers/getEvents");


const filterByDate = async(day, month, year, funcionesDisponibles) =>{

    const events = await getEvents();

    const events2 = events.map(e => {
        
        return {  
            id: e.id,
            name: e.name,
            date: e.date[0].split(" "),
            location: e.location,
            price: e.price, 
            image: e.image
        }
    
    });

    if(funcionesDisponibles){   // pasarle por body: {"funcionesDisponibles" : "Disponibles"}


        const eventsDisponibles = events2.filter( e => e.date[1] === funcionesDisponibles.toString());

        if(eventsDisponibles.length > 0){

            const eventsDisponibles2 = eventsDisponibles.map( e => {

                return {

                    id: e.id,
                    name: e.name,
                    date: e.date.join(" "),
                    location: e.location,
                    price: e.price, 
                    image: e.image
                };
            });

            return eventsDisponibles2;
        }; 
        
        return "No hay evento en esa fecha";

    };


    if(day && month && year){

        const eventsFilterDate = events2.filter( e => e.date[1] === day.toString() && e.date[3] === month.toString() && e.date[4] === year.toString());

        if(eventsFilterDate.length > 0){

            const eventsDate = eventsFilterDate.map(e => {

                return {
                    id: e.id,
                    name: e.name,
                    date: e.date.join(" "),
                    location: e.location,
                    price: e.price, 
                    image: e.image
                }

            });

            return eventsDate;
        };
           
        return "No hay evento en esa fecha";
    };
    
    return "Debe ingresar una fecha";
};

module.exports = filterByDate;