const database = require('../db/connect');

const EventGallerySchema = new database.Schema({
    id: {
        type: Number,
        default: 1
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });
EventGallerySchema.pre("save", async function (next) {
    try {
        let docs = this;
        const id = await database.model("Event_Gallery", EventGallerySchema).countDocuments();
        docs.id = id + 1;
        next();
    } catch (error) {
        next();
    }
});
const EventGalleryModel = database.model('Event_Gallery', EventGallerySchema);

module.exports = EventGalleryModel;