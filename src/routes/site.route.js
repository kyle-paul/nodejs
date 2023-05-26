// create pages for books route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.home);
module.exports = router;