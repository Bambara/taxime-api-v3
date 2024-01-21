const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const COMPANY_WALLET = SCHEMA({
    admin_earnings: {type: Number, default: 0},
    company_name: {type: String, required: true},
    company_code: {type: String, required: true, unique: true},
    company_type: {type: String, required: true, enum: ["MASTER", "AGENT"], default: "AGENT"},
    company_location: {
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
    },
    company_contact_number: {type: String},
    company_email: {type: String},
    transaction_history: [
        {
            date_time: {type: Date},
            transaction_amount: {type: Number},
            transaction_type: {type: String, enum: ["TRIP", "ROAD-PICK-UP", "DISPATCH", "OTHER"]},
            is_a_trip: {type: Boolean},
            is_credited: {type: Boolean},
            method: {type: String, enum: ["CASH", "CARD"]},
            trip: {
                trip_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true,},
                trip_earning: {type: Number},
                trip_admin_commission: {type: Number},
                total_trip_value: {type: Number},
                pickup_location: {
                    address: {type: String, required: true,},
                    latitude: {type: Number, required: true,},
                    longitude: {type: Number, required: true,},
                },
                destinations: [
                    {
                        address: {type: String, required: true,},
                        latitude: {type: Number, required: true,},
                        longitude: {type: Number, required: true,},
                    },
                ],
            },
        },
    ],
});

module.exports = MONGOOSE.model("company_wallets", COMPANY_WALLET);
