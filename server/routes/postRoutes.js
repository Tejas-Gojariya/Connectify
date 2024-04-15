import express from "express";
import {
    createPost,
    deletePost,
    getPostById,
    getRandomPosts,
    myPosts,
} from "../controllers/postControllers.js";
import protect from "../middlewares/jwt.js";
const router = express.Router();

router.post("/", protect, createPost);

router.get("/", protect, myPosts);

// get all posts
router.get("/random", protect, getRandomPosts);

// Delete Post
router.delete("/:", protect, deletePost);

// get one Posts
router.get("/:postId", protect, getPostById);

export default router;