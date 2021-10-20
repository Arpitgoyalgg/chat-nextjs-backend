var express = require('express');
var router = express.Router();

let user_room_map = {'Arpit': '', 'Vaibhav': '', 'Hari': '', 'Shyam': ''};
let users = []


/* GET users listing. */
router.get('/', function(req, res, next) {
  users = []
  Object.keys(user_room_map).map(function (key,index) {
    users.push(key)
  })
  console.log(`sending - ${users}`)
  res.send(users);
});

module.exports = router;
