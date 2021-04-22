const { check, validationResult } = require('express-validator');

const User = require('../models/User');

exports.validateRegister = [
  check('email', 'Invalid Email')
    .isEmail()

    // custom to check if email exists in database
    .custom(async (value) => {
      const existingEmail = await User.findOne({ email: value });
      if (existingEmail) return Promise.reject('Email already exists');
    }),
  check('password', 'password must be at least 6 characters long').isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body.email);
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
