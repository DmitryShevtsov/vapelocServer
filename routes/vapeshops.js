var express = require('express');
var router = express.Router();
var models = require('../models');
var Vapeshops = models.VapeShop;

router.get('/vapeshops', function (req, res) {
  Vapeshops.findAll().then((vapeshops) => {
    res.json(vapeshops);
  })
});

router.get('/vapeshops/:id', function (req, res) {
  Vapeshops.findById(req.params.id).then((vapeshop) => {
    res.json(vapeshop);
  });
});

router.put('/vapeshops/:id', function (req, res) {
  Vapeshops.findById(req.params.id).then((vapeshop) => {
    vapeshop.updateAttributes({name: req.body.name, description: req.body.description, lat: req.body.lat, lng: req.body.lng,
    avatar: req.body.avatar, background: req.body.background});
    res.status(202);
  })
});

router.delete('/vapeshops/:id', function (req, res) {
  Vapeshops.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(202);
});

router.post('/vapeshops', function (req, res) {
  Vapeshops.create({
    name: req.body.name,
    description: req.body.description,
    lat: req.body.lat,
    lng: req.body.lng,
    background: req.body.background,
    avatar: req.body.avatar
  });
  res.status(201);
});

module.exports = router;
