const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const MANUAL_CUSTOMER = SCHEMA({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    mobile: {type: String},
    recorded_time: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("manual_customers", MANUAL_CUSTOMER);
