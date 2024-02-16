const ChatConversationModel = require("../../../model/ChartConversationSchema");
const ChartMessageSchema = require("../../../model/ChartMessageSchema");
const { getReceiverSocketId, io } = require("../../../socket/soket");

const MessageController = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        let conversation = await ChatConversationModel.findOne({
            partcipants: { $all: [senderId, receiverId] },
        })
        if (!conversation) {
            conversation = await ChatConversationModel.create({
                partcipants: [senderId, receiverId],
            });
        }
        const newMessage = new ChartMessageSchema({
            senderId,
            receiverId,
            message,
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([
            conversation.save(),
            newMessage.save()
        ])

        const receiverIdSoketId = getReceiverSocketId(receiverId);
        if (receiverIdSoketId) {
            io.to(receiverIdSoketId).emit('newMessage', newMessage)
        }
        return res.status(201).json(newMessage);

    } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
    }
}
module.exports = MessageController;
