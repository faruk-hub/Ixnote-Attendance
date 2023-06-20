
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./models/db');
//Routes
const userRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
// const atdRoutes = require('./routes/attendanceRoutes');
// const session = require('express-session');
// const passport = require('passport');
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// require('dotenv').config()
const app = express();

// dotEnv.config()

// connectDB()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/' , userRoutes)
app.use('/' , adminRoutes)
// app.use('/api/orders' , orderRoutes)
//middleware
// app.use( notFound, errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Eshop running in ${process.env.NODE_ENV} environment on port ${PORT}`)
})