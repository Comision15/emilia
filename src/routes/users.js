var express = require('express');
var router = express.Router();

const {contact} =require('../controllers/usersController');

/* /users */
router
  .get('/contact', contact )

module.exports = router;
