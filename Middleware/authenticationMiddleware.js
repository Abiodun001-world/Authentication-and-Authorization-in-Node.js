// middleware/authenticationMiddleware.js
const users = require('../model/user').users;

exports.authenticateUser = (req, res, next) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

