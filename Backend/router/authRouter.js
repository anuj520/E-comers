import express from "express";
import { home, SignUpRouter,loginRouter, user } from "../controller/auth-controllers";
import { loginSchema,signUpSchemaZod } from "../validation/auth-validation";
import { validate } from "../middleware/validation-middleware";
import { authMiddleware } from "../middleware/auth-middleware";
const signUpRouter = express.Router();

signUpRouter.route('/').get(home)
signUpRouter.route('/signUp').post(validate(signUpSchemaZod),SignUpRouter)
signUpRouter.route('/login').post(validate(loginSchema),loginRouter)
signUpRouter.route('/user').get(authMiddleware,user)

export{signUpRouter}