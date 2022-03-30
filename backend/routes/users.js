const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// Register 

router.get("/register", async (req, res) => {
    try {
        // Generate New Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create New User
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //Save User and Send Response 
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        res.status(500).json(err)
    }
});


// Login


module.exports = router;