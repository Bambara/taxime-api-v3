const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const Dispatcher = SCHEMA({
    type: {type: String, required: true, enum: ["DRIVER", "USER"]},
    dispatcher_id: {type: MONGOOSE.Schema.ObjectId, required: true, refPath: "TYPE", unique: true},
    dispatch_package_type: {
        type: String,
        required: false,
        unique: false,
        default: "COMMISSION",
        enum: ["COMMISSION", "SUBSCRIPTION"]
    },
    is_enable: {type: Boolean, default: true},
    commission: {
        dispatcher_commission: {type: Number, default: 0},
        dispatch_admin_commission: {type: Number, default: 0},
        from_date: {type: Date, required: true},
        to_date: {type: Date, required: true},
    },
    dispatcher_code: {type: String, required: true},
    recorded_time: {type: Date, required: true, default: Date.now},
});

module.exports = MONGOOSE.model("dispatchers", Dispatcher);


