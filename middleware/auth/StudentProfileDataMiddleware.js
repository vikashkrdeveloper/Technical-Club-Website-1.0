const jwt = require('jsonwebtoken');
const ParticipantSchemamodel = require('../../model/Users/ParticipantSchema');
const StudentProfileDataMiddleware = async (req, res, next) => {
    try {
        const Participant_Token = req.cookies.Participant_Token;
        if (Participant_Token) {
            const Participant_Token_Verification = await jwt.verify(Participant_Token, process.env.SECRET_KEY);
            if (Participant_Token_Verification) {
                const Student_Data = await ParticipantSchemamodel.findOne({ _id: Participant_Token_Verification._id, "tokens.token": Participant_Token }).select('-__v').select('-updatedAt').select('-createdAt').select('-tokens').select('-participant_Password')
                if (Student_Data) {
                    req.StudentProfileData = Student_Data;
                    next();
                }
                else {
                    res.status(401).json({ message: "Unauthorized Student", status: 401 });
                    return;
                }
            } else {
                res.status(401).json({ message: "Unauthorized Student", status: 401 });
                return;
            }

        }
        else {
            res.status(401).json({ message: "Unauthorized Student", status: 401 });
            return;
        }
    } catch (error) {
        res.status(401).json({ message: "Unauthorized Student", status: 401 });
        return;
    }

}

module.exports = StudentProfileDataMiddleware