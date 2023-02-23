var express = require('express');
var router = express.Router();

//const jsondb =(...args) => import('../services/jsondb.mjs').then(({default: jsondb}) => fetch(...args));

//const jsondb="";

//(async () => {
//    jsondb = await import('../services/jsondb.mjs').default
//});

/* POST survivor rankings. */
router.post('/', function(req, res, next) {
  console.log("DATOS: " + req.body.params);
  writeScore.default(req.body.params);
  res.send("success");
});

module.exports = router;
