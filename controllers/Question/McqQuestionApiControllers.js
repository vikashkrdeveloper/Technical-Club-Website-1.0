const database = require('../../model/QuestionDataSchemaMcq');
const McqQuestionApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data = [];
        finddata.forEach((element) => {
            data.push({ id: element.id,Submit:element.Submit, questionnumber: element.questionnumber, questionname: element.questionname, options: element.options, mcqanswer: element.mcqanswer })
        })
        res.status(200).send(data);
        return;

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue");
        return;
    }
}
module.exports = McqQuestionApiControllers;