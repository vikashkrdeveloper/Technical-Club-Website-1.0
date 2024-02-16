const database = require('../../model/QuestionDataSchemaMcq');
const QuestionmcqControllers = async (req, res) => {
    try {
        const { questionname, option1, option2, option3, option4, mcqanswer, questionnumber } = req.body;
        if (questionname && option1 && option2 && option3 && option4 && mcqanswer && questionnumber) {
            let optionsMcq = [];
            optionsMcq.push({id:1, option1, Select: false });
            optionsMcq.push({id:2, option2, Select: false });
            optionsMcq.push({id:3, option3, Select: false });
            optionsMcq.push({id:4, option4, Select: false });
            const finddata = await database.findOne({ questionnumber });
            if (finddata) {
                res.status(401).send("Questionnumber Already exist ");
                return;

            } else {
                if (option1 === option2 || option1 == option3 || option1 === option4) {
                    res.status(400).send("Two Option Are Same Please change data");
                    return;
                } else {
                    if (option2 === option1 || option2 == option3 || option2 === option4) {
                        res.status(400).send("Two Option Are Same Please change data");
                        return;

                    } else {
                        if (option3 === option2 || option3 == option1 || option3 === option4) {
                            res.status(400).send("Two Option Are Same Please change data");
                            return;
                        } else {
                            if (option4 === option2 || option4 == option3 || option4 === option1) {
                                res.status(400).send("Two Option Are Same Please change data");
                                return;
                            } else {
                                const insertdata = await new database({ questionname, questionnumber, options: optionsMcq, mcqanswer });
                                await insertdata.save();
                                res.status(200).send('Done Added');
                                return;
                            }
                        }
                    }
                }
            }
        } else {
            res.status(400).send('All field require');
            return;
        }

    } catch (error) {
        res.status(500).send('Some technical issue' + error);
        return;
    }
}
module.exports = QuestionmcqControllers;