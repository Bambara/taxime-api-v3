const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const PASSENGER_TRACKING = SCHEMA({
    passenger_id: {type: MONGOOSE.Schema.ObjectId, required: true, unique: true},
    socket_id: {type: String, required: true},
    current_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    selected_vehicle_category: {type: String},
    selected_vehicle_sub_category: {type: String},
    current_status: {
        type: String,
        required: true,
        enum: ['ON-TRIP', "UPON-COMPLETION", "DEFAULT", "BLOCKED", "DISCONNECT"]
    },
    bid_value: {type: Number},
});

module.exports = MONGOOSE.model("passenger_trackings", PASSENGER_TRACKING);
