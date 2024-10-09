const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    image:String
})

const User = mongoose.model('User',userSchema);

const multiSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection:{
        type: Array
    }
})

const Multiple = mongoose.model('Multiple',multiSchema);


module.exports = User
module.exports = Multiple