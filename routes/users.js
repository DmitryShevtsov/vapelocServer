var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;



router.get("/", function (req, res) {
  res.json({message: "HEIL"})
});

router.post('/registration', function (req, res) {
  console.log("body : ",  req.body);
      User.create({
        username: req.body.username,
        phone: req.body.phone,
        password: req.body.password
      }).then((user) => {
        res.status(201);
        res.json(user);
      })
});

router.post('/session', function (req, res) {
  User.find({
    where: {
      phone: req.phone
    }

  }).then((user) => {
    if (user.password != req.password) {
      res.status(401).json({message: 'Invalid email or password'});
    }
    else {
      res.stat(202).json(user);
    }
  })
});

router.delete('/session', function (req, res) {
  // TOKEN REGENERATION MUST BE HERE !!!
  res.status(202).json({message: 'Logout successful'});
});

module.exports = router;
