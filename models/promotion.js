const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const Promotion = SCHEMA({
    name: {type: String, required: true, unique: true},
    promo_for: {
        type: String,
        required: true,
        unique: false,
        enum: ["DRIVER", "PASSENGER", "AGENT"],
        default: "PASSENGER"
    },
    promo_code: {type: String, required: true, unique: true},
    commission: {type: Number, required: true, default: 0},
    is_enable: {type: Boolean, default: true},
    modified_time: {type: Date, required: true, default: Date.now},
    recorded_time: {type: Date, required: true, default: Date.now}
});

module.exports = MONGOOSE.model("promotions", Promotion);
