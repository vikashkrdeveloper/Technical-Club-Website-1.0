const database = require('../../../../model/QuestionAnswerDataSchema')
const AllQuizParticipantData = async (req, res) => {
    try {
        const data = await database.find().select('username').select('userid')
        res.status(200).send({ data: data, status: 500 })

    } catch (error) {
        res.status(500).send({ error: "Some technical issue", status: 500 })
    }
}

module.exports = AllQuizParticipantData