const jwt = require("jsonwebtoken");

const generate_token = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_name: user.user_name,
            role: user.role,
        },
        "cyP5R$MR%u28ASt236*ET9YS",
        // "8798761",
        {
            expiresIn: "30d",
        }
    );
};

module.exports = generate_token;
