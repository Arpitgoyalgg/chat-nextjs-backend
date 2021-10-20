var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

socketApi.sendMessage = function() {
    console.log('send message function executed socket')
}

module.exports = socketApi;
