const express = require('express')
const router = express.Router()
const settingsController = require('../controllers/settings')
const { ensureAuth } = require('../middleware/auth')

router.get('/', settingsController.getSettings)

module.exports = router