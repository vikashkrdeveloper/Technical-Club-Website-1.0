const express = require('express');
const port = process.env.PORT || 5000;
require('dotenv').config();
const cookieParser = require('cookie-parser');
const route = require('../routes/Router');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const { app, server } = require('../socket/soket')
const socketIo = require('socket.io');
const MessageRoute = require('../routes/MessageRoute');
const UserRoute = require('../routes/UsersRoute');
const StudentProfileRoute = require('../routes/auth/Student/StudentProfile');
const StudentProfileDataMiddleware = require('../middleware/auth/StudentProfileDataMiddleware');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use('/api/v1/student/profile/', StudentProfileDataMiddleware, StudentProfileRoute);
app.use('/api/messages', MessageRoute)
app.use('/api/users', UserRoute)
app.use(route);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
})