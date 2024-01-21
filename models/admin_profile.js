const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;
const validator = require("validator");

require("dotenv").config();

const ADMIN_PROFILE = SCHEMA({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {
        type: String, required: true, unique: true, validate: {
            validator: validator.default.isEmail,
            message: "{VALUE} is not a valid email",
            isAsync: false,
        },
    },
    nic: {type: String, required: true, unique: true},
    dob: {type: String, required: true,},
    password: {type: String, required: true, unique: true},
    mobile: {
        type: String, required: true, unique: true, validate: {
            validator: validator.default.isMobilePhone,
            message: "{VALUE} is not a valid mobile number",
            isAsync: false,
        },
    },
    gender: {type: String, required: true},
    address: {
        line_01: {type: String},
        line_02: {type: String},
        city: {type: String},
        zip_code: {type: String},
        country: {type: String},
    },
    role: {type: String, required: true, enum: ["SUPER", "OPERATION", "FINANCE", "DISPATCH", "GENERIC", "AGENT"]},
    company_code: {type: String, required: true, default: process.env.MASTER_COMPANY},
    company_name: {type: String, required: true, default: process.env.MASTER_COMPANY},
    company_type: {type: String, required: true, enum: ["MASTER", "AGENT"], default: "AGENT"},
    is_enable: {type: Boolean, required: true},
    is_verified: {type: Boolean, required: true},
    is_logged_in: {type: Boolean},
    last_login: {type: Date, required: true, default: Date.now},
    recorded_time: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("admin_profiles", ADMIN_PROFILE);
