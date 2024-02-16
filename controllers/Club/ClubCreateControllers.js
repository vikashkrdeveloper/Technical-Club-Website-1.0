const database = require('../../model/ClubCreateSchema');

const ClubCreateControllers = async (req, res) => {
    try {
        const { clubname, clubdescription, clubcreateddate } = req.body;
        if (clubcreateddate && clubname && clubdescription) {
            const fetchClubname = await database.findOne({ clubname });
            if (fetchClubname) {
                res.status(401).send("Club Already exist");
            } else {
                const photoBuffer = req.file.buffer;
                const insertdata = await database({ clubname, clubcreateddate, clubdescription, image: { data: photoBuffer } })
                await insertdata.save();
                res.status(200).send('Image saved successfully.');
            }
        } else {
            res.status(400).send("All field require");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Some technical issue");
    }
}

module.exports = ClubCreateControllers;
