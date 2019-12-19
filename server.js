//imports
const express = require('express')
const io = require('socket.io') (server)

//app setup
const app = express()
const server = app.listen(1337)

//static files
app.use(express.static(__dirname + "/public"))

//socket setup
io.on('connection',function (socket) {//2

socket.emit('greeting', {msg:'Greetins from server Node, brought to you by Sockets! - Server'}); //3
    socket.on('thankyou', function (data){//7
        console.log(data.msg)
    });
});


var counter = 0