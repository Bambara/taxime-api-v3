const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const AGENT_WALLET = SCHEMA({
    agent_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true, unique: true},
    agent_earnings: {type: Number, default: 0},
    total_wallet_points: {type: Number, default: 0},
    bonus_amount: {type: Number, default: 0},
    agent_referral_code: {type: String,},
    company_code: {type: String, required: true, unique: true},
    transaction_history: [
        {
            date_time: {type: Date,},
            transaction_amount: {type: Number,},
            transaction_type: {type: String, enum: ["TRIP", "ROAD-PICKUP", "DISPATCH", "OTHER"]},
            is_a_trip: {type: Boolean,},
            is_credited: {type: Boolean,},
            method: {type: String, enum: ["CASH", "CARD"]},
            trip: {
                trip_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true},
                trip_earning: {type: Number,},
                trip_admin_commission: {type: Number,},
                total_trip_value: {type: Number,},
                pickup_location: {
                    address: {type: String, required: true},
                    latitude: {type: Number, required: true},
                    longitude: {type: Number, required: true},
                },
                destinations: [
                    {
                        address: {type: String, required: true},
                        latitude: {type: Number, required: true},
                        longitude: {type: Number, required: true},
                    },
                ],
            },
        },
    ],
    promo_codes: [
        {
            promo_code: {type: String,},
            valid_starting_date: {type: Date, default: new Date()},
            valid_ending_date: {type: Date, default: new Date()},
            recorded_date: {type: Date, default: new Date()},
            value: {type: Number,},
            is_active: {type: Boolean,},
        },
    ],
    recharge_history: [
        {
            date_time: {type: Date,},
            amount: {type: Number,},
            method: {type: String,},
            description: {type: String,},
        },
    ],
});

module.exports = MONGOOSE.model("agent_wallets", AGENT_WALLET);
