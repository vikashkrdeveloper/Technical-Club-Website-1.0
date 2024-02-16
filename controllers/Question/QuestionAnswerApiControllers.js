const database = require('../../model/QuestionAnswerDataSchema');
const QuestionAnswerApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data = [];
        finddata.forEach((element) => {
            data.push({ _id: element._id,  attempt: element.attempt, username: element.username, userid: element.userid, submittime: element.submittime, answer: element.answer })
        })
        res.status(200).send(data);
        return;

    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(400).send('Some technical issue please reload the page')
        return;
    }
}

module.exports = QuestionAnswerApiControllers;