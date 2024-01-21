const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const CORPORATE_USER = SCHEMA({
    company_name: {type: String, required: true},
    first_name: {type: String},
    last_name: {type: String},
    contact_number: {type: String, required: true},
    company_email: {type: String, required: true, unique: true},
    address: {
        address: {type: String},
        zipcode: {type: String},
        city: {type: String},
        state: {type: String},
        country: {type: String},
    },
    employee_strength: {type: String},
    password: {type: String, required: true},
    company_pic: {type: String, default: "NONE"},
    recorded_time: {type: Date, default: Date.now},
    is_enable: {type: Boolean, default: true},
    is_approved: {type: Boolean, default: false},
    salt_secret: {type: String},
});

module.exports = MONGOOSE.model("corporate_users", CORPORATE_USER);
