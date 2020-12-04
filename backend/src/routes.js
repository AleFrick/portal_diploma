const express = require('express')
const routes = express.Router()

const LoginController = require("./controllers/LoginController");

//Rota que controlará o login no app
routes.get('/user', LoginController.index);

//Exporta uma váriavel de um arquivo
module.exports = routes;