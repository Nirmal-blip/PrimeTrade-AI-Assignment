import express from "express";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET /api/profile (protected)
router.get("/", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully ✅",
    user: req.user, // comes from JWT
  });
});

export default router;
