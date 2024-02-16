const jwt = require('jsonwebtoken');
const database = require("../model/UserIdQuizReqistrationSchema");
const QuizAuthdataMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await database.findOne({ _id: verify._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error("User not found");
        }
        const participantdata = {
            _id: rootUser._id,
            name: rootUser.name,
            userid: rootUser.userid,
            emailid: rootUser.emailid,
            mobilenumber: rootUser.mobilenumber,
            AdmissionYear: rootUser.AdmissionYear,
            branch: rootUser.branch,
            EventSelectParticipant: rootUser.EventSelectParticipant,
            bufferData: rootUser.bufferData,
            registrationnumber: rootUser.registrationnumber,
            Verify_Participant: rootUser.tokens[rootUser.tokens.length-1].token

        }


        req.token = token
        req.rootUser = participantdata
        req.UserId = rootUser._id
        next();
    } catch (error) {
        res.status(403).send("You are not login");
        return;
    }

}
module.exports = QuizAuthdataMiddleware