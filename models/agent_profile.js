const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const AGENT_PROFILE = SCHEMA({
    company_code: {type: String, required: true, unique: true},
    company_name: {type: String, required: true},
    company_type: {type: String, required: true, enum: ["AGENT"], default: "AGENT"},
    agent_location: {
        address: {type: String, unique: false},
        latitude: {type: Number, unique: false},
        longitude: {type: Number, unique: false},
    },
    agent_contact_number: {type: String, required: true},
    agent_email: {type: String, required: true},
    owner_name: {type: String, required: true},
    nic: {type: String, required: true},
    password: {type: String, required: true},
    address: {
        address: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        zipcode: {type: String, unique: false},
        country: {type: String, unique: false},
    },
    status: {type: String, required: true, enum: ["ACTIVE", "INACTIVE"], default: "INACTIVE"},
    is_enable: {type: Boolean, required: true, default: true},
    is_verified: {type: Boolean, required: true, default: true},
    is_logged_in: {type: Boolean, unique: false},
    role: {type: String, required: true, enum: ["AGENT"]},
    last_login: {type: Date, required: true, default: Date.now},
    recorded_time: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("agent_profiles", AGENT_PROFILE);
