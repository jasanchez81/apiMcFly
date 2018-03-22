const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

/*Cargando las rutas:*/
const tweetsApi = require('./routes/index');

/*Inicio del servidor con express*/
const app = express();

//Escuchando por el puerto 8081:
app.listen(8081, function(){
  console.log("Esperando peticiones...");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', tweetsApi);

module.exports = app;
