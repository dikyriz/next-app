"use server"
import connectDB from "@/config/database";
import {auth} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";


export async function applyJobCreate(jobId){
    await connectDB();

    const {userId } = await auth();
    const profileData = await Profile.findOne({clerkId: userId});

    if(profileData){
        const applyThis = await ApplyJob.findOne({profile: profileData._id, jobs: jobId});
        if(applyThis){
            return {
                error: "Sudah Apply Job"
            }
        } else {
            await ApplyJob.create({
                profile: profileData._id,
                jobs: jobId
            })
            return {
                message: "Apply job success"
            }
        }
    } else {
        return {
            error: "Profile belum dibuat, silahkan buat dulu"
        }
    }
}