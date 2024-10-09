const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
// const { comparePassword, hashedPassword } = require('../authentication/validate')

const testHome = (req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    res.json('server is working')
}

const registerUser = async(req,res) =>{
    try{
        res.setHeader('Content-Type', 'application/json');
        const {name,email,password} = req.body;
        if(!name){
            res.json({
                error: "name is required"
            })
        }
        if(!password || password.length < 6){
            res.json({
                error: "Password is required and must have atleast 6 characters "
            })
        }
        const exist = await User.findOne({email})
        if(exist){
            res.json({
                error: "email is allready taken...kindly login or register with other email_ID"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.json(user);
    }catch(error){
        console.log(error)
    }
}

const loginUser = async(req,res)=>{
    try {
        const { email,password } = req.body;
        if (!password || !email) {
            res.json({
                error: "All fields are mandatory"
            });
            // throw new Error("All fields are mandatory!");
        }
        const user = await User.findOne({email})
        if(!user){
            res.json({
                error: "No user found"
            })
        }
        const match = await comparePassword(password,user.password);
        if(match){
            jwt.sign({email:user.email,id:user,_id,name:user.name},process.env.SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie("token",token).json(user);
            })
        }
        if(!match){
            return res.status(401).json({error:"Invalid credentials"})
        }
        // const token = jwt.sign({userId:user._id},process.env.SECRET,{expiresIn: '1h'});
        // res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = {
    testHome,
    registerUser,
    loginUser
}