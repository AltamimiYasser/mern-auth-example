const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// register user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({ email, password: hashedPassword });

    // save user
    const savedUser = await newUser.save();

    // create token
    const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_SECRET);

    // return token in cookie
    res.cookie('token', token, { httpOnly: true }).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: [{ msg: 'Server error' }] });
  }
};

// sign user in
exports.singIn = async (req, res) => {
  try {
    // get user
    const user = await User.findOne({ email: req.body.email });

    // create token
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);

    // return it
    res.cookie('token', token, { httpOnly: true }).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: [{ msg: 'Server error' }] });
  }
};

// is loggedin return true if valid token and false other wise
exports.isLoggedIn = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    // this will throw an error that we catch in catch block and return false
    jwt.verify(token, process.env.TOKEN_SECRET);

    // passed all? return true
    res.json(true);
  } catch (err) {
    res.json(false);
  }
};
