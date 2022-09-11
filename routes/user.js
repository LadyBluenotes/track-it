const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, userController.getHome)