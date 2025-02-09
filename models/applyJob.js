import mongoose from "mongoose";
import {Schema, model, models} from "mongoose";

const ApplyJobSchema = new Schema({
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: "Profile",
    },
    jobs: {
        type: mongoose.Schema.ObjectId,
        ref: "Jobs",
    },
    status: {
        type: String,
        enum: ["interview", "pending", "cancel"],
        default: "pending",
    },
    message: {
        type: String,
        default: null,
    }
}, {
    toJSON: {virtuals: true}, toObject: {virtuals: true}
})

ApplyJobSchema.virtual("ListPelamar", {
    ref: "Profile",
    localField: "profile",
    foreignField: "_id",
    justOne: true
})

const ApplyJob = models.ApplyJob || model("ApplyJob", ApplyJobSchema);

export default ApplyJob;