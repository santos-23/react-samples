const bcrypt = require('bcrypt');
const {User,imageFile} = require('../model/userModel');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');

const userRegister = async(req,res) => {
    res.setHeader('Content-Type', 'application/json');
    const { name, email, password } = req.body;
    if (!name || !password|| !email) {
        return res.status(400).send({message:"All fields are mandatory"})
        // throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        return res.status(400).send({message:"User already registered"})
        // throw new Error("User already registered!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        name,
        email,
        password:hashedPassword,
    });
    console.log(`User created ${user}`);
    if (user) {
        return res.status(201).json({ _id: user.id,name:user.name, email: user.email ,message: "registed"});
    } else {
        return res.status(400).send({message:"user data is not valid"})
        // throw new Error("User data is not valid");
    }
    
};

const userLogin = async(req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    const { email,password } = req.body;
    if(!email || !password){
        return res.status(400).send({message:"All fields are mandatory!"});
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).send("user not found")
    }
    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return res.status(400).send({meassage:"password is not match"})
    }
    const token = jwt.sign(
        {
            userId: user._id,
            userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
    );
    return res.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
    });
}

// const storage = multer.diskStorage({
//     destination:(req,res,cb)=>{
//         cb(null,'public/upload')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage
// }).single('file')

// const uploadFile = (req,res) =>{
//     // console.log(req.file)
//     Image.create({
//         image: req.file.filename
//     })
//     .then((result)=> res.json(result))
//     .catch((err)=>console.log(err))
// }

module.exports = { userRegister,userLogin }