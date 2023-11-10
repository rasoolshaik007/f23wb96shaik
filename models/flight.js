const mongoose = require("mongoose")
const flightSchema = mongoose.Schema({
    flight_name: String,
    cost: Number,
    baggage: Number
    
})
module.exports = mongoose.model("flight", flightSchema)