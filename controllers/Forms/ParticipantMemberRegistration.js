const database = require('../../model/ParticipantRegistration');
const ParticipantMemberRegistration = async (req, res) => {
    try {
        const { name, emailid, mobilenumber, branch, AdmissionYear, EventSelectParticipant } = req.body;
        if (name && emailid && mobilenumber && branch && AdmissionYear && EventSelectParticipant) {
            const emailidFind = await database.findOne({ emailid });
            const mobilenumberFind = await database.findOne({ mobilenumber });
            if (emailidFind) {
                res.status(401).send("Email id Already exist");

            } else {
                if (mobilenumberFind) {
                    res.status(402).send("Mobile Number Already exist");

                } else {
                    const insertdata = new database({ name, emailid, mobilenumber, branch, AdmissionYear, EventSelectParticipant });
                    await insertdata.save();
                    res.status(200).send("Registration Sucessfully");

                }
            }

        } else {
            res.status(400).send("All field require");
        }

    } catch (error) {
        console.log('Some technical issue');
    }
}
module.exports = ParticipantMemberRegistration;