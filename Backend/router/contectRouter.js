import express from "express"
import { contecController } from "../controller/Contect-Controller"
const contectRouter = express.Router()

contectRouter.route('/contect').post(contecController)

export{contectRouter}