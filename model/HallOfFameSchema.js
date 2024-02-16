const database = require('../db/connect')
const HallOfFameSchema = new database.Schema({
    id: {
        type: Number,
        default: 1
    },
    clubName: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,

    },
    clubYear: {
        type: Number,
        default: null,
    },
    clubEventName: [
        {
            clubEventName: {
                winnerName: {
                    type: String,
                    lowercase: true,
                    trim: true,
                    default: null,
                },
                winnerBranch: {
                    type: String,
                    lowercase: true,
                    trim: true,
                    default: null,
                },
                winnerAdmissionYear: {
                    type: Number,
                    default: null,
                }
            },
        }
    ]
}, { timestamps: true })
HallOfFameSchema.pre("save", async function (_, _, next) {
    try {
        let docs = this;
        const id = await database.model("HallOfFame", HallOfFameSchema).countDocuments();
        docs.id = id + 1;
        next();
    } catch (error) {
        next();
    }
});
const HallOfFameModel = database.model('HallOfFame', HallOfFameSchema);
module.exports = HallOfFameModel
