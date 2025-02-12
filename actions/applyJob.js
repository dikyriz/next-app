"use server"
import connectDB from "@/config/database";
import {auth} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";
import {redirect} from "next/navigation";
import {ApplyJobFormSchema} from "@/utils/ApplyJobSchema";
import {revalidatePath} from "next/cache";


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

export async function applyJobUpdate(state, formData) {
    await connectDB();

    // Validate form fields
    const validatedFields = ApplyJobFormSchema.safeParse({
        message: formData.get('message'),
        status: formData.get('status'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Call the provider or db to create a user...
    const {status, message} = validatedFields.data

    const applyJobId = await ApplyJob.findById(state);

    await ApplyJob.findByIdAndUpdate(state, {
        message, status
    })

    revalidatePath(`/dashboard/jobs/${applyJobId.jobs}/applicant`)

    return null;
}