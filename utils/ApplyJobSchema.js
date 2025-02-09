import {z} from "zod";

export const ApplyJobFormSchema = z.object({
    message: z.string()
        .min(50, "Input name min 50 character")
        .trim(),
    status: z.enum(["pending", "interview", "cancel"])
})