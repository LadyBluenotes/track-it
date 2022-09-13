const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const { ensureAuth } = require('../middleware/auth')

router.get('/', profileController.getProfile)

module.exports = router