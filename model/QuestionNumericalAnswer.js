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
        answer: {
            type: String,
            lowercase: true,
            trim: true,
        },
        submittime: {
            type: Array,
            trim: true,
        },
    },
    { timestamps: true }
);

const QuestionNumericalModel = new database.model(
    "Numerical_Question_Answer",
    QuestionNumericalAnswerDataSchema

);
module.exports = QuestionNumericalModel;
