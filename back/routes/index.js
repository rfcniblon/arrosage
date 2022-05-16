const express = require('express');
const router = express.Router();

const users = require("./users");
const register = require("./register");
const login = require('./login');
const token = require("./token");
const secured = require("./secured");
const cron = require("./cron");

router.use("/users", users);
router.use("/register", register);
router.use("/login", login);
router.use("/token", token);
router.use("/secured", secured);
router.use("/cron", cron);

module.exports = router;
