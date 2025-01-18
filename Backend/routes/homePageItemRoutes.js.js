const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { authenticate, guestOnly } = require('../middlewares/authMiddleware');
const homePageItemController = require('../controllers/homePageItemController');

const router = express.Router();

router.get('/', guestOnly,homePageItemController.getAll);
router.post('/add', authenticate(['ADMIN', 'MANAGER']), upload.single('image'), homePageItemController.add);
router.put('/edit/:id', authenticate(['ADMIN', 'MANAGER']), upload.single('image'), homePageItemController.edit);
router.delete('/delete/:id', authenticate(['ADMIN', 'MANAGER']), homePageItemController.delete);

module.exports = router;
