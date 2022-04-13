const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');

router.get('/', controller.get);

module.exports = router;
