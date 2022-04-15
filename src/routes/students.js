const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/images/students/' })

const controller = require('../controllers/students');

router.get('/', controller.get);
router.post('/', upload.single('avatar'), controller.post);
router.put('/:id', upload.single('avatar'), controller.put);
router.delete('/', controller.remove);

module.exports = router;