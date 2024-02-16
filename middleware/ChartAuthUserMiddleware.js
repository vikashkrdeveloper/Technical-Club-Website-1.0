const database = require('../model/ChartApplicationUserDataSchema');
const jwt = require('jsonwebtoken');
const ChartAuthUserMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.chart_MessageUser;
        const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);
        const ChatUser = await database.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!ChatUser) {
            throw new Error("User Not found");
        }
        const dataElement = {
            _id: ChatUser._id,
            name: ChatUser.name,
            username: ChatUser.username,
            email: ChatUser.email,
            phone: ChatUser.phone,
            belongs_to_referral_country: ChatUser.belongs_to_referral_country,
            branch: ChatUser.branch,
            city: ChatUser.city,
            college: ChatUser.college,
            gender: ChatUser.gender,
            graduated: ChatUser.graduated,
            graduation_year: ChatUser.graduation_year,
            image: ChatUser.image,
            international_phone_number: ChatUser.international_phone_number,
            linkedin: ChatUser.linkedin,
            node_access_token: ChatUser.node_access_token,
            phone_country_code: ChatUser.phone_country_code,
            screen_name: ChatUser.screen_name,
            total_exp_in_months: ChatUser.total_exp_in_months,
            DateTime: ChatUser.DateTime
        }
        req.id = ChatUser.id;
        req.ChatUser = dataElement;
        req.token = token;
        next();


    } catch (error) {
        res.status(401).send({ error: "Authorization Require", secure: true, status: 401 });
    }
}
module.exports = ChartAuthUserMiddleware;