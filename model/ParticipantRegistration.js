const database = require('../db/connect');
const ParticipantRegistrationSchema = new database.Schema({
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
    branch: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    AdmissionYear: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    EventSelectParticipant: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    }
}, { timestamps: true })

const ParticipantRegistrationModel = new database.model('ParticipantMemberRegistration', ParticipantRegistrationSchema);
module.exports = ParticipantRegistrationModel;