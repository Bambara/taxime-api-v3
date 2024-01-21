const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const DRIVER_NOTIFICATION = SCHEMA({
    driver_id: {type: MONGOOSE.Schema.ObjectId, required: true},
    notifications: [
        {
            description: {type: String},
            notification: {type: Object},
            is_checked: {type: Boolean},
            recorded_time: {type: Date, default: Date.now},
        },
    ],
});

module.exports = MONGOOSE.model("driver_notifications", DRIVER_NOTIFICATION);

