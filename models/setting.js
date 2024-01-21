const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const SETTINGS = SCHEMA({
    android_app_version: {type: Number, default: 0},
    android_user_app_version: {type: Number, default: 0},
    ios_user_app_version: {type: String, default: 0},
    last_updated_date: {type: Date, required: true, default: Date.now}
});

module.exports = MONGOOSE.model("settings", SETTINGS);
