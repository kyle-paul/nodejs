// create pages for books route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const bookController = require('../app/controllers/BookController');

router.use('/certifications', bookController.certifications);
router.use('/', bookController.main_page);
module.exports = router;