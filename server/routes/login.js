const express = require('express')
const router = express.Router()
const ControllerLogin = require('../controllers/login')

router.post('/', ControllerLogin.registerFb)

module.exports = router