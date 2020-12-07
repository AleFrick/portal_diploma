const express = require('express')
const routes = express.Router()

const DiplomaController = require("./controllers/DiplomaController");

//Rota que controlará o login no app
routes.get('/diploma/:codigo', DiplomaController.index);

//Exporta uma váriavel de um arquivo
module.exports = routes;