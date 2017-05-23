const express = require('express');
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

// GET route for getting all of the foods
router.get("/", function (req, res) {
  db.Food.findAll({})
    .then(function (results) {
      res.render('index', {foods:results})
    })
});

// POST route for saving a new food. We can create a food using the data on req.body
router.post("/", function (req, res) {
  var food = req.body;
  var foodName = food.foodName
  console.log(food);
  db.Food.create({
    food_name: foodName,
    devoured: food.devoured
  }).then((food) => res.redirect("/"));
});

router.put("/:id", function(req, res) {
  var food = req.body;
  var devoured = food.devoured;
  var id = req.params.id;
  console.log(food);
  db.Food.update({
    devoured: devoured,
  }, {
    where: {
      id: id
    }
  }).then((food) => res.redirect("/"));
});

module.exports = router;