const {Router} = require("express");
const filterByDate = require("../controllers/filterByDate");
const checkData = require("../middlewares/checkDataFilterDate");

const route = Router();

route.get("/", checkData, async(req, res) =>{

    try {

        const {day, month, year, funcionesDisponibles} = req.body;   // Nota los meses en español y con mayuscula : Enero, Febrero..

        const eventsDate = await filterByDate(day, month, year, funcionesDisponibles);
        
        typeof eventsDate === "object" ? res.status(200).json(eventsDate) : res.status(400).send(eventsDate);

    } catch (error) {
        
        res.status(500).send(error.message);
    };
});

module.exports = route;