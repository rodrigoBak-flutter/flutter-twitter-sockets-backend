const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

//Para que la conexion por Sockets funcione
//npm install socket.io@2.3.0
//Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


//Path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));



server.listen(process.env.PORT, (e) => {
    if(e) throw new Error(e);
    
    console.log(`Servidor corriendo en puerto`, 3000);
});