const express = require('express');
const router = express.Router();
const { loginCtrl, registerCtrl } = require('../controllers/UserController')
const checkAuth = require('../Middleware/auth')
const checkRoleAuth = require('../Middleware/checkRole')

router.post('/register', registerCtrl);

router.post('/login', loginCtrl)

router.get('/login');

router.get('/register');

module.exports = router;
