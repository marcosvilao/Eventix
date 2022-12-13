const getEvents = require("./getEvents");


const filterByAlphabet = async(filter) =>{

    console.log(filter);

    const events = await getEvents();

    if(filter !== "notSort"){

        const eventFilter = filter === "A-Z" ? events.sort(function(a,b){

            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
            return 0;
        
        }) : events.sort(function (a,b){

            if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;

            return 0;
        });

        return eventFilter;

    }else{

        return events;
    };
    

};

module.exports = filterByAlphabet;