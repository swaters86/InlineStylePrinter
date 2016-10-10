var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = req.params.name;
  res.render('views/' + name);
});


module.exports = router;
