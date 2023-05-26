// create pages for machine learning route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const MLController = require('../app/controllers/MLController');

router.get('/:slug', MLController.content);
module.exports = router;
