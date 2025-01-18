const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { authenticate, guestOnly } = require('../middlewares/authMiddleware');
const menuController = require('../controllers/menuController');

const router = express.Router();

router.get('/', guestOnly, menuController.getAll);
router.post('/add', authenticate(['ADMIN', 'MANAGER']), upload.single('image'), menuController.add);
router.put('/edit/:id', authenticate(['ADMIN', 'MANAGER']), upload.single('image'), menuController.edit);
router.delete('/delete/:id', authenticate(['ADMIN', 'MANAGER']), menuController.delete);

module.exports = router;
