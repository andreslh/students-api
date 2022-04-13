const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.remove);

module.exports = router;
