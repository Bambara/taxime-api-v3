const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const Log = SCHEMA({
    u_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true},
    module: {type: String, required: true},
    for: {type: String, required: true},
    action: {type: String, required: true},
    data: {type: String, required: true},
    recorded_date: {type: Date, required: false},
});

module.exports = MONGOOSE.model("logs", Log);
