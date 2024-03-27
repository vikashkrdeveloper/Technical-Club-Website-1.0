const UserIdRequestModel = require("../../model/Admin/UserIdRequestSchema");

const UserIdRequestControllers = async (req, res) => {
    try {
        const college_Id_Prof = req.file;

        const { full_Name, email_Id, phone_Number, departement_Name, admission_Year, current_Year, Registration_Number, college_Name, Date_Of_Birth } = req.body;
        if (college_Id_Prof && full_Name && email_Id && phone_Number && departement_Name && admission_Year && current_Year && Registration_Number && college_Name && Date_Of_Birth) {
            const userEmailVerifyData = await UserIdRequestModel.findOne({ email_Id });
            if (!userEmailVerifyData) {
                const userPhoneVerifyData = await UserIdRequestModel.findOne({ phone_Number });
                if (!userPhoneVerifyData) {
                    const userRegistration_NumberVerifyData = await UserIdRequestModel.findOne({ Registration_Number });
                    if (!userRegistration_NumberVerifyData) {
                        const userVerifyData = await UserIdRequestModel.findOne({ full_Name, email_Id, phone_Number, departement_Name, admission_Year, current_Year });
                        if (!userVerifyData) {
                            const InsertData = await UserIdRequestModel({ full_Name, email_Id, phone_Number, departement_Name, admission_Year, current_Year, Registration_Number, college_Name, Date_Of_Birth, college_Id_Prof: { data: college_Id_Prof.buffer } })
                            await InsertData.save();
                            res.status(200).json({ message: "Request send Sucessfully Please wait for 24hours", status: 200 });

                        } else {
                            res.status(405).json({ message: "Your respond already send please wait few hours", status: 403 });
                            return;
                        }

                    } else {
                        res.status(403).json({ message: "Your Registration_Number respond already send please wait few hours", status: 403 });
                        return;
                    }


                } else {
                    res.status(402).json({ message: "Your phone respond already send please wait few hours", status: 402 });
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

module.exports = UserIdRequestControllers;