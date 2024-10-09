const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.log("Error while connecting to DB: ",error)
})

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
