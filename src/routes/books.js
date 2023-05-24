const express = require('express');
const router = express.Router();
const bookController = require('../app/controllers/BookController');

router.use('/:certifications', bookController.show_details);
router.use('/', bookController.index);
module.exports = router;