import generateToken from '../config/generateToken.js'
import User from '../modules/userModel.js'
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';
import bcryptjs from 'bcryptjs'

dotenv.config()

cloudinary.config({
    cloud_name: 'dwmysdgoo',
    api_key: '735782391563281',
    api_secret: 'wFmQxNdwHRgwSpk8jWrTyQ98y8A'
});

export const userRegister = async (req, res) => {
    const { fname, lname, password, email, profile } = req.body
    // console.log(fname)

    try {
        console.log(fname, lname)
        if (!fname || !lname || !password || !email) {
            return res.status(400).json({ message: "please fill the input field", alert: false })
        }

        const existUser = await User.findOne({ email })

        const hashPassword = bcryptjs.hashSync(password, 10)

        if (existUser) {
            return res.status(400).json({ message: "user already exist!", alert: false })
        }

        let profileUrl = '';
        if (profile) {
            const uploadRes = await cloudinary.uploader.upload(profile, {
                upload_preset: "image_preset",
                folder: "chat",
            });
            profileUrl = uploadRes.url;
        }

        // console.log(profileUrl)

        const user = new User({
            fname,
            lname,
            profile: profileUrl || "https://cdn-icons-png.freepik.com/512/266/266033.png",
            email,
            password: hashPassword,
        })
        // console.log(user)

        generateToken(user._id, res)

        const data = {
            fname: user.fname,
            lname: user.lname,
            id: user._id,
            email: user.email,
            profile: user.profile,
        }

        await user.save()
        return res.status(201).json({ message: "user successfully registered!", alert: true, data })

    } catch (error) {
        return res.status(400).json({ message: "something went wrong when registered!", error, alert: false })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

    try {
        const user = await User.findOne({ email })

        const comparePassword = bcryptjs.compareSync(password, user?.password)
        console.log(comparePassword)

        generateToken(user._id, res)

        if (user) {
            if (comparePassword) {
                const data = {
                    fname: user.fname,
                    lname: user.lname,
                    id: user._id,
                    email: user.email,
                    profile: user.profile,
                    // token: generateToken(user._id)
                }
                return res.status(201).json({ message: "user login successfully", alert: true, data })
            }
            else {
                return res.status(400).json({ message: "Invalid email or password", alert: false })
            }
        }
        else {
            return res.status(400).json({ message: "User doesn't exist", alert: false })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "error while login user",error, alert: false })
    }
}