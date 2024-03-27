const database = require('../../model/Users/ParticipantSchema');
const conformpasswordfun = require('../../helper/comparepassword');
const mailSend = require('../../Mailmessage/mailSend');
let otpGenrate = null;
const StudentLoginControllers = async (req, res) => {
    const otpgenrate = Math.floor(100000 + Math.random() * 900000)
    otpGenrate = otpgenrate;
    const message = `Your OTP for secure login is <b style="font-size: 18px;">${otpgenrate}</b>. Please enter this code within the
    next 5 minutes. Keep your account safe and do not share this code with anyone. If you did not request
    this, please ignore this message. Thank you for using our services`
    try {
        const { techk_Shitiz_Id, password } = req.body;
        if (techk_Shitiz_Id && password) {
            const findtechk_Shitiz_Id = await database.findOne({ techk_Shitiz_Id });
            if (findtechk_Shitiz_Id) {
                const hashpassword = await findtechk_Shitiz_Id.participant_Password;
                const passwordverify = await conformpasswordfun(password, hashpassword);
                if (passwordverify) {
                    await mailSend(findtechk_Shitiz_Id.participant_Email, message, 'OTP for Verification');
                    res.status(200).json({ message: "Otp Send Sucessfully", status: 200 });
                    return;
                } else {
                    res.status(401).json({ message: 'Invalid login details', status: 401 });
                    return;
                }
            } else {
                res.status(401).json({ message: 'Invalid login details', status: 401 });
                return;
            }


        } else {
            res.status(400).json({ message: 'All field require', status: 400 });
            return;
        }

    } catch (error) {

        res.status(500).json({ message: 'Some technical issue', error: "" + error, status: 500 });
        return;
    }
}
const StudentOtpVerification = async (req, res) => {
    const message = `Dear Admin,
    Greetings! We're thrilled to inform you that a new user has joined our platform. As they complete their login process, we've sent them a warm welcome message to kickstart their journey. Should you have any queries or require assistance, please don't hesitate to reach out.
    `
    try {
        const { otp } = req.body;
        if (otp) {
            const findtechk_Shitiz_Id = await database.findOne();
            if (Number(otp) === Number(otpGenrate)) {
                const token = await findtechk_Shitiz_Id.participanttokengenrate();
                res.cookie("Participant_Token", token);
                mailSend(findtechk_Shitiz_Id.participant_Email, message, ' Welcome to Our Platform!');
                res.status(200).json({ message: "Otp Send Sucessfully", status: 200 });
                return;
            } else {
                res.status(401).json({ message: 'Invalid Otp details', status: 401 });
                return;

            }
        } else {
            res.status(400).json({ message: 'All field require', status: 400 });
            return;
        }

    } catch (error) {
        res.status(500).json({ message: 'Some technical issue', error: "" + error, status: 500 });
        return;
    }
}
module.exports = { StudentLoginControllers, StudentOtpVerification };