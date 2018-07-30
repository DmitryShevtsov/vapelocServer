var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;


router.get("/", function (req, res) {
  res.json({message: "HEIL"})
});

router.post('/registration', function (req, res) {
  if (req.body.phone && req.body.password && req.body.username) {
    User.find({
      where: {
        phone: req.body.phone
      }
    }).then((user) => {
      if (user) {
        res.json({message: 'User with this phone number already exist'})
      }
      else {
        User.create({
          username: req.body.username,
          phone: req.body.phone,
          password: req.body.password
        }).then((user) => {
          res.status(201).json(user);
        });
      }
    });

  }
  else {
    res.json({message: 'Fields cant be blank'})
  }
});

router.post('/session', function (req, res) {
  User.find({
    where: {
      phone: req.body.phone
    }

  }).then((user) => {
    if (user && user.password === req.body.password) {
      res.status(202).json(user);
    }
    else {
      res.status(401).json({message: 'Invalid email or password'});
    }
  })
});

router.delete('/session', function (req, res) {
  // TOKEN REGENERATION MUST BE HERE !!!
  res.status(202).json({message: 'Logout successful'});
});

module.exports = router;
