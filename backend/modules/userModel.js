import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: 
            "https://cdn-icons-png.freepik.com/512/266/266033.png"
    },
},
    {timestamps: true}
);

const User = mongoose.model("user", userSchema)

export default User