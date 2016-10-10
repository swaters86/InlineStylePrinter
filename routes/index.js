var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  {title:'Inline Style Printer'});
});

module.exports = router;
