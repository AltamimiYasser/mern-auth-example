const { check, validationResult } = require('express-validator');

exports.validateNewCustomer = [
  check('name', 'name is required').not().isEmpty(),
  check('phoneNumber', 'phoneNumber is required')
    .not()
    .isEmpty()
    .isMobilePhone(['ar-SA']),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];
