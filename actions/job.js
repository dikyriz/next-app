"use server"
import connectDB from "@/config/database";
import {redirect} from "next/navigation";
import {JobFormSchema} from "@/utils/JobSchema";
import Job from "@/models/job";
import {auth} from "@clerk/nextjs/server";

export async function jobCreate(stateData, formData) {
    await connectDB();
    // Validate form fields
    const validatedFields = JobFormSchema.safeParse({
        jobType: formData.get("jobType"),
        title: formData.get("title"),
        salary: parseInt(formData.get("salary")),
        category: formData.get("category"),
        isPublish: formData.get("isPublish") === 'on' ? true : false,
        remote: formData.get("remote") === 'on' ? true : false,
        requirements: formData.get("requirements"),
        benefits: formData.get("benefits"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        companyName: formData.get("companyName"),
        contactPhone: formData.get("contactPhone"),
        contactEmail: formData.get("contactEmail"),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //get id current user
    const {userId} = await auth();


    // Call the provider or db to create a user...
    const {jobType, title, salary, category, isPublish, remote, requirements, benefits, address, city, state, companyName, contactPhone, contactEmail} = validatedFields.data

    try {
        const newJob = new Job({
            jobType,
            title,
            salary,
            category,
            isPublish,
            remote,
            requirements,
            benefits,
            address,
            city,
            state,
            companyName,
            contactPhone,
            contactEmail,
            clerkId: userId
        })

        await newJob.save();

    } catch (e) {
        console.info(e);
    }

    redirect("/dashboard/jobs");
}

export async function jobUpdate(stateId, formData) {
    await connectDB();
    // Validate form fields
    const validatedFields = JobFormSchema.safeParse({
        jobType: formData.get("jobType"),
        title: formData.get("title"),
        salary: parseInt(formData.get("salary")),
        category: formData.get("category"),
        isPublish: formData.get("isPublish") === 'on' ? true : false,
        remote: formData.get("remote") === 'on' ? true : false,
        requirements: formData.get("requirements"),
        benefits: formData.get("benefits"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        companyName: formData.get("companyName"),
        contactPhone: formData.get("contactPhone"),
        contactEmail: formData.get("contactEmail"),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //get id current user
    const {userId} = await auth();


    // Call the provider or db to create a user...
    const {jobType, title, salary, category, isPublish, remote, requirements, benefits, address, city, state, companyName, contactPhone, contactEmail} = validatedFields.data

    const existingJob = await Job.findById(stateId);

    if(existingJob.clerkId != userId){
        return {
            error: "tidak bisa melakukan update job"
        }
    }

    await Job.findByIdAndUpdate(stateId, {
        jobType,
        title,
        salary,
        category,
        isPublish,
        remote,
        requirements,
        benefits,
        address,
        city,
        state,
        companyName,
        contactPhone,
        contactEmail,
        clerkId: userId
    })

    redirect("/dashboard/jobs");
}

export async function jobDelete(stateId){
    await connectDB();

    //get id current user
    const {userId} = await auth();

    const existingJob = await Job.findById(stateId);

    if(existingJob.clerkId != userId){
        return {
            error: "tidak bisa melakukan delete job"
        }
    }

    await Job.findByIdAndDelete(stateId);

    redirect("/dashboard/jobs");
}