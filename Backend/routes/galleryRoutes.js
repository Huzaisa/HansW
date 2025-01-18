const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { authenticate, guestOnly } = require('../middlewares/authMiddleware');
const galleryController = require('../controllers/galleryController');

const router = express.Router();

router.post(
    '/add',
    authenticate(['ADMIN', 'MANAGER']),
    upload.array('images', 5), // Maksimal 5 gambar per galeri
    galleryController.add
);
router.put(
    '/edit/:id',
    authenticate(['ADMIN', 'MANAGER']),
    upload.array('images', 5),
    galleryController.edit
);
router.delete('/delete/:id', authenticate(['ADMIN', 'MANAGER']), galleryController.delete);

router.get('/', guestOnly, galleryController.getAll)

module.exports = router;
