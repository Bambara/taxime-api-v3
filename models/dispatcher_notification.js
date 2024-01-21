const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const DISPATCHER_NOTIFICATION = SCHEMA({
    dispatcher_Id: {type: MONGOOSE.Schema.ObjectId, required: true}, //driver id
    dispatcher_Type: {type: String},
    notification_Type: {type: String},
    description: {type: String},
    notification: {type: Object},
    is_checked: {type: Boolean, default: false},
    recorded_time: {type: Date, default: Date.now},
});

module.exports = MONGOOSE.model("dispatcher_notifications", DISPATCHER_NOTIFICATION);
