// create pages for machine learning route
const express = require('express');
const router = express.Router();
// import the function handler defined in Controller
const MLController = require('../app/controllers/MLController');

router.get('/create_content', MLController.create_content);
router.post('/store_content', MLController.store_content);
router.get('/:slug', MLController.content);
module.exports = router;
