const AllEventWinnerModel = require("../../../model/event/AllEventWinnerSchema");

const CurrentYearWinnerParticipant = async (req, res) => {
    try {
        const winner_Participant_Event_Year = req.query.winner_Participant_Event_Year;
        if (Number(winner_Participant_Event_Year)) {
            const WinnerParticipantData = await AllEventWinnerModel.find({ winner_Participant_Event_Year: Number(winner_Participant_Event_Year) }).select("-__v").select('-updatedAt');
            res.status(200).json({ message: "Winner Participant Data fetch Sucessfully", data: WinnerParticipantData, status: 200 });
            return;
        } else {
            const WinnerParticipantData = await AllEventWinnerModel.find().select("-__v").select('-updatedAt');
            res.status(200).json({ message: "Winner Participant Data fetch Sucessfully", data: WinnerParticipantData, status: 200 });
            return;
        }

    } catch (error) {
        res.status(500).json({ message: "Some technical issue", error: "" + error, status: 500 });
        return;
    }
}
module.exports = CurrentYearWinnerParticipant