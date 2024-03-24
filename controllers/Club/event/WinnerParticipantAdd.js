const AllEventWinnerModel = require("../../../model/event/AllEventWinnerSchema");

const WinnerParticipantAdd = async (req, res) => {
    try {
        const winner_Participant_Avtar = req.file;
        const { winner_Participant_Name, winner_Participant_Branch, winner_Participant_Admission_Year, winner_Participant_Email_Id, winner_Participant_Mobile_Number, winner_Participant_Linkedin_Profile_Id, winner_Participant_Twitter_Profile_Id, winner_Participant_Event_Name, winner_Participant_Event_Year, winner_Participant_Event_Id } = req.body;
        if (winner_Participant_Name && winner_Participant_Branch && winner_Participant_Admission_Year && winner_Participant_Email_Id && winner_Participant_Mobile_Number && winner_Participant_Linkedin_Profile_Id && winner_Participant_Twitter_Profile_Id && winner_Participant_Event_Name && winner_Participant_Event_Year && winner_Participant_Event_Id && winner_Participant_Avtar) {
            const winner_Participant_Email_Id_Verify = await AllEventWinnerModel.findOne({ winner_Participant_Email_Id, winner_Participant_Admission_Year, winner_Participant_Event_Year });
            if (!winner_Participant_Email_Id_Verify) {
                const winner_Participant_Mobile_Number_Verify = await AllEventWinnerModel.findOne({ winner_Participant_Mobile_Number, winner_Participant_Admission_Year, winner_Participant_Event_Year });
                if (!winner_Participant_Mobile_Number_Verify) {
                    const winner_Participant_Verify = await AllEventWinnerModel.findOne({ winner_Participant_Name, winner_Participant_Admission_Year, winner_Participant_Event_Year, winner_Participant_Event_Name });
                    if (!winner_Participant_Verify) {
                        const InsertData = await AllEventWinnerModel({ winner_Participant_Name, winner_Participant_Branch, winner_Participant_Admission_Year, winner_Participant_Email_Id, winner_Participant_Mobile_Number, winner_Participant_Linkedin_Profile_Id, winner_Participant_Twitter_Profile_Id, winner_Participant_Event_Name, winner_Participant_Event_Year, winner_Participant_Event_Id, winner_Participant_Avtar: { data: winner_Participant_Avtar.buffer } })
                        await InsertData.save();
                        res.status(200).json({ message: "Winner Participant Added Sucessfully", data: InsertData, status: 200 });
                        return;

                    } else {
                        res.status(403).json({ message: "Winner Participant  already exist", status: 403 });
                        return;
                    }


                } else {
                    res.status(402).json({ message: "Winner Participant Mobile Number already exist", status: 402 });
                    return;

                }

            } else {
                res.status(401).json({ message: "Winner Participant Email id already exist", status: 401 });
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
module.exports = WinnerParticipantAdd;