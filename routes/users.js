var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', async function(req, res, next) {

  // fetch users from postgres database heroku
  const client = await db.connect();
  const result = await client.query('SELECT * FROM Users');
  console.log(result.rows)
  res.send(result.rows);
});

/* POST add user. */
router.post('/add', async function(req, res, next) {
  const user = req.body.name
  console.log(`data coming - ${user}`)

  // add user to postgres database heroku
  const client = await db.connect();
  const result = await client.query(`INSERT INTO Users(name) VALUES('${user}')`);

  res.send('add user');
});

module.exports = router;
