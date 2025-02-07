import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const ProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    biodata: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
        default: "user"
    },
    portofolio: {
        type: String,
        required: true,
    },
    linkend: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
    }

})

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;