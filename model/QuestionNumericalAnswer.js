const database = require("../db/connect");
const QuestionNumericalAnswerDataSchema = new database.Schema(
    {
        username: {
            type: String,
            lowercase: true,
            trim: true,
        },
        userid: {
            type: Number,
            trim: true,
        },
        questionid: {
            type: Number,
            trim: true,
        },
        questionname: {
            type: String,
            lowercase: true,
            trim: true,
        },
        submittime: {
            type: Array,
            trim: true,
        },
        branch: {
            type: String,
            lowercase: true,
            trim: true,
        }, emailid: {
            type: String,
            lowercase: true,
            trim: true,

        }, year: {
            type: String,
            lowercase: true,
            trim: true,
        },
        answer: [],

    },
    { timestamps: true }
);

const QuestionNumericalModel = new database.model(
    "Numerical_Question_Answer",
    QuestionNumericalAnswerDataSchema

);
module.exports = QuestionNumericalModel;
