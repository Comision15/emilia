const express = require('express');
const router = express.Router();

const { music } = require('../controllers/productsController');

/* /products */

router
    .get('/music',music)


module.exports = router;