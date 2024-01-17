const database = require('../model/QuestionNumericalAnswer');
const database2 = require('../model/QuestionAnswerDataSchema');
const QuestiontatalAttamptAnswerApiControllers = async (req, res) => {
    try {
        let userid = req.params.userid;
        let data = [];
        const datas = await database.find({ userid:userid });
        if (datas) {
            datas.forEach((element, index) => {
                data.push({ _id: element._id, username: element.username, userid: element.userid, questionnumber: element.questionid, questionname: element.questionname, answer: element.answer, submittime: element.submittime });
            })
            res.status(200).send(data)
            return;
        }
        if (!datas) {
            const datases = await database2.find({ userid: userid });
            datases.forEach((element, index) => {
                data.push({ _id: element._id, username: element.username, userid: element.userid, questionnumber: element.questionid, questionname: element.questionname, answer: element.answer, submittime: element.submittime });
            })
            res.status(200).send(data)
            return;
        }

    } catch (error) {
        console.log("Error"+error);
    }
}
module.exports = QuestiontatalAttamptAnswerApiControllers;