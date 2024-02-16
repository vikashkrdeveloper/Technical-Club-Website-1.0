const database = require('../../model/QuestionAnswerDataSchema');
const database1 = require('../../model/QuestionNumericalAnswer');
const database2 = require('../../model/QuestionDataSchemaMcq');
const database3 = require('../../model/QuestionDataSchemaNumerical');
const database4 = require('../../model/RegistrationDataSchema');
const clublist = require('../../model/ClubCreateSchema');
const codingregister = require('../../model/CodingRegistrationCreateSchema');
const quizregister = require('../../model/QuizRegistrationCreateSchema');
const logoregister = require('../../model/ParticipantRegistration');
const hackathonregister = require('../../model/TeamemberHackathon');
const codingparticipantidalloted = require('../../model/UserIdCodingRegistrationSchema');
const quizparticipantidalloted = require('../../model/TeamemberHackathon');
const bgmiregister = require('../../model/TeamMemberTechForm');
const QuestiontatalcountAnswerApiControllers = async (req, res) => {
    try {
        const Answer = await database.countDocuments();
        const numericalquestionanswer = await database1.countDocuments();
        const mcqquestion = await database2.countDocuments();
        const numbericalquestion = await database3.countDocuments();
        const totalparticipent = await database4.countDocuments();
        const clublisttotal = await clublist.countDocuments();
        const Totalregistercoding = await codingregister.countDocuments();
        const Totallogoregister = await logoregister.countDocuments();
        const Totalquizregister = await quizregister.countDocuments();
        const Totalhackathonregister = await hackathonregister.countDocuments();
        const Totalcodingparticipantidalloted = await codingparticipantidalloted.countDocuments();
        const Totalquizparticipantidalloted = await quizparticipantidalloted.countDocuments();
        const totalbgmiregister = await bgmiregister.countDocuments();
        const datas = { mcqAnswer: Answer, mcqquestion, numbericalquestion, NumericalAnswer: numericalquestionanswer, totalparticipent, clublist: clublisttotal, Totalregistercoding: Totalregistercoding, Totallogoregister, Totalquizregister, Totalhackathonregister, Totalcodingparticipantidalloted, Totalquizparticipantidalloted, totalbgmiregister };
        res.status(200).send(datas);
        return;

    } catch (error) {
        console.log('Some technical issue');
        return;
    }
}
module.exports = QuestiontatalcountAnswerApiControllers;