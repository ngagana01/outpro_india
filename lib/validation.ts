import {z} from "zod";export const leadSchema=z.object({name:z.string().min(2),email:z.string().email(),company:z.string().optional(),service:z.string().optional(),message:z.string().min(10)});
