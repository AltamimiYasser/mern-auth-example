const router = require('express').Router();
const { register, singIn } = require('../controllers/auth');
const { validateRegister, validateSignIn } = require('../utils/validation');

// PREFIX: /api/auth

// register user route
router.post('/register', validateRegister, register);

// user sign in route
router.post('/signin', validateSignIn, singIn);

// get user status isLoggedIn

module.exports = router;
