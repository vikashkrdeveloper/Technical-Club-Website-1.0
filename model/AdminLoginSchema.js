const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const AdminLoginSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: Number,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    roll: {
        type: Number,
        default: 1,
        trim: true
    },
    adminid: {
        type: Number,
        require: true,
        trim: true
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

AdminLoginSchema.methods.admintokengenrate = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ 'token': token });
        await this.save();
        return token;

    } catch (error) {
        console.log("Some technical issue");
    }
}

const AdminLoginSchemamodel = new database.model('AdminData', AdminLoginSchema);
module.exports = AdminLoginSchemamodel;