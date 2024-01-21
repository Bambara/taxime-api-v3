const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const DRIVER_PROFILES = SCHEMA({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    nic: {type: String, required: true},
    birthday: {type: Date, required: true},
    otp_pin: {type: Number, default: 0},
    otp_time: {type: Date, default: Date.now},
    mobile: {type: String, required: true},
    gender: {type: String, required: true},
    address: {
        address: {type: String},
        street: {type: String},
        zipcode: {type: String},
        country: {type: String},
        province: {type: String},
        district: {type: String},
        city: {type: String},
    },
    driver_pic: {type: String},
    nic_front_pic: {type: String},
    nic_back_pic: {type: String},
    driving_licence_front_pic: {type: String},
    driving_licence_back_pic: {type: String},
    is_enable: {type: Boolean, default: true},
    email_confirm: {type: Boolean},
    contact_no_confirm: {type: Boolean},
    is_approved: {type: Boolean},
    life_insurance_no: {type: String},
    life_insurance_expiry_date: {type: Date},
    life_insurance_amount: {type: Number},
    package_type: {type: String, default: "COMMISSION", enum: ["COMMISSION", "SUBSCRIPTION"]},
    is_dispatch_enable: {type: Boolean},
    company: {type: String, default: "TAXIME"},
    salt_secret: {type: String},
    max_bid_changing_count: {type: Number, default: 0},
    bid_value: {type: Number},
    last_bid_updated_date: {type: Date},
    trip_count_for_bid: {type: Number},
    driver_code: {type: String},
    company_code: {type: String, default: "TAXIME"},
    recorded_time: {type: Date, default: Date.now},
    ratings: [
        {rate: {type: Number}, feedback: {type: String}},
    ],
    push_token: {type: String},
    acc_number: {type: String, required: true},
});

module.exports = MONGOOSE.model("driver_profiles", DRIVER_PROFILES);