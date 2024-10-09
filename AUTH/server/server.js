const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const imageFile = require('./model/userModel')
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/loginAuth")
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.log("Error while connecting to DB: ",error)
})

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use('/',require('./routes/userRoute'))



// // free endpoint
// app.get("/free-endpoint", (req, res) => {
//     res.json({ message: "You are free to access me anytime" });
// });

// // authentication endpoint
// app.get("/auth-endpoint",auth, (req, res) => {
//     res.json({ message: "You are authorized to access me" });
// });


app.listen(8080,()=>{
    console.log("server listen on port 8080")
})