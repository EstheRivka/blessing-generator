// import express from 'express';
// import controller from './controller.js';
const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route("/")
    .post(controller.getBlessings)

// export default router
module.exports = router;