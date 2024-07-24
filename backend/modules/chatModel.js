import mongoose, { mongo } from "mongoose";

const chatSchema = new mongoose.Schema({

   participant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   }],
   
    messages: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    },
]
   
},{timestamps: true})

const Chat = mongoose.model("chat",chatSchema)

export default Chat