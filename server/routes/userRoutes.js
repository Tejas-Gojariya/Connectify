import express from "express";
import {
    followUser,
    getUserById,
    UnFollowUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/jwt.js";
const router = express.Router();

// get user By id
router.get("/:userId", protect, getUserById);

// Follow user
router.put("/follow/:id", protect, followUser);

// unfollow user
router.put("/unfollow/:id", protect, UnFollowUser);

export default router;