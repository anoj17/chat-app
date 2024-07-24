import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateToken = (id, res) => {
   const token = jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "3d"
   })
   res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, //ms
      httpOnly: true,
      sameSite: "strict"
   })
}
export default generateToken