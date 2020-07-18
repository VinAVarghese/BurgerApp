var express = require ("express");
var router = express.Router();
var burger = require ("../models/burger");

router.get("/", (req,res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;