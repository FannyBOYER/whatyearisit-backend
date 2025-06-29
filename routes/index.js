var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res, next) => {
  const date = new Date();
  res.json({year : date.getFullYear().toString()})
});

module.exports = router;
