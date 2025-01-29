import {z} from "zod";

export const CategoryFormSchema = z.object({
    name: z.string()
        .min(6, "Input name min 6 character")
        .trim(),
    description: z.string()
        .min(6, "Input description min 6 character")
        .trim()
})