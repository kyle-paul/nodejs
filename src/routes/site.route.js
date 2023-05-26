// create pages for site route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.home);
module.exports = router;
