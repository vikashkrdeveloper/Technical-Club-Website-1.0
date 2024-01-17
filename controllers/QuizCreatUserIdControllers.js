const hashFunction = require('../helper/hash');
const databasefind = require('../model/QuizRegistrationCreateSchema');
const database = require('../model/UserIdQuizReqistrationSchema');
const QuizCreatUserIdControllers = async (req, res) => {
    try {
        const { name, userid, password, mobilenumber, registrationnumber, emailid, branch, AdmissionYear, EventSelectParticipant } = req.body;
        if (name && userid && password && mobilenumber && registrationnumber && emailid && branch && AdmissionYear && EventSelectParticipant) {
            const EmailId = await database.findOne({ emailid });
            const MobileNumber = await database.findOne({ mobilenumber });
            const Registration = await database.findOne({ registrationnumber });
            const UserId = await database.findOne({ userid });
            const datauserfind = await databasefind.findOne({ emailid });
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
                        if (UserId) {
                            res.status(405).send("User id already exist");

                        } else {
                            const hashpassword = await hashFunction(password);
                            const insertdata = await database({ name, emailid, userid, password: hashpassword, mobilenumber, bufferData: datauserfind.ProfileImage.data, registrationnumber, branch, AdmissionYear, EventSelectParticipant });
                            await insertdata.save();
                            res.status(200).send("Registration Done");
                            return;
                        }
                    }
                }
            }

        } else {
            res.status(400).send("All field require");
            return;
        }
    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(500).send('Some technical issue');
        return;
    }

}
module.exports = QuizCreatUserIdControllers