const getEvents = require("../controllers/getEvents");


const filterByAlphabet = async(filter) =>{

    const events = await getEvents();

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

};

module.exports = filterByAlphabet;