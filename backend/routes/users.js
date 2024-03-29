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

router.post("/login", async (req, res) => {
    try {
        // Find the user
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong Username or Password")

        //validate password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Wrong Username or Password");

        //send response
        res.status(200).json({ _id: user._id, username: user.username });

    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;