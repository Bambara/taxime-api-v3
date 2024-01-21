const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const VEHICLE_TRACK = SCHEMA({
    vehicle_id: {type: MONGOOSE.Schema.ObjectId, required: true},
    driver_id: {type: MONGOOSE.Schema.ObjectId, required: true},
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
    },
    current_status: {
        type: String,
        required: true,
        enum: ["ON-TRIP", "UPON-COMPLETION", "ONLINE", "OFFLINE", "BLOCKED", "GOING-TO-TRIP", "DISCONNECTED"]
    },
    distance_between: {type: Number, default: null},
    bid_value: {type: Number},
    last_bid_updated_date: {type: Date},
    trip_count_or_bid: {type: Number},
});

const Dispatch = SCHEMA({
    dispatcher_id: {type: MONGOOSE.Schema.ObjectId},
    customer_name: {type: String},
    customer_telephone_no: {type: String},
    assigned_driver_id: {type: MONGOOSE.Schema.ObjectId, default: null},
    assigned_vehicle_id: {type: MONGOOSE.Schema.ObjectId, default: null},
    no_of_passengers: {type: Number},
    pickup_date_time: {type: Date, default: Date.now},
    drop_date_time: {type: Date},
    trip_time: {type: Number},
    pickup_location: {
        address: {type: String, required: true},
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true},
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
    vehicle_category: {type: String},
    vehicle_sub_category: {type: String},
    hire_cost: {type: Number},
    total_price: {type: Number, default: 0},
    waiting_cost: {type: Number, default: 0},
    discount: {type: Number, default: 0},
    wait_time: {type: Number, default: 0},
    notes: {type: String},
    type: {type: String, required: true, enum: ["DRIVER-Dispatch", "USER-Dispatch", "ADMIN-Dispatch"],},
    cancel_count: {type: Number},
    cancel_details: [
        {
            cancel_reason: {type: String},
            canceled_driver_id: {type: MONGOOSE.Schema.ObjectId},
        },
    ],
    trip_type: {type: String, enum: ["CURRENT", "PRE-BOOKING", "LONG-TRIP"]},
    notified_drivers: [{type: VEHICLE_TRACK}],
    status: {
        type: String,
        required: false,
        unique: false,
        enum: ["DEFAULT", "ACCEPTED", "ARRIVED", "ON-TRIP", "CANCELED", "DONE"]
    },
    valid_time: {type: Number, default: 45},
    recorded_time: {type: Date, default: Date.now},
});

module.exports = MONGOOSE.model("dispatchs", Dispatch);
