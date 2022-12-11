const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const api = require("./Api");
const events = require("./events");
const filter = require("./filterByAlphabet");
const filterDate = require("./filterDate");
const eventname = require("./eventName");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/api", api);

router.use("/events", events);

router.use("/filteralphabet", filter);

router.use("/filterdate", filterDate);

router.use("/eventname", eventname);

module.exports = router;