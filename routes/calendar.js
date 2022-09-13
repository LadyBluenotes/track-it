const express = require('express')
const router = express.Router()
const calendarController = require('../controllers/calendar')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, calendarController.getCalendar)

module.exports = router