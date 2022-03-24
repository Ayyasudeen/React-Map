const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
        min: 3
    },
    desc: {
        type: String,
        require: true,
        min: 3
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Number,
        require: true
    }, 
    long: {
        type: Number,
        require: true,
    }
  }, 
  { timestamps: true }  // to have automatic timestamps for the each fields
);

module.exports = mongoose.model("Pin", PinSchema);