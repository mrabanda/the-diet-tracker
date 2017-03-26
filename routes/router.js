const express = require('express');
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

// GET route for getting all of the burgers
router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(function (results) {
      res.render('index', {burgers:results})
    })
});

// POST route for saving a new burger. We can create a burger using the data on req.body
router.post("/", function (req, res) {
  var burger = req.body;
  var burgerName = burger.burgerName
  console.log(burger);
  db.Burger.create({
    burger_name: burgerName,
    devoured: burger.devoured
  }).then((burger) => res.redirect("/"));
});

router.put("/:id", function(req, res) {
  var burger = req.body;
  var devoured = burger.devoured;
  var id = req.params.id;
  console.log(burger);
  db.Burger.update({
    devoured: devoured,
  }, {
    where: {
      id: id
    }
  }).then((burger) => res.redirect("/"));
});

module.exports = router;