const express = require("express");
const router = express.Router();
const ContactUs= require("../controller/contactus.controller.js");

router.post("/ContactUs", ContactUs);

module.exports = router;