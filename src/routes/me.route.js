const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController');

router.get('/stored/my_contents', MeController.my_contents);
module.exports = router;
