const FacuiltyIncharge = require('../../model/Club/FacuiltyIncharge')

const ClubFacuiltyInchargeDataFetch = async (req, res) => {
    try {
        const clubId = req.params.clubId;
        if (clubId) {
            const facuiltyInchargefind = await FacuiltyIncharge.find({ clubId });
            res.status(200).json({ message: "Facuilty Incharge fecth sucessfully", data: facuiltyInchargefind, status: 200 });
            return;

        } else {
            res.status(400).json({ message: "Club Id most be provided", status: 400 });
            return;
        }

    } catch (error) {
        res.status(500).json({ message: "Some technical issue", status: 500 });
        return;
    }
}

module.exports = ClubFacuiltyInchargeDataFetch