const express = require('express');
const {User,imageFile} = require('../model/userModel');
const router = express.Router();
const multer = require('multer')
const path = require('path');
const { userRegister,userLogin} = require('../controller/userControl')

router.post('/register',userRegister);
router.post('/login',userLogin)

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

router.post('/upload',upload.single('file'),(req,res)=>{
    console.log(req.file)
    imageFile.create({
        image: req.file.filename
    })
    .then((result)=> res.json(result))
    .catch((err)=>console.log(err))
})

router.get('/getImage',(req,res)=>{
    imageFile.find()
    .then((result)=>res.json(result))
    .catch((err)=>res.json(err))
})

module.exports = router;