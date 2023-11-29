const mongoose = require("mongoose")
const flightSchema = mongoose.Schema({
    flight_name: String,
    cost: {
        type: Number,
        min: 0,   // Set your minimum value
        max: 10000 // Set your maximum value
    },
    baggage: {
        type: Number,
        min: 0,   // Set your minimum value
        max: 100  // Set your maximum value
    }
});
module.exports = mongoose.model("flight", flightSchema)