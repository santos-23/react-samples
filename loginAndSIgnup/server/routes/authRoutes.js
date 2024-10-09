const express = require('express');
const router = express.Router();
const cors = require('cors');
const { testHome,registerUser,loginUser } = require('../contollers/authController')

router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials : true
    })
)

router.get('/',testHome);
router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports = router;