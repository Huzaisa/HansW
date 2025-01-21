const express = require('express');
const { authenticate, guestOnly } = require('../middlewares/authMiddleware');
const homePageItemController = require('../controllers/homePageItemController');

const router = express.Router();

router.get('/', guestOnly,homePageItemController.getAll);
router.post('/add', authenticate(['ADMIN', 'MANAGER']), homePageItemController.add);
router.put('/edit/:id', authenticate(['ADMIN', 'MANAGER']),  homePageItemController.edit);
router.delete('/delete/:id', authenticate(['ADMIN', 'MANAGER']), homePageItemController.delete);

module.exports = router;
