const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password:{
        type: String,
        required: [true, "Please provide a password!"],
    }
})
const imageSchema = new mongoose.Schema({
    image:String
})

const User = mongoose.model('User',userSchema);
const imageFile = mongoose.model('imageFile',imageSchema)

module.exports = {imageFile,User};