var express = require('express');
var router = express.Router();

let chatroom_data = {
    'Arpit:Vaibhav': [{author: 'Arpit', text: 'hi'}],
    'Arpit:Tushar': [{author: 'Arpit', text: 'hi'}],
    'Arpit:Big': [{author: 'Arpit', text: 'hi'}],
    'Vaibhav:Tushar': [{author: 'Vaibhav', text: 'hello'}],
    'Vaibhav:Big': [{author: 'Vaibhav', text: 'hello'}],
    'Tushar:Big': [{author: 'Tushar', text: 'hello'}],
};

/* GET chat data. */
router.get('/', function(req, res, next) {
    res.send('data endpoint');
});

/* GET chat data. */
router.get('/all-chats', function(req, res, next) {
    res.send({data: chatroom_data});
});

module.exports = router;
