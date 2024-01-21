const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.SCHEMA;


const ROAD_PICKUP_TRIP = SCHEMA({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    mobile: {type: String},
    pickup_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    drop_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    pickup_date_time: {type: Date, default: Date.now},
    drop_date_time: {type: Date},
    trip_time: {type: Number},
    driver_id: {type: SCHEMA.ObjectId},
    vehicle_id: {type: SCHEMA.ObjectId},
    distance: {type: Number},
    total_cost: {type: Number},
    waiting_cost: {type: Number},
    wait_time: {type: Number},
    vehicle_category: {type: String},
    vehicle_sub_category: {type: String},
    status: {type: String, enum: ["DEFAULT", "ACCEPTED", "CANCELED", "DONE", "ONGOING"]},
    recorded_time: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("road_pickup_trips", ROAD_PICKUP_TRIP);
