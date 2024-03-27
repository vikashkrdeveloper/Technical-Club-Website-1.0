const database = require('../../db/connect');
const jwt = require('jsonwebtoken');
const ParticipantSchema = new database.Schema({
    participant_Name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    techk_Shitiz_Id: {
        type: String,
        require: true,
        uppercase: true,
        trim: true,
        default: null
    },
    participant_Email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Branch: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Registration_Number: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Admission_Year: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Year_of_Study: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_College_Name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: "Government Engineering College, Siwan"
    },
    participant_Residential_Address: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Date_of_Birth: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Gender: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Previous_Event_Participation_History: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Event_Participation_History: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Special_Accommodations: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Dietary_Restrictions: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Event_Fees: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_T_Shirt_Size: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Emergency_Contact_Name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Emergency_Contact_Relationship: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Emergency_Contact_Phone_Number: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Transportation_Arrangements: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Housing_Accommodations: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Volunteering_Interest: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        default: null
    },
    participant_Phone: {
        type: Number,
        require: true,
        trim: true,
        default: null
    },
    participant_Password: {
        type: String,
        require: true,
    },
    participant_Roll: {
        type: Number,
        trim: true,
        default: 0
    },
    participant_Profile_Avtar: {
        data: Buffer,
    },
    participant_Avtar: {
        type: String,
        require: true,
        trim: true,
        default: null
    },
    tokens: [
        {
            token: {
                type: String,
                require: true,
                trim: true,
                lowercase: true
            }
        }
    ]
}, { timestamps: true })

ParticipantSchema.methods.participanttokengenrate = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ 'token': token });
        await this.save();
        return token;

    } catch (error) {
        console.log("Some technical issue");
    }
}

const ParticipantSchemamodel = database.model('techkshitiz_user_data', ParticipantSchema);
module.exports = ParticipantSchemamodel;