import express from "express"
import { authMiddleware } from "../middleware/auth-middleware"
import { adminMiddleware } from "../middleware/admin-middleware"
import { deleteMessage, getAlluser, getContectAdd, updateUser, updateUserId, userDelete } from "../controller/admin-controller"
const AdminRouter = express.Router()

AdminRouter.route('/users').get(authMiddleware,adminMiddleware,getAlluser)
AdminRouter.route('/users/:id').get(authMiddleware,adminMiddleware,updateUserId)
AdminRouter.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUser)
AdminRouter.route('/user/delete/:id').delete(authMiddleware,adminMiddleware,userDelete)

AdminRouter.route('/contect').get( authMiddleware,adminMiddleware,getContectAdd)
AdminRouter.route('/contect/delete/:id').delete(authMiddleware,adminMiddleware, deleteMessage)
export{AdminRouter}