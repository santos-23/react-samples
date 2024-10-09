const express = require('express');
const Multiple = require('./model')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/multerReact")
    .then(()=>{
        console.log("DB is connected")
    })
    .catch((error)=>{
        console.log("Error while connecting to DB: ",error)
    })

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.static('public'))

app.use('/',require('./multipleRoutes'))


app.listen(5000,()=>{
    console.log("server listen on port 5000")
})