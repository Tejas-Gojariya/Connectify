import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import commentRoute from "./routes/commentRoutes.js";
import User from "./models/user.js";
import Post from "./models/post.js";
import Profile from "./models/Profile.js";
import Email from "./models/email.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// to server images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/upload", uploadRoute);
app.use("/api/comments", commentRoute);

// upload a profile
app.post("/api/profile", async(req, res) => {
    console.log("profile data is updated");
    try {
        const { bio, handle, username, email, number, interest } = req.body;

        const userProfile = new Profile({
            bio,
            handle,
            username,
            email,
            number,
            interest,
        });
        await userProfile.save();

        res.status(201).json({ message: "User profile uploaded successfully" });
    } catch (error) {
        console.error("Error uploading user profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// email subscribe
app.post("/api/email", async(req, res) => {
    console.log("email address is require");
    try {
        const { email } = req.body;

        const emailschema = new Email({
            email,
        });
        await emailschema.save();

        res.status(201).json({ message: "user email subscribe successfully" });
    } catch (error) {
        console.error("Error uploading user email:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// update User
app.patch("/api/profile/:id", async(req, res) => {
    try {
        const profileId = req.params.id;
        const { username, handle, bio, email, number, interest } = req.body;

        const updatedProfile = await Profile.findByIdAndUpdate(
            profileId, { username, handle, bio, email, number, interest }, { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).send("Profile Not define");
        }
        res.status(200).send(updatedProfile);
    } catch (error) {
        res.status(500).send(error.message);
    }
    console.log("update Profile Success");
});

// get All Profiles
app.get("/api/getall", async(req, res) => {
    console.log("Get All profile");
    try {
        const posts = await Profile.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// delete profiles
app.delete("/api/profile/delete/:id", async(req, res) => {
    console.log("delete post successfully");
    try {
        const postId = req.params.id;
        const post = await Profile.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        res.status(200).send("Profile deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// delete User
app.delete("/api/delete/:id", async(req, res) => {
    console.log("user delete successfully");
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.send(`Document with ${data.username} has been "deleted"..`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Post Delete By Id
app.delete("/api/posts/:id", async(req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        res.status(200).send("Post deleted successfully");
        console.log("delete post successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// error middleware
app.use(errorHandler);

// connect to mongo
const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", true);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log("mongodb is connect");
        });
    })
    .catch((err) => {
        console.log(err);
    });