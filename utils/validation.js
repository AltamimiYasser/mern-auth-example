const { check, validationResult } = require('express-validator');

exports.validateRegister = [
  check('email').isEmail().withMessage('Invalid Email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];
