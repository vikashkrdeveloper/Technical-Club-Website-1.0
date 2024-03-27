const hashFunction = require("../../helper/hash");
const ParticipantSchema = require("../../model/Users/ParticipantSchema");
const VerifyRequest = require('../../model/Admin/UserIdRequestSchema');
const mailSend = require('../../Mailmessage/mailSend');

const UserIdGeneratedController = async (req, res) => {
    try {

        const UserId = req.params.id;
        const { full_Name, email_Id, phone_Number, departement_Name, admission_Year, current_Year, Registration_Number, college_Name, Date_Of_Birth } = req.body;
        if (UserId && full_Name && email_Id && phone_Number && departement_Name && admission_Year && current_Year) {
            const userEmailVerifyData = await ParticipantSchema.findOne({ email_Id });
            if (!userEmailVerifyData) {
                const userPhoneVerifyData = await ParticipantSchema.findOne({ phone_Number });
                if (!userPhoneVerifyData) {
                    const userVerifyData = await ParticipantSchema.findOne({ full_Name, email_Id, phone_Number, departement_Name, admission_Year, current_Year });
                    if (!userVerifyData) {
                        const CountUser = await ParticipantSchema.countDocuments();
                        const date = new Date();
                        let registerCount = CountUser + 1;
                        const Verify_User_Id = "TS" + date.getUTCFullYear() + "CS" + "GECS" + registerCount;
                        const participant_Password_Find = full_Name.substring(0, 4) + phone_Number;
                        const participant_Password_Hash = await hashFunction(participant_Password_Find);
                        const InsertData = await ParticipantSchema({ participant_Password: participant_Password_Hash, participant_Phone: phone_Number, participant_Year_of_Study: current_Year, participant_Admission_Year: admission_Year, participant_Registration_Number: Registration_Number, participant_Branch: departement_Name, participant_Email: email_Id, participant_Name: full_Name, participant_College_Name: college_Name, participant_Date_of_Birth: Date_Of_Birth, participant_Avtar: `https://avatar.iran.liara.run/public/boy?username=${full_Name}`, techk_Shitiz_Id: Verify_User_Id })
                        await VerifyRequest.findOneAndUpdate({ _id: UserId }, { verify: true, verify_Id: Verify_User_Id });
                        await InsertData.save();
                        const message = `<b style="font-size: 18px;">Techk Shitiz Login Id : <b>${Verify_User_Id}</b></b><br><b style="font-size: 18px;">Techk Shitiz Login Passwod : <b>${participant_Password_Find}</b></b><br>.Keep your account safe and do not share this code with anyone. If you did not request
    this, please ignore this message. Thank you for using our services`
                        await mailSend(email_Id, message, ' Techk Shitiz Login Id And Password');
                        res.status(200).json({ message: " User Id Genrated Sucessfully ", status: 200 });
                        return;
                    } else {
                        res.status(403).json({ message: "Your Id already Genrated", status: 403 });
                        return;
                    }


                } else {
                    res.status(402).json({ message: "User phone number Already exist", status: 402 });
                    return;
                }


            } else {
                res.status(401).json({ message: "Your email respond already send please wait few hours", status: 401 });
                return;
            }
        } else {
            res.status(400).json({ message: "All field require", status: 400 });
            return;
        }

    } catch (error) {
        res.status(500).json({ message: "Some technical issue", error: "" + error, status: 500 });
        return;
    }
}

module.exports = UserIdGeneratedController;