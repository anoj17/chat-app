import generateToken from '../config/generateToken.js'
import User from '../modules/userModel.js'

export const userRegister = async (req, res) => {
    try {

        const { fname, lname, password, email, profile } = req.body

        if (!fname || !lname || !password || !email) {
            return res.status(400).json({ message: "please fill the input field", alert: false })
        }

        const existUser = await User.findOne({ email })

        if (existUser) {
            return res.status(400).json({ message: "user already exist!", alert: false })
        }

        const user = new User({ fname, lname, email, password, profile })

        if (user) {
            const data = {
                fname: user.fname,
                lname: user.lname,
                id: user._id,
                email: user.email,
                profile: user.profile,
                token: generateToken(user._id)
            }
            await user.save()
            return res.status(201).json({ message: "user successfully registered!", alert: true, data })
        } else {
            return res.status(400).json({ message: "user not register", alert: false })
        }
    } catch (error) {
        return res.status(400).json({ message: "something went wrong when registered!", error, alert: false })
    }
}