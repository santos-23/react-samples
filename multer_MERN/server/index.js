const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const multer = require('multer')
const cors = require('cors')
const User = require('./model');
const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/multerReact")
    .then(()=>{
        console.log("DB is connected")
    })
    .catch((error)=>{
        console.log("Error while connecting to DB: ",error)
    })

app.use(express.json());
app.use(cors())
app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'public/upload')
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload',upload.single('file'),(req,res)=>{
    // console.log(req.file)
    User.create({
        image: req.file.filename
    })
    .then((result)=> res.json(result))
    .catch((err)=>console.log(err))
})


app.get('/getImage',(req,res)=>{
    User.find()
    .then((result)=>res.json(result))
    .catch((err)=>res.json(err))
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})
