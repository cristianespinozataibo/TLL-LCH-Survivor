var express = require('express');
var router = express.Router();

/* GET database. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.json('../services/db.json');
  //res.sendFile('/Users/Shared/Previously Relocated Items/Security/OneDrive/cet/Proyectos/HGSE TLL/LCH/survivor-express/services/db.json')
  const jsonFile = rootDir + "/services/db.json";
  res.sendFile(jsonFile);
});

module.exports = router;