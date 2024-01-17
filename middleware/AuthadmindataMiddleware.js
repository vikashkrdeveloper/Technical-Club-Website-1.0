const database = require('../model/AdminLoginSchema');
const jwt = require('jsonwebtoken');
const AuthadmindataMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await database.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('Data Not Found');
        }
        req.token = token;
        req.rootUser = { _id: rootUser._id, Adminname: rootUser.name, email: rootUser.email, phone: rootUser.phone, adminid: rootUser.adminid, token: rootUser.tokens };
        req.adminuser = rootUser._id;
        next();

    } catch (error) {
        res.status(403).send("Admin not login" );
    }

}
module.exports = AuthadmindataMiddleware;