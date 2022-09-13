const express = require('express')
const router = express.Router()
const taskController = require('../controllers/tasks')
const { ensureAuth } = require('../middleware/auth')

router.get('/', taskController.getTasks)

module.exports = router