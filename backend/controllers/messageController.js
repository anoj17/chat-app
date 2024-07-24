import Chat from "../modules/chatModel.js"
import Message from "../modules/messageModel.js"


export const sendMessage = async (req, res) => {

    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user._id

        let chat = await Chat.findOne({
            participant: {$all: [senderId, receiverId]}
        })
        
        if(!chat){
            chat = await Chat.create({
                participant: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
           senderId,
           receiverId,
           message
        })
        // console.log(newMessage)

        if(newMessage){
            chat.messages.push(newMessage._id)
        }

        // await chat.save()
        // await newMessage.save()

        //both chat and message save in parallel
        await Promise.all([ chat.save(), newMessage.save()])
        res.status(201).json(newMessage)

    } catch (error) {
        console.log(error)
       return res.status(500).json({message: "message didnt sent"}) 
    }
}

export const getMessages = async (req, res) => {
    
    // console.log(chatId, senderId)
    
    try {
        const {id: chatId} = req.params
        const senderId = req.user._id

        const chat = await Chat.findOne({
            participant: {$all: [senderId, chatId]}
        }).populate({path:"messages"})

        return res.status(200).json(chat.messages)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "Internal server error"}) 
    }
}