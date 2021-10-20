var express = require('express');
var router = express.Router();
var socketApi = require('../socketApi')


/* GET chat endpoint info. */
router.get('/', function(req, res, next) {
    res.send('chat handling endpoint');
});

/* POST send message. */
router.post('/send-message', function(req, res, next) {
    socketApi.sendMessage()
    res.send('send a message');
});

module.exports = router;
