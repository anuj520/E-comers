
import z from "zod"

const loginSchema = z.object({
    email: z
    .string({ message: "email is required"})
    .trim()
    .min(12, { message: 'email must be at last 12 char..'})
    .max(30, { message: "email must be not be morethen 30 characters"}),

    password: z
    .string({ message: 'password is required'})
    .trim()
    .min(8, { message: 'password must be at last 8 character'})
    .max(19, {mas:'password must be not be morethen 19 characters'})
})

const signUpSchemaZod = loginSchema.extend({
    username:z
    .string({ message: "username is required"})
    .trim()
    .min(3,{ message: "username must be at last 3 char.."})
    .max(30 ,{ message: "username must be not be morethen 30 characters"}),

    phone:z
    .string({ message: "phone is required"})
    .min(10, { message:"phone must be at last 10 char.." })
    .max(20,{ message: "username must be not be morethen 20 characters"})
})
export{loginSchema,signUpSchemaZod}