const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.SCHEMA;

const DISPATCHER_WALLET = SCHEMA({
    dispatcher_id: {type: SCHEMA.Types.ObjectId, required: true, unique: true},
    dispatcher_type: {type: String, enum: ["DRIVER", "USER", "ADMIN"],},
    bonus_amount: {type: Number, default: 0},
    total_wallet_points: {type: Number, default: 0},
    dispatcher_earnings: {type: Number, default: 0},
    admin_earnings: {type: Number, default: 0},
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
            transaction_type: {type: String, enum: ["TRIP", "ROAD-PICKUP", "DISPATCH", "OTHER"]},
            is_a_trip: {type: Boolean},
            is_credited: {type: Boolean},
            method: {type: String, enum: ["MONEY", "CARD"]},
            description: {type: String},
            trip: {
                trip_id: {type: SCHEMA.Types.ObjectId, required: true},
                trip_earning: {type: Number},
                trip_admin_commission: {type: Number},
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
            referral_id: {type: SCHEMA.Types.ObjectId, required: true},
            referred_driver_id: {type: SCHEMA.Types.ObjectId, required: true},
            earning: {type: Number},
            recorded_date: {type: Date},
        },
    ],
    promo_code: [
        {
            promo_code: {type: String},
            valid_starting_date: {type: Date},
            valid_ending_date: {type: Date},
            recorde_date: {type: Date},
            value: {type: Number},
            is_active: {type: Boolean},
        },
    ],
});

module.exports = MONGOOSE.model("dispatcher_wallets", DISPATCHER_WALLET);
