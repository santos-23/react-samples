const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const testHome = (req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    res.json('server is working')
}

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;
    if (!name || !password|| !email ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
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
        res.status(201).json({ _id: user.id,username:user.username, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // if (!email || !password) {
    //     res.status(400);
    //     throw new Error("All fields are mandatory!");
    // }
    const user = await User.findOne({ email });
    if (user && ( bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                email: user.email,
                password: user.password
            },
            process.env.SECRET,
            { expiresIn: "60m" }
        );
        res.status(200).json({ accessToken });
        res.json("success")
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});


module.exports = { testHome,registerUser,loginUser};