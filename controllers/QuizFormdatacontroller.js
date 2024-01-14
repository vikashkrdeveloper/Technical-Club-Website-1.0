const database = require('../model/QuizRegistrationCreateSchema');
const QuizFormdatacontroller = async (req, res) => {
    try {
        const data = await database.find();
        let datafilter = [];
        if (data) {
            data.forEach((element) => {
                datafilter.push({ _id: element._id, participantName: element.name, emailid: element.emailid, mobilenumber: element.mobilenumber, registration_number: element.registrationnumber, branch: element.branch, AdmissionYear: element.AdmissionYear, ProfileImage: element.ProfileImage.data, EventName: element.EventSelectParticipant })
            })
        }
        res.status(200).send(datafilter);
        return;

    } catch (error) {
        res.status(500).send("Some technical issue" + error);
        return;
    }
}
module.exports = QuizFormdatacontroller