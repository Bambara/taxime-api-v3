const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const PASSENGER_PROFILE = SCHEMA({
    name: {type: String},
    email: {type: String},
    birthday: {type: String},
    nic: {type: String},
    gender: {type: String, default: "MALE"},
    contact_number: {type: String, required: true, unique: true, default: "NONE"},
    address: [
        {
            address: {type: String},
            zipcode: {type: String},
            city: {type: String},
            state: {type: String},
            country: {type: String},
        },
    ],
    favourite_locations: [
        {
            favour_name: {type: String, required: true},
            address: {type: String, required: true},
            latitude: {type: Number, required: true},
            longitude: {type: Number, required: true},
        },
    ],
    enable_user: {type: Boolean, default: true},
    social_login_id: {type: String},
    user_platform: {type: String, default: "STANDARD", enum: ["STANDARD", "FACEBOOK", "GOOGLE"]},
    user_profile_pic: {type: String, default: "NONE"},
    recorded_time: {type: Date, default: Date.now},
    is_enable: {type: Boolean, default: true},
    is_approved: {type: Boolean, default: false},
    is_dispatch_enable: {type: Boolean, default: false},
    otp_pin: {type: Number},
    otp_time: {type: Date},
    contact_no_confirm: {type: Boolean, default: false},
    bid_value: {type: Number},
    ratings: [
        {
            rate: {type: Number, required: true, default: 0},
            feedback: {type: String},
        },
    ],
    payment: {
        type: {type: String, required: true, default: "CASH", enum: ["CARD", "CASH"]},
        card_id: {type: String},
    },
    push_token: {type: String},
    passenger_code: {type: String},

});

module.exports = MONGOOSE.model("passenger_profiles", PASSENGER_PROFILE);
