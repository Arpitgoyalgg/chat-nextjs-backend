var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users list');
});

/* POST add user. */
router.post('/add', function(req, res, next) {
  res.send('add user');
});

module.exports = router;
