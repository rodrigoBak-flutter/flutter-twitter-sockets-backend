const {io} = require('../index');

//Para que la conexion por Sockets funcione
//npm install socket.io@2.3.0
//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
     });

     

     client.on('emitir-mensaje',(payload) => {
         console.log(payload);
         //Emite el mensaje a todo el mundo
        //io.emit('nuevo-mensaje', 'Holaaa');

        //Emite a todos menos al que lo emitio
        client.broadcast.emit('nuevo-mensaje',payload);
     });






     client.on('mensaje', (payload) =>{
        // console.log('mensaje', payload);

         io.emit( 'mensaje', {
            admin: `nuevo mensaje`
         });
     } );


  });