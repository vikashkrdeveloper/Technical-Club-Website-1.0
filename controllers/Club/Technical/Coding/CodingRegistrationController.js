const database = require('../../../../model/CodingRegistrationCreateSchema');
const CodingRegistrationController = async (req, res) => {
    try {

        const { name, emailid, mobilenumber, registrationnumber, branch, AdmissionYear, EventSelectParticipant } = req.body;
        if (name && emailid && mobilenumber && registrationnumber && branch && AdmissionYear && EventSelectParticipant) {
            const EmailId = await database.findOne({ emailid });
            const MobileNumber = await database.findOne({ mobilenumber });
            const Registration = await database.findOne({ registrationnumber });
            if (EmailId) {
                res.status(401).send("Email id already exist");
                return;
            } else {
                if (MobileNumber) {
                    res.status(402).send("Mobile number Already exist");
                    return;
                } else {
                    if (Registration) {
                        res.status(403).send("Registration number already exist");
                        return;
                    } else {
                        const insertdata = await database({ name, emailid, mobilenumber, ProfileImage: { data: req.file.buffer }, registrationnumber, branch, AdmissionYear, EventSelectParticipant });
                        await insertdata.save();
                        res.status(200).send("Registration Done");
                        return;
                    }
                }
            }

        } else {
            res.status(400).send("All field require");
            return;
        }
    } catch (error) {
        console.log('Some technical issue');
        res.status(500).send('Some technical issue');
        return;
    }

}
module.exports = CodingRegistrationController