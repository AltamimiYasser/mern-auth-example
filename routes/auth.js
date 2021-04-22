const router = require('express').Router();
const { register } = require('../controllers/auth');
const { validateRegister } = require('../utils/validation');

// register user route
// api/auth/register
router.post('/register', validateRegister, register);

// user sign in route

// get user status isLoggedIn

module.exports = router;
