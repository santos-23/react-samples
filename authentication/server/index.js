    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const cors = require('cors');

    const app = express();
    const port = 3001;

    app.use(bodyParser.json());
    app.use(cors());

    mongoose.connect("mongodb://localhost:27017/authentication")
    .then(()=>{
        console.log("DB is connected")
    })
    .catch((error)=>{
        console.log("Error while connecting to DB: ",error)
    })

    const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    });

    app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    try {
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ message: 'Registration successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
    });

    app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
    });

    app.get('/api/protected', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
        if (err) {
        return res.status(401).json({ error: 'Authentication failed' });
        }

        // Token is valid, proceed with authenticated actions
        res.json({ message: 'Access granted to protected route' });
    });
    });

    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
