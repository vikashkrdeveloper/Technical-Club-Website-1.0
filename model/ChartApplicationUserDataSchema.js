const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const ChartApplicationUserDataSchema = new database.Schema({
    // id: {
    //     type: Number,
    //     trim: true,
    //     default: 0
    // },
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    phone: {
        type: Number,
        trim: true,
        default: null
    },

    belongs_to_referral_country: {
        type: Boolean,
        default: true
    },
    branch: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    city: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    college: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    gender: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    graduated: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    graduation_year: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    image: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    international_phone_number: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    linkedin: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    node_access_token: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    phone_country_code: {
        type: String,
        lowercase: true,
        trim: true,
        default: "IN"
    },
    screen_name: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    profileImage: {
        type: String,
        trim: true,
    },
    total_exp_in_months: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    DateTime: {
        type: Date,
        default: new Date()
    }, password: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]

}, { timestamps: true })

// ChartApplicationUserDataSchema.pre('save', async function (next) {
//     try {
//         let docs = this;
//         const id = await database.model("ChartApplication", ChartApplicationUserDataSchema).countDocuments();
//         docs.id = id + 1;
//         next();

//     } catch (error) {
//         console.log(error);
//     }
// })
ChartApplicationUserDataSchema.methods.genratetokens = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ 'token': token });
        this.save();
        return token;
    } catch (error) {
        console.log("Some technical issue");
    }

}

const ChartApplicationModel = database.model("ChartApplication", ChartApplicationUserDataSchema);
module.exports = ChartApplicationModel;