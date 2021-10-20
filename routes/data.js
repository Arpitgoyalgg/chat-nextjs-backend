var express = require('express');
var router = express.Router();
var socketApi = require('../socketApi')


/* GET chat data. */
router.get('/', function(req, res, next) {
    res.send('data endpoint');
});

/* GET chat data. */
router.get('/all-chats', function(req, res, next) {
    socketApi.sendNotification()
    res.send('all chats for a user');
});

module.exports = router;
