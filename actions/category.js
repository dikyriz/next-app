"use server"
import {CategoryFormSchema} from "@/utils/CategorySchema";
import connectDB from "@/config/database";
import Categories from "@/models/category";
import {redirect} from "next/navigation";

export async function categoryCreate(state, formData) {
    await connectDB();
    // Validate form fields
    const validatedFields = CategoryFormSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Call the provider or db to create a user...
    const {name, description} = validatedFields.data

    try {
        const newCategory = new Categories({
            name,
            description
        })

        await newCategory.save();

    } catch (e) {
        console.info(e);
    }

    redirect("/dashboard/category");
}