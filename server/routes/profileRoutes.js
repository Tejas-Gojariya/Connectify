const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// upload post
// router.post("/", async(req, res) => {
//     console.log("profile data is updateing");
//     try {
//         const { bio, handle, username } = req.body;

//         const userProfile = new Profile({
//             bio,
//             handle,
//             username,
//         });
//         await userProfile.save();

//         res.status(201).json({ message: "User profile uploaded successfully" });
//     } catch (error) {
//         console.error("Error uploading user profile:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// update profile
// router.patch("/:id", async(req, res) => {
//     try {
//         const profileId = req.params.id;
//         const { aboutMe, contact, interests } = req.body;

//         const updatedProfile = await UserProfile.findByIdAndDelete(
//             profileId, { aboutMe, contact, interests }, { new: true }
//         );
//         if (!updatedProfile) {
//             return res.status(404).send("Post not found");
//         }
//         res.status(200).send(updatedProfile);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// get All
// router.get("/", async(req, res) => {
//     console.log("Get All profile");
//     try {
//         const posts = await UserProfile.find();
//         res.status(200).send(posts);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });