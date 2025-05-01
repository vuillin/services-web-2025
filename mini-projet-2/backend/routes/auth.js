const router = require('express').Router();
const authCtrl = require('../controllers/authController');
const authMw = require('../middleware/authMiddleware');

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.get('/profile', authMw, authCtrl.getProfile);

module.exports = router;
