const database = require('../../model/AdminLoginSchema');
const conformpasswordfun = require('../../helper/comparepassword');
const mailSend = require('../../Mailmessage/mailSend');
let otpGenrate = null;
const AdminLoginControllers = async (req, res) => {
    const otpgenrate = Math.floor(100000 + Math.random() * 900000)
    otpGenrate = otpgenrate;
    const message = `Your OTP for secure login is <b style="font-size: 18px;">${otpgenrate}</b>. Please enter this code within the
    next 5 minutes. Keep your account safe and do not share this code with anyone. If you did not request
    this, please ignore this message. Thank you for using our services`
    try {
        const { adminid, password } = req.body;
        if (adminid && password) {
            const findadminid = await database.findOne({ adminid });
            if (findadminid) {
                const hashpassword = await findadminid.password;
                const passwordverify = await conformpasswordfun(password, hashpassword);
                if (passwordverify) {
                    await mailSend(findadminid.email, message, 'OTP for Verification');
                    res.status(200).send("Otp Send Sucessfully");
                } else {
                    res.status(400).send('Invalid login details');
                }
            } else {
                res.status(400).send('Invalid login details');
            }


        } else {
            res.status(500).send('All field require');
        }

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send('Some technical issue' + error);
    }
}
const AdminOtpVerification = async (req, res) => {
    const message = `Dear Admin,

    Greetings! We're thrilled to inform you that a new user has joined our platform. As they complete their login process, we've sent them a warm welcome message to kickstart their journey. Should you have any queries or require assistance, please don't hesitate to reach out.
    
    `
    try {
        const { otp } = req.body;
        if (otp) {
            const findadminid = await database.findOne();
            if (Number(otp) === Number(otpGenrate)) {
                const token = await findadminid.admintokengenrate();
                res.cookie("jwttokens", token);
                mailSend(findadminid.email, message, ' Welcome to Our Platform!');
                res.status(200).send("Otp Send Sucessfully");
            } else {
                res.status(401).send('Invalid Otp details');

            }
        } else {
            res.status(400).send('All field require');
        }

    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(500).send('Some technical issue');
    }
}
module.exports = { AdminLoginControllers, AdminOtpVerification };