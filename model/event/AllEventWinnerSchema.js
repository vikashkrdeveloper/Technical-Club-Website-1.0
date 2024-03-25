const database = require('../../db/connect');

const AllEventWinnerSchema = new database.Schema({
    winner_Participant_Name: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Avtar: {
        data: Buffer
    },
    winner_Participant_Branch: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Admission_Year: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Email_Id: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Mobile_Number: {
        type: Number,
        trim: true,
        default: null
    },
    winner_Participant_Linkedin_Profile_Id: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Twitter_Profile_Id: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Event_Name: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    winner_Participant_Event_Year: {
        type: Number,
        trim: true,
        default: null
    },
    winner_Participant_Event_Id: {
        type: String,
        uppercase: true,
        trim: true,
        default: null
    }

}, { timestamps: true })

const AllEventWinnerModel = database.model("event_winner_list", AllEventWinnerSchema);

module.exports = AllEventWinnerModel;