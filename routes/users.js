var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const client = await db.connect();
  const result = await client.query('SELECT * FROM Users');
  console.log(result.rows)
  res.send(result.rows);
});

/* POST add user. */
router.post('/add', function(req, res, next) {
  console.log(`data coming - ${req.body.name}`)
  users.push(req.body.name)
  res.send('add user');
});

module.exports = router;
