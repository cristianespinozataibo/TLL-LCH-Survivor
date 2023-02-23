var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  el_path=path.resolve('views/index.html');
  res.sendFile(el_path);
});

module.exports = router;
