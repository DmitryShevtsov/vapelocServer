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
  }).then((vapeshop) => {
    res.json(vapeshop);
  });
});

router.delete('/vapeshops/:id', function (req, res) {
  Vapeshops.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json("Vapeshop deleted");
  });
});

router.post('/vapeshops', function (req, res) {
  if (req.body.name && req.body.description) /* ADD LAT LNG CHECKER*/
  {
    if (req.body.lat&&req.body.lng&&req.body.lat&&req.body.lng)
    Vapeshops.create({
    name: req.body.name,
    description: req.body.description,
    lat: req.body.lat,
    lng: req.body.lng,
    background: req.body.background,
    avatar: req.body.avatar,
    user_id: req.body.user_id
  }).then((vapeshop) => {
    res.status(201).json(vapeshop);
  });}
  else {
    res.json({message: 'fields cant be empty'});
  }

});

module.exports = router;
