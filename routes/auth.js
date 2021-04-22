const router = require('express').Router();
const { register, singIn, isLoggedIn } = require('../controllers/auth');
const { validateRegister, validateSignIn } = require('../utils/validation');

// PREFIX: /api/auth

// register user route
router.post('/register', validateRegister, register);

// user sign in route
router.post('/signin', validateSignIn, singIn);

// get user status isLoggedIn
router.get('/loggedin', isLoggedIn);

module.exports = router;
