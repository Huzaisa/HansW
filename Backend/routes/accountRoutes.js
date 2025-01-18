const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { authenticate } = require('../middlewares/authMiddleware');
const accountController = require('../controllers/accountController');


const router = express.Router();

router.get('/', authenticate(['ADMIN']), accountController.getAll);
router.post('/add', authenticate(['ADMIN']), upload.single('photo'), accountController.add);
router.put('/edit/:id', authenticate(['ADMIN']), upload.single('photo'), accountController.edit);
router.delete('/delete/:id', authenticate(['ADMIN']), accountController.delete);
router.post('/login', accountController.login);


module.exports = router;
