"use server"
import Profile from "@/models/profile";
import {redirect} from "next/navigation";
import {ProfileSchemaForm} from "@/utils/ProfileSchema";
import connectDB from "@/config/database";
import {auth, currentUser} from "@clerk/nextjs/server";

export async function profileCreate(state, formData) {
    await connectDB();
    // Validate form fields
    const validatedFields = ProfileSchemaForm.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        biodata: formData.get('biodata'),
        portofolio: formData.get('portofolio'),
        linkend: formData.get('linkend'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Call the provider or db to create a user...
    const {firstName, lastName, biodata, linkend, portofolio} = validatedFields.data

    const {emailAddresses, id} = await currentUser();

    let role;
    const ProfileCount = await Profile.countDocuments();
    role = ProfileCount === 0 ? role = "admin" : role = "user";

    try {
        const newProfile = new Profile({
            firstName, lastName, biodata, linkend, portofolio, role, clerkId: id, email: emailAddresses[0].emailAddress
        })

        await newProfile.save();

    } catch (e) {
        console.info(e);
    }

    redirect("/dashboard/profile");
}

export async function profileUpdate(state, formData) {
    await connectDB();

    // Validate form fields
    const validatedFields = ProfileSchemaForm.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        biodata: formData.get('biodata'),
        portofolio: formData.get('portofolio'),
        linkend: formData.get('linkend'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Call the provider or db to create a user...
    const {firstName, lastName, biodata, portofolio, linkend} = validatedFields.data


    const profileEdit = await Profile.findByIdAndUpdate(state, {
        firstName, lastName, biodata, portofolio, linkend
    })

    if(!profileEdit){
        return {
            errors: "Delete failed"
        }
    }



    redirect("/dashboard/profile");
}