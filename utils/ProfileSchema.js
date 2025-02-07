import {z} from "zod"

export const ProfileSchemaForm = z.object({
    firstName: z.string()
        .min(2, "nama depan min 2 character")
        .trim(),
    lastName: z.string()
        .min(2, "nama belakang min 2 character")
        .trim(),
    biodata: z.string()
        .min(100, "biodata min 100 character")
        .trim(),
    linkend: z.string()
        .url({message:"harus berupa link https"}),
    portofolio: z.string()
        .url({message:"harus berupa link https"}),
})