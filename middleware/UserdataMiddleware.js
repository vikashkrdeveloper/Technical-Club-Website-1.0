const database = require('../model/RegistrationDataSchema');
const jwt = require('jsonwebtoken');
const UserdataMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await database.findOne({ _id: verify._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error("User not found");
        }
        const datashort = {
            name: rootUser.name,
            userid: rootUser.userid,
            registrationNumber:rootUser.registrationno,
            emailid:rootUser.emailid,
            team_leader:rootUser.team_leader,
            member1:rootUser.member1,
            member2:rootUser.member2,
            member3:rootUser.member3
        }
        req.token = token;
        req.rootUser =datashort;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        res.status(402).send('User not login');
    }
}
module.exports = UserdataMiddleware;