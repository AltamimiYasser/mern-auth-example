const router = require('express').Router();
const { register, singIn, logout, isLoggedIn } = require('../controllers/auth');
const { validateRegister, validateSignIn } = require('../utils/authValidation');

// PREFIX: /api/auth

// register user route
router.post('/register', validateRegister, register);

// user sign in route
router.post('/signin', validateSignIn, singIn);

// user logout route
router.get('/logout', logout);

// get user status isLoggedIn
router.get('/loggedin', isLoggedIn);

module.exports = router;
