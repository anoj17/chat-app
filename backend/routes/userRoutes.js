import express from 'express'
import { userRegister } from '../controllers/userController.js'


const router = express.Router()

router.route('/signup').post(userRegister)


export default router