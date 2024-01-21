const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const VEHICLE_TRACKING = SCHEMA({
    vehicle_id: {type: MONGOOSE.Schema.ObjectId, required: true},
    driver_id: {type: MONGOOSE.Schema.ObjectId, required: true, unique: true},
    socket_id: {type: String, required: true},
    current_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    vehicle_category: {type: String, required: true},
    vehicle_sub_category: {type: String, required: true},
    operation_radius: {type: Number},
    driver_info: {
        driver_name: {type: String},
        driver_contact_number: {type: String},
    },
    vehicle_info: {
        vehicle_registration_no: {type: String},
        vehicle_licence_no: {type: String},
        vehicle_color: {type: String},
        vehicle_brand: {type: String},
    },
    current_status: {
        type: String,
        required: true,
        enum: ["ON-TRIP", "ARRIVED", "UPON-COMPLETION", "ON-LINE", "OFF-LINE", "BLOCKED", "GOING-TO-PICKUP", "DISCONNECT"]
    },
    distance_between: {type: Number},
    category_trip_count: {type: Number},
    bid_value: {type: Number},
    last_bid_updated_date: {type: Date},
    trip_count_for_bid: {type: Number},
    driver_pic: {type: String},
    sub_category_icon: {type: String},
    sub_category_icon_selected: {type: String},
    map_icon: {type: String},
    map_icon_offline: {type: String},
    map_icon_on_trip: {type: String},
    sub_category_icon_SVG: {type: String},
    sub_category_icon_selected_SVG: {type: String},
    map_icon_SVG: {type: String},
    map_icon_offline_SVG: {type: String},
    map_icon_on_trip_SVG: {type: String},
    totalWalletPoints: {type: Number}
});

module.exports = MONGOOSE.model("vehicle_trackings", VEHICLE_TRACKING);
