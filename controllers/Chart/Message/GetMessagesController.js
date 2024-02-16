const ChatConversationModel = require('../../../model/ChartConversationSchema');
const ChartMessageSchema = require('../../../model/ChartMessageSchema');
const GetMessagesController = async (req, res) => {
    try {
        const { id: userToChartId } = req.params;
        const senderId = req.user._id;
        const conversation = await ChatConversationModel.findOne({
            partcipants: { $all: [senderId, userToChartId] },
        }).populate('messages');
        if (!conversation) { return res.status(200).json([]) }
        const messages =conversation.messages;

        // const messages = [];
        // conversation.messages.forEach((message) => {
        //     let messageData = {};
        //     if (message.from === senderId) {
        //         messageData = { ...message.data, "self": true };
        //     }
        //     else {
        //         messageData = { ...message.data, "self": false };
        //     }
        //     messages.push(messageData);
        // });
        res.status(200).json(messages)


    } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
    }
}
module.exports = GetMessagesController;