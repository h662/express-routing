var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", (req, res) => {
  res.send("id");
  console.log(req.params, req.query);
});

module.exports = router;
