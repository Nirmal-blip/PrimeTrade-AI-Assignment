import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {getMe} from '../Controllers/user.controller.js'

const router = express.Router();

// GET /api/profile (protected)
router.get("/", protect, getMe
);

export default router;
