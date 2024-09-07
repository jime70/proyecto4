const express = require("express")
const routes = express.Router()

require("../controllers/index") //nos movemos dos carpetas hacia atrás 

routes.get("/", getAllreservas)
routes.post("/", getcreatereservas);

module.exports = routes