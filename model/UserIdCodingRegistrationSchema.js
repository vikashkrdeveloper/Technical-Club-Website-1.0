const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const UserIdCodingReqistrationSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    userid: {
        type: Number,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    role: {
        type: Number,
        trim: true,
        default: 0
    },
    mobilenumber: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    registrationnumber: {
        type: String,
        require: true,
        trim: true,
        unique: true
    }, emailid: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }, branch: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }, AdmissionYear: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }, EventSelectParticipant: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    bufferData: Buffer,
    tokens: [
        {
            token: {
                type: String,
                trim: true,
            }
        }
    ]

}, { timestamps: true })

UserIdCodingReqistrationSchema.methods.genratetokens = async function () {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ "token": token });
    await this.save();
    return token;
}

const UserIdCodingReqistrationSchemamodel = database.model('UserIdCodingReqistrationSchema', UserIdCodingReqistrationSchema);
module.exports = UserIdCodingReqistrationSchemamodel;