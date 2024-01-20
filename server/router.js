const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route("/")
    .post(controller.getBlessings)

module.exports = router;