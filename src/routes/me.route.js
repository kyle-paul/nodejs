const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController');

router.get('/stored/my_contents', MeController.my_contents);
router.get('/:id/edit-contents', MeController.edit_contents);
router.put('/:id', MeController.update_contents);   
router.delete('/:id', MeController.delete_contents);   
module.exports = router;
