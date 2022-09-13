const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')

const calendarRoutes = require('./routes/calendar')
const dashboardRoutes = require('./routes/dashboard')
const journalRoutes = require('./routes/journal')
const mainRoutes = require('./routes/main')
const profileRoutes = require('./routes/profile')
const routineRoutes = require('./routes/routines')
const settingRoutes = require('./routes/settings')
const tasksRoutes = require('./routes/tasks')




require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/calendar', calendarRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/journal', journalRoutes)
app.use('/profile', profileRoutes)
app.use('/routines', routineRoutes)
app.use('/settings', settingRoutes)
app.use('/tasks', tasksRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running`)
})    