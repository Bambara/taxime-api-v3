const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const VEHICLES = SCHEMA({
    vehicle_category: {type: String},
    vehicle_sub_category: {type: String},
    owner_info: {
        owner_contact_name: {type: String},
        owner_contact_number: {type: String},
        owner_contact_email: {type: String},
        address: {
            address: {type: String},
            street: {type: String},
            zipcode: {type: Number},

            country: {type: String},
            province: {type: String},
            district: {type: String},
            city: {type: String},
        },
        is_verify: {type: Boolean, default: false},
    },
    is_enable: {type: Boolean, required: true, default: true},
    is_package_delivery_enable: {type: Boolean, required: true, default: false},
    is_package_delivery_blocked: {type: Boolean, required: true, default: true},
    driver_info: [
        {
            _id: false,
            driver_id: {type: MONGOOSE.Schema.ObjectId, required: true,},
            is_enable_driver: {type: Boolean, required: true, default: false},
        },
    ],
    vehicle_book_pic: {type: String},
    vehicle_insurance_pic: {type: String},
    vehicle_front_pic: {type: String},
    vehicle_side_view_pic: {type: String},
    vehicle_revenue_pic: {type: String},
    vehicle_revenue_no: {type: String},
    vehicle_revenue_expiry_date: {type: Date},
    vehicle_licence_no: {type: String},
    vehicle_registration_no: {type: String, required: true, unique: true},
    vehicle_color: {type: String},
    manufacture_year: {type: String},
    vehicle_brand_name: {type: String, required: true},
    vehicle_model: {type: String},
    weight_limit: {type: String},
    passenger_capacity: {type: Number},
    vehicle_no: {type: Number, default: 0},
    is_approved: {type: Boolean, required: true},
    recordedTime: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("vehicles", VEHICLES);
