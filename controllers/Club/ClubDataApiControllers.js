const database = require('../../model/ClubCreateSchema');
const ClubDataApiControllers = async (req, res) => {
    try {
        const data = await database.find();
        const fetchdata = [];
        if (data) {
            data.forEach((element) => {
                fetchdata.push({ _id: element._id, clubName: element.clubname, clubDescription: element.clubdescription, clubImage: element.image })
            })
        }
        res.status(200).send(fetchdata);
        return;

    } catch (error) {
        console.log('Some technical issue');
    }

}
module.exports = ClubDataApiControllers;