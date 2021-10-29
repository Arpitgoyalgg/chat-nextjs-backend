const io = require( "socket.io" )();
const socketapi = {
    io: io
};

global.user_room_map = {'Arpit': '', 'Vaibhav': '', 'Tushar': '', 'Big': ''};

global.chatroom_data = {
    'Arpit:Vaibhav': [{author: 'Arpit', text: 'hi'}],
    'Arpit:Tushar': [{author: 'Arpit', text: 'hi'}],
    'Arpit:Big': [{author: 'Arpit', text: 'hi'}],
    'Vaibhav:Tushar': [{author: 'Vaibhav', text: 'hello'}],
    'Vaibhav:Big': [{author: 'Vaibhav', text: 'hello'}],
    'Tushar:Big': [{author: 'Tushar', text: 'hello'}],
};


// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on('login', function(userKey) {

        if(Object.keys(user_room_map).includes(userKey)) {
            user_room_map[userKey] = socket.id;
            socket.emit('add onlineUsr', userKey);
        }
        console.log('working login!')
    });

    socket.on('add msg', function(curRoomName, curRoomUser,msg) {
        // add msg to database
        chatroom_data[curRoomName].push(msg);
        const roomId = user_room_map[curRoomUser];
        // broacast newMsg to other client
        let author = curRoomName.replace(curRoomUser, "").replace(":", "");
        io.to(roomId).emit('realtime chatting', author, curRoomName, msg);

        console.log('working add msg')
    });

    socket.on('disconnect', function() {

        let usr = Object.keys(user_room_map).find(key => user_room_map[key]===socket.id);
        user_room_map[usr] = "";

        console.log('disconnected')

    });

});
// end of socket.io logic

module.exports = socketapi;
