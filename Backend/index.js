const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const connectDB = require('./models/db');

//Routes
const userRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const atdRoutes = require('./routes/atdRoutes');


// require('dotenv').config()
const app = express();



app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
//routes
app.use('/' , userRoutes)
app.use('/std' , atdRoutes)
app.use('/admin' , adminRoutes)


//middleware
// app.use( notFound, errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Attendance app running in ${process.env.NODE_ENV} environment on port ${PORT}`)
})