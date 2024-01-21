const asyncHandler = require("express-async-handler");
const chalk = require("chalk");

const AdminProfile = require("../models/admin_profile");

const signup = asyncHandler(async (req, res) => {
    try {

        const adminProfile = AdminProfile({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            nic: req.body.nic,
            dob: req.body.dob,
            password: req.body.password,
            mobile: req.body.mobile,
            gender: req.body.gender,
            address: {
                line_01: req.body.address.line_01,
                line_02: req.body.address.line_02,
                city: req.body.address.city,
                zip_code: req.body.address.zip_code,
                country: req.body.address.country,
            },
            role: req.body.role,
            company_code: req.body.company_code,
            company_name: req.body.company_name,
            company_type: req.body.company_type,
            is_enable: req.body.is_enable,
            is_verified: req.body.is_verified,
            is_logged_in: req.body.is_logged_in,
            last_login: req.body.last_login,
            recorded_time: req.body.recorded_time,
        });

        await adminProfile.save().then(doc => {
            res.status(201).json(doc);
        }).catch(reason => {
            res.status(500).json({error: reason.toString()});
        });

    } catch (e) {
        console.error(chalk.redBright(e));
        res.status(500).json({error: e.toString()});
    }
});

module.exports = {
    signup
};
