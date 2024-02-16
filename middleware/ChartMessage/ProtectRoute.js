const jwt = require('jsonwebtoken');
const User = require('../../model/ChartApplicationUserDataSchema');
const ProtectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.chart_MessageUser;
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }

        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).send({ auth: false, message: "Unauthorized - Invalid Token" });
        }
        const user = await User.findById(decoded._id, "-password").select('-password').select('-__v');
        if (!user) throw new Error("Invalid User");
        else {
            req.user = user;
            next();
        }

    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"  })

    }
}

module.exports = ProtectedRoute;