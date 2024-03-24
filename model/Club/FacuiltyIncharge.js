const database = require('../../db/connect')
const FacuiltyInchargeSchema = new database.Schema({
    facuilty_incharge_avatar: {
        data: Buffer,
        contentType: String
    },
    facuilty_incharge_name: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    facuilty_incharge_role: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
    },
    facuilty_incharge_mobile_Number: {
        type: Number,
        trim: true,
        default: null
    },
    facuilty_incharge_email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    facuilty_incharge_Linkedin: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    facuilty_incharge_Twitter: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    facuilty_incharge_department: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    clubId: {
        type: String,
        uppercase: true,
        trim: true,
        default: null
    }
})

const FacuiltyInchargeModel = database.model('club_facuilty_icharge', FacuiltyInchargeSchema);
module.exports = FacuiltyInchargeModel;