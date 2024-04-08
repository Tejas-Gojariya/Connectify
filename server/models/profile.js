import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    handle: {
        type: String,
        require: true,
    },
    bio: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],
    },
    number: {
        type: Number,
        require: true,
    },
    interest: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;