const database = require('../../model/HallOfFameSchema');
const HallOfFameDataAddController = async (req, res) => {
    try {
        const { clubName, clubYear, clubEventName } = req.body;
        if (clubName && clubYear && clubEventName) {
            const insertdata = await database({clubName,clubYear,clubEventName:[{clubEventName:{winnerName:clubEventName[0].winnerName,winnerBranch:clubEventName[0].winnerBranch,winnerYear:clubEventName[0].winnerYear}}]});
            await insertdata.save();
            res.status(200).send({ sucess: clubEventName[0].technical.winnerName + " " + "Data sended", secure: true, responseStatus: 200 });
            return;
        } else {
            res.status(400).send({ error: "All field require", secure: true, responseStatus: 400 });
            return;

        }


    } catch (error) {
        res.status(500).send({ error: "Some technical issue" + error, secure: true, responseStatus: 500 });
        return;
    }
}

module.exports = HallOfFameDataAddController;