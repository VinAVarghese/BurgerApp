var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      "burger_name"
    ,
      req.body.burger_name
    , function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

module.exports = router;