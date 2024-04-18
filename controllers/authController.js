// Handles route logic
// controllers/authController.js
const { users } = require('../model/user');

exports.login = (req, res) => {
  res.json({ message: 'Login successful', user: req.user });
};

exports.adminContent = (req, res) => {
  res.json({ message: 'Admin access granted' });
};
