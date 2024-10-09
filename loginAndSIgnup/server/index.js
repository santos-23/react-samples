const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const cookieparser = require('cookie-parser')

const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.log("Error while connecting to DB: ",error)
})

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}))

app.use('/',require('./routes/authRoutes'))

const port = 8000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})