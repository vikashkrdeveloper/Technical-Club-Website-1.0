const database = require("../../../../model/QuestionAnswerDataSchema");
const QuizQuestionAnswerControllers = async (req, res) => {
    try {
        const { username, userid, correctquestionanswer, questionname, answer, attempt, submittime } = req.body;
        let answerFilter = [];
        if (answer !== undefined) {
            answer.forEach((element) => {
                element.options.forEach((options, index) => {
                    if (options.Select) {
                        const data = {
                            id: element.id,
                            Submit: element.Submit,
                            questionname: element.questionname,
                            questionnumber: element.questionnumber,
                            correctAnswer: element.mcqanswer,
                            participant_answer: options[`option${index + 1}`]
                        }

                        answerFilter.push(data);
                    }
                })
            })
        }
        if (username && userid && questionname && answer && attempt && correctquestionanswer && submittime) {
            const check_question_submit_or_not = await database.findOne({ username, userid });
            if (check_question_submit_or_not) {
                res.status(402).send("Already submit");
                return;
            } else {
                const insertdata = await new database({ username, userid, correctquestionanswer, questionname, answer: answerFilter, attempt, submittime });
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
module.exports = QuizQuestionAnswerControllers;
