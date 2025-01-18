const express = require('express');
const { authenticate, guestOnly } = require('../middlewares/authMiddleware');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

// Admin/Manager only routes (requires token)
router.post('/add', authenticate(['ADMIN']), aboutController.add);
router.put('/edit/:id', authenticate(['ADMIN']), aboutController.edit);
router.delete('/delete/:id', authenticate(['ADMIN']), aboutController.delete);

// User page routes (no token required for GET)
router.get('/', guestOnly, aboutController.getAll);

module.exports = router;
