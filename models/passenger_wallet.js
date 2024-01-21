const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const PASSENGER_WALLET = SCHEMA({
    passenger_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true, unique: true},
    bonus_amount: {type: Number, default: 0},
    total_wallet_points: {type: Number, default: 0},
    driver_referral_code: {type: String},
    devices: {
        total_devices_installment_in_due: {type: Number},
        device_daily_deduction: {type: Number},
        device_due_start_date: {type: Date},
    },
    transaction_history: [
        {
            date_time: {type: Date},
            transaction_amount: {type: Number},
            transaction_type: {type: String, enum: ["TRIP", "OTHER"]},
            is_a_trip: {type: Boolean},
            is_credited: {type: Boolean},
            method: {type: String, enum: ["MONEY", "CARD"]},
            description: {type: String},
            trip: {
                trip_id: {type: MONGOOSE.Schema.Types.ObjectId},
                trip_cost: {type: Number},
                total_trip_value: {type: Number},
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
    referral: [
        {
            referral_id: {type: String, required: true},
            referred_driver_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true},
            referred_id: {type: MONGOOSE.Schema.Types.ObjectId, required: true},
            referred_type: {type: String, enum: ["DRIVER", "USER-DISPATCHER", "DRIVER-DISPATCHER", "PASSENGER"]},
            earning: {type: Number},
            recorded_date: {type: Date, default: new Date()},
            expireDate: {type: Date},
        },
    ],
    promo_code: [
        {
            promo_code: {type: String},
            valid_starting_date: {type: Date},
            valid_ending_date: {type: Date},
            recorded_date: {type: Date},
            value: {type: Number},
            is_active: {type: Boolean},
        },
    ],
});

module.exports = MONGOOSE.model("passenger_wallets", PASSENGER_WALLET);
