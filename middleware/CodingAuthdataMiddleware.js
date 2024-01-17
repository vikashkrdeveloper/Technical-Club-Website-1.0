const jwt = require('jsonwebtoken');
const database = require("../model/UserIdCodingRegistrationSchema");
const CodingAuthdataMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await database.findOne({ _id: verify._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error("User not found");
        }
        req.token = token
        req.rootUser = rootUser
        req.UserId = rootUser._id
        next();
    } catch (error) {
        res.status(403).send("You are not login");
        return;
    }

}
module.exports = CodingAuthdataMiddleware