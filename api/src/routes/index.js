const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const api = require("./Api");
const events = require("./events");
const filterDate = require("./filterDate");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/api", api);

router.use("/events", events);

router.use("/filterdate", filterDate);




module.exports = router;