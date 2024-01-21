const router = require("express").Router();

const authUtils = require("../utils/auth_utils");

const adminController = require("../controllers/admin");

router.post("/signup", adminController.signup);

module.exports = router;
