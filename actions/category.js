import {CategoryFormSchema} from "@/utils/CategorySchema";


export async function categoryCreate(state, formData) {
    // Validate form fields
    const validatedFields = CategoryFormSchema.safeParse({
        name: formData.get('name'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Call the provider or db to create a user...
}