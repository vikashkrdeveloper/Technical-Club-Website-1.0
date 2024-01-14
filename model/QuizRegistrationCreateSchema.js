const database = require('../db/connect');
const QuizRegistrationCreateSchema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    emailid: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    mobilenumber: {
        type: Number,
        trim: true,
        require: true
    },
    registrationnumber: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    branch: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    AdmissionYear: {
        type: Number,
        lowercase: true,
        trim: true,
        require: true
    },
    ProfileImage: {
        data: Buffer
    },
    EventSelectParticipant: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    }
}, { timestamps: true });

const QuizRegistrationCreateModel = new database.model('Quiz_Registration', QuizRegistrationCreateSchema);
module.exports = QuizRegistrationCreateModel;