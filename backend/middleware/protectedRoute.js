
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from '../modules/userModel.js';
dotenv.config()

 const protectedRoute = async (req, res, next) => {

    try {

        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({message: "Unauthorized -no token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({message: "Unauthorized -Invalid token"})
        }

        const user = await User.findById(decoded.id).select("-password")

        if(!user){
            return res.status(401).json({message: "User not found"})
        }

        req.user = user

        next()
        
    } catch (error) {
        console.log(error)
        return res.statue(500).json({error: "internal server error"})
    }
}

export default protectedRoute