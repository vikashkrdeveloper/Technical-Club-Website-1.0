const database = require('../db/connect');
const QuestionDataSchemaMcq = new database.Schema({
    id: {
        type: Number,
        default: 1
    },
    questionname: {
        type: String,
        lowarecase: true,
        trim: true
    },
    questionnumber: {
        type: Number,
        trim: true
    },
    Submit: {
        type: Boolean,
        default: false
    },
    options: [
        {
            type: Object,
            lowarecase: true,
            trim: true

        }]
    ,
    mcqanswer: {
        type: String,
        lowarecase: true,
        trim: true
    }
}, { timestamps: true })
QuestionDataSchemaMcq.pre("save", async function (next) {
    try {
        let docs = this;
        const id = await database.model("Question_Mcq", QuestionDataSchemaMcq).countDocuments();
        docs.id = id + 1;
        next();
    } catch (error) {
        next();
    }
});

const QuestionDataModelMcq = new database.model('Question_Mcq', QuestionDataSchemaMcq);

module.exports = QuestionDataModelMcq;