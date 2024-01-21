const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.SCHEMA;

const VEHICLE_TRACK = SCHEMA({
    vehicle_id: {type: SCHEMA.ObjectId, required: true},
    driver_id: {type: SCHEMA.ObjectId, required: true},
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
        driver_pic: {type: String},
    },
    vehicle_info: {
        vehicle_registration_no: {type: String},
        vehicle_licence_no: {type: String},
        vehicle_brand: {type: String},
        vehicle_model: {type: String},
        vehicle_color: {type: String},
    },
    current_status: {
        type: String,
        required: true,
        enum: [
            "ON-Trip",
            "UPON-COMPLETION",
            "ONLINE",
            "OFFLINE",
            "BLOCKED",
            "GOING-TO-PICKUP",
            "DISCONNECT",
        ],
    },
    distance_between: {type: Number, default: null},
    bid_value: {type: Number},
    last_bid_updated_date: {type: Date},
    trip_count_for_bid: {type: Number},
});

const Trip = SCHEMA({
    passenger_details: {
        id: {type: SCHEMA.ObjectId},
        name: {type: String},
        email: {type: String},
        birthday: {type: String},
        gender: {type: String},
        contact_number: {type: String},
        user_profile_pic: {type: String},
    },
    assigned_driver_id: {type: SCHEMA.ObjectId, default: null},
    assigned_vehicle_id: {type: SCHEMA.ObjectId, default: null},
    no_of_passengers: {type: Number},
    pickup_date_time: {type: Date, default: Date.now},
    drop_date_time: {type: Date},
    trip_time: {type: Number},
    pickup_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    real_drop_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    real_pickup_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    drop_locations: [
        {
            address: {type: String},
            latitude: {type: Number},
            longitude: {type: Number},
        },
    ],
    distance: {type: Number},
    bid_value: {type: Number},
    vehicle_category: {type: String, required: true},
    vehicle_sub_category: {type: String, required: true},
    hire_cost: {type: Number},
    total_price: {type: Number, default: 0},
    discount: {type: Number, default: 0},
    waiting_cost: {type: Number, default: 0},
    wait_time: {type: Number, default: 0},
    type: {
        type: String,
        required: true,
        enum: ["PASSENGER-Trip"],
    },
    cancel_count: {type: Number},
    cancel_details: [
        {
            cancel_reason: {type: String},
            canceled_driver_id: {type: SCHEMA.ObjectId},
            canceled_passenger_id: {type: SCHEMA.ObjectId},
        },
    ],
    trip_type: {type: String, enum: ["CURRENT", "PRE-BOOKING", "LONG-Trip"]},
    pay_method: {type: String, enum: ["CASH", "CARD"], default: "CASH"},
    notified_drivers: [VEHICLE_TRACK],
    status: {type: String, enum: ["DEFAULT", "ACCEPTED", "ARRIVED", "ON-Trip", "CANCELED", "DONE"]},
    valid_time: {type: Number, default: 45},
    recorded_time: {type: Date, default: Date.now},
});

module.exports = {
    VTrack: MONGOOSE.model("vehicle_trackings", VEHICLE_TRACK),
    Trip: MONGOOSE.model("trips", Trip),
};
