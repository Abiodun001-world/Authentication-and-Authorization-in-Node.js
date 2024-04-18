// Manages endpoint
// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../Middleware/authenticationMiddleware');
const authorizationMiddleware = require('../Middleware/authorizationMiddleware');
const authController = require('../controllers/authController');

router.post('/login', authenticationMiddleware.authenticateUser, authController.login);

router.get('/admin', authorizationMiddleware.checkRole('admin'), authController.adminContent);

module.exports = router;

