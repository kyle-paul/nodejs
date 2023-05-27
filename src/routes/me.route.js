const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController');

router.get('/stored/my-contents', MeController.my_contents);
router.get('/stored/recycle-bin', MeController.recycle_bin);
router.get('/:id/edit-contents', MeController.edit_contents);

router.patch('/:id/restore', MeController.restore_contents);  
router.put('/:id', MeController.update_contents);   
router.delete('/:id', MeController.delete_contents);  
router.delete('/:id/force', MeController.force_delete_contents);  


module.exports = router;
