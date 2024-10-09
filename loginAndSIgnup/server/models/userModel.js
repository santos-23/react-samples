const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
// });

// module.exports = mongoose.model('User', userSchema);



const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type: String,
        required : true
    },
    password: String
})

const User = mongoose.model('User',userSchema);

module.exports = User;