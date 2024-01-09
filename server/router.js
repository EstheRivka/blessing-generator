import express from 'express';
import controller from './controller.js';
const router = express.Router();

router.route("/")
    .get(controller.getBlessings)

export default router