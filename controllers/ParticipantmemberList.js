const database = require('../model/ParticipantRegistration');
const ParticipantmemberList = async (req, res) => {
    try {
        const data = await database.find();
        let filterdata = [];
        if (data) {
            data.forEach((element, index) => {
                filterdata.push({ _id: element._id, name: element.name, emailid: element.emailid, mobilenumber: element.mobilenumber, branch: element.branch, AdmissionYear: element.AdmissionYear, EventSelectParticipant: element.EventSelectParticipant })
            })

        }
        res.status(200).send(filterdata);
    } catch (error) {
        res.status(500).send("Some technical issue");
    }
}
module.exports = ParticipantmemberList