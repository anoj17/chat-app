import express from 'express'
import { loginUser, userRegister } from '../controllers/userController.js'


const router = express.Router()

router.post('/',loginUser)

router.post("/signup",userRegister)


export default router