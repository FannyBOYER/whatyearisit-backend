var express = require('express');
var router = express.Router();

/* GET years listing. */
router.get('/', function(req, res, next) {
  res.send({ year : Date});
});

module.exports = router;


