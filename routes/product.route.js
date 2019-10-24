const express = require('express');

const controller = require('../controllers/product.controller');

const router = express.Router();

router.get('/', controller.index);

router.get('/discover', controller.discoverPage);

module.exports = router;