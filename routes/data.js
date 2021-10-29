var express = require('express');
var router = express.Router();

/* GET chat data. */
router.get('/', function(req, res, next) {
    res.send('data endpoint');
});

/* GET chat data. */
router.get('/all-chats', function(req, res, next) {
    res.send({data: global.chatroom_data});
});

module.exports = router;
