const database = require("../../model/QuestionNumericalAnswer");
const QuestionAnswerControllers = async (req, res) => {
    try {
        const { username, userid, branch, emailid, answer, year, submittime } = req.body;
        if (username && userid && answer && emailid && year && branch && submittime) {
            const check_question_submit_or_not = await database.findOne({ userid });
            if (check_question_submit_or_not) {
                res.status(402).send("Already submit");
                return;
            } else {
                const insertdata = await new database({ username, branch, year, emailid, userid, answer, submittime });
                await insertdata.save();
                res.status(200).send("Question Done");
                return;

            }
        } else {
            res.status(400).send("Allfield ");
            return;
        }
    } catch (error) {
        console.log("Some technical issue" + error);
        res.status(500).send("Some technical issue");
        return;
    }
};
module.exports = QuestionAnswerControllers;
