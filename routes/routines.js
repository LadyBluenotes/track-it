const express = require('express')
const router = express.Router()
const routineController = require('../controllers/routines')
const { ensureAuth } = require('../middleware/auth')

router.get('/', routineController.getRoutines)

module.exports = router