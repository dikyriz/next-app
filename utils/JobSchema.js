import {z} from "zod";
import {JOB_TYPE} from "@/utils/constant";

export const JobFormSchema = z.object({
    jobType: z.enum(Object.values(JOB_TYPE)),
    isPublish: z.boolean(),
    title: z.string()
        .min(6, "Input title min 6 character")
        .trim(),
    salary: z.number()
        .gte(3000000, {message: "salary min 3.000.000"}),
    category: z.string(),
    remote: z.boolean(),
    requirements: z.string()
        .min(6, "Input requirements min 6 character")
        .trim(),
    benefits: z.string()
        .min(6, "Input benefits min 6 character")
        .trim(),
    address: z.string()
        .min(6, "Input address min 6 character")
        .trim(),
    city: z.string()
        .min(6, "Input city min 6 character")
        .trim(),
    state: z.string()
        .min(6, "Input state min 6 character")
        .trim(),
    companyName: z.string()
        .min(6, "Input Company min 6 character")
        .trim(),
    contactPhone: z.string()
        .min(4, "Input Phone min 4 character")
        .trim(),
    contactEmail: z.string()
        .email({message: "Input Email ex: mail@mail.com"})
})