var express = require('express');
var router = express.Router();

const {home,about} = require('../controllers/indexController')

/* / */
router
  .get('/', home)
  .get('/about',about)

module.exports = router;
