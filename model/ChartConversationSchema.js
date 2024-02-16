const database = require('mongoose');
const ChartConversationSchema = new database.Schema({
    partcipants: [
        {
            type: database.Schema.Types.ObjectId,
            ref: 'ChartApplication'
        }
    ],
    messages: [{
        type: database.Schema.Types.ObjectId,
        ref: "ChartMessage",
        default: []

    }]
}, { timestamps: true });
// ChartConversationSchema.pre('save', function (next) {
//     let chart = this;
//     console.log("chart pre save");

//     if (!chart.partcipants.includes(chart.userId)) {
//         chart.partcipants.push(chart.userId);
//     };
//     next();
// })

const ChatConversationModel = database.model('ChatConversation', ChartConversationSchema);
module.exports = ChatConversationModel;
