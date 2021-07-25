const router = require('express').Router();
const authController = require('../../controller/AuthController');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;