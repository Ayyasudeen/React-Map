const router = require("express").Router();
const Pin = require("../models/Pin");

//Create a Pin

router.post("/", async (req, res) => {
    const newPin = new Pin(req.body); // takes the info as body 
    try {
        const savedPin = await newPin.save(); // to save the new pin 
        res.status(200).json(savedPin); // send the saved pin as the json 
    } catch (err) {
        res.status(500).json(err) 
    }
});

//Get All Pins 


module.exports = router;

