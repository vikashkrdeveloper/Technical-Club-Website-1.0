const mailSend = require("../Mailmessage/mailSend");

const HomeControllers = (req, res) => {
    mailSend();
    res.status(200).send("Home Page");
    return;
}
module.exports = HomeControllers