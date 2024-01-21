const dotenvConfigOutput = require("dotenv").config();
const express = require("express");
const compression = require('compression');
const responseTime = require("response-time");
const axios = require("axios");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbClient = require("./controllers/database_client");
const app = express();
const helmet = require('helmet')
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const chalk = require("chalk");
const path = require("path");
const http = require("http");
const https = require("https");

const BASE_URL = process.env.BASE_URL;
const BASE_PORT = process.env.BASE_PORT;
const APP_NAME = process.env.APP_NAME;

app.use(compression())

app.use(helmet())

app.use(fileUpload());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

global.getIPAddress = function (req) {
    return req.header("x-forwarded-for") || req.connection.remoteAddress;
};


const appName = APP_NAME;

app.get("/", (req, res) => {
    res.status(200).json({success: 'Taxi-Me Index'});
});

app.get("/api", (req, res) => {
    res.status(200).json({success: 'Taxi-Me API Index'});
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Main Routing
app.use("/api/v3/admin", require("./routes/admin"));
//


app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    const err = new Error("Internal Server Error");
    err.status = 500;
    next(err);
});

/*app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: err.message,
    });
});*/

//Connect to MongoDB
dbClient.connectDB();

const httpServer = http.createServer(app);
httpServer.listen(BASE_PORT, function () {
    console.info(chalk.green(appName + " API up and listening on http port " + BASE_PORT));
});

/*const httpsServer = https.createServer(app);
httpsServer.listen(BASE_PORT, () => {
    console.info(chalk.green(appName + " API up listening on https port " + BASE_PORT));
});*/

