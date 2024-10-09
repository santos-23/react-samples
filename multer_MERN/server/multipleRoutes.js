const express = require('express');
const multer = require('multer');
const Multiple = require('./model')
const path = require('path');
const uuid = require('uuid')
const mongoose = require('mongoose');
const router = express.Router();

const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'public/multiple')
    },
    filename:(req,file,cb)=>{
        const fileName = file.originalname.toLowerCase().split(" ").join('-');
        cb(null,uuid()+'-'+fileName)
    }
})

const upload = multer({
    storage: storage,
    fileFilter:(req,file,cb)=>{
        console.log(file.mimetype);
        let filetypes = /jpeg|jpg|png/;
        let mimetype = filetypes.test(file.mimetype);
        let extname = filetypes.test(path.extname(file.originalname));

        if(mimetype && extname){
            return cb(null,true)
        }
        cb("Error:File upload only supports the following filetypes: "+filetypes);
    }
})

router.post('/uploadMultiple',upload.array('files',5),(req,res,next)=>{
    const reqFiles = [];
    const url = req.protocol +'://'+req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/multiple/' + req.files[i].filename)
    }
    const user = new Multiple({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: reqFiles
    });
    user.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            userCreated: {
                _id: result._id,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    Multiple.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;