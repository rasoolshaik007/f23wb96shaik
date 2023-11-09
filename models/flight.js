const mongoose = require("mongoose")
const flightSchema = mongoose.Schema({
    flight_type: String,
    size: String,
    cost: Number
})
module.exports = mongoose.model("flight", flightSchema)