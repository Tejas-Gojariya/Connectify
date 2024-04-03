import express from "express";
import {
    loginUser,
    logoutUser,
    registerUser,
} from "../controllers/authController.js";
// import { deleteUserById } from "../controllers/deleteController.js"
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
// router.delete("/:userId", deleteUserById);





export default router;