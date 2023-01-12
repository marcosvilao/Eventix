const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    User
  } = require('../db');

const api = require("./Api");
const events = require("./events");
const filters = require("./filters");
const paycrypto = require("./paycrypto");
const ticket = require("./ticket");
const review = require("./reviews");
const users = require("./users");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/api", api);

router.use("/events", events);

router.use("/filters", filters);

router.use("/paycrypto", paycrypto);

router.use("/ticket", ticket);

router.use("/review", review);

router.use("/users", users);

//c0dbf7d05410012bd9d4119dff90a9db3443ca1b090c78c93ca334ff35a185fe


module.exports = router;