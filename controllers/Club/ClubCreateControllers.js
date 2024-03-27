const database = require('../../model/Club/ClubCreateSchema');

const ClubCreateControllers = async (req, res) => {
    try {
        const { clubname, clubdescription, clubcreateddate } = req.body;
        const club_image = req.file
        if (clubcreateddate && clubname && club_image && clubdescription) {
            const fetchClubname = await database.findOne({ clubname });

            if (fetchClubname) {
                res.status(401).json({ message: "Club Already exists", status: 401 });
            } else {
                const insertdata = new database({
                    clubname,
                    createddate: clubcreateddate,
                    clubdescription,
                    club_image: { data: club_image.buffer },

                });

                await insertdata.save();
                res.status(200).json({ message: 'Club added successfully.', status: 200 });
            }
        } else {
            res.status(400).json({ message: "All fields are required", status: 400 });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Some technical issue", error: "" + error, status: 500 });
    }
}

module.exports = ClubCreateControllers;
