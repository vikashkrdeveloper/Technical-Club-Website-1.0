const database = require('../../db/connect');
const UserIdRequestSchema = new database.Schema({
    full_Name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    email_Id: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    phone_Number: {
        type: Number,
        require: true,
        trim: true,
        default: null
    },
    departement_Name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    admission_Year: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    current_Year: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    verify: {
        type: Boolean,
        default: false
    },
    verify_Id: {
        type: String,
        uppercase: true,
        trim: true,
        default: null
    },
    Registration_Number: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    }, college_Name: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    }, Date_Of_Birth: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    college_Id_Prof: {
        data: Buffer
    }

}, { timestamps: true })
const UserIdRequestModel = database.model('User_id_request', UserIdRequestSchema);
module.exports = UserIdRequestModel;