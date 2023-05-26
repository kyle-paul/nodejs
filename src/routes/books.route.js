// create pages for books route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const bookController = require('../app/controllers/BookController');

router.get('/certifications', bookController.certifications);
router.get('/', bookController.main_page);
module.exports = router;
