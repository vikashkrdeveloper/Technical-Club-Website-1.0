const database = require('mongoose');
const ChartMessageSchema = new database.Schema({
    senderId: {
        type: database.Schema.Types.ObjectId,
        required: true,
        ref: "ChartApplication"
    },
    receiverId: {
        type: database.Schema.Types.ObjectId,
        required: true,
        ref: "ChartApplication"
    },
    message: { type: String, required: true },
    DateSent: { type: Date, default: Date.now() },  
},{timestamps:true});
ChartMessageSchema.methods.addView = function () {
    return this.updateOne({ 'Views': Math.floor(Math.random() * 100) });
};
module.exports = database.model("ChartMessage", ChartMessageSchema);