const database = require('../../../../model/QuestionNumericalAnswer');
const NumericalQuestionAnswerApiControllers = async (req, res) => {
    try {
        const finddata = await database.find().select('-__v').select('-updatedAt').select('-createdAt');
        res.status(200).send(finddata);
        return;

    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(400).send('Some technical issue please reload the page')
        return;
    }
}

module.exports = NumericalQuestionAnswerApiControllers;