const database = require('../../model/ClubCreateSchema');
const ClubDataFindController = async (req, res) => {
    try {

        const data = await database.find();
        let filterdata = [];
        if (data) {
            data.forEach((element) => {
                const object = {
                    _id: element._id,
                    clubname: element.clubname,
                    clubdescription: element.clubdescription
                }
                filterdata.push(object)
            })
        }
        res.status(200).send(filterdata);
        return;
    } catch (error) {
        res.status(500).send("some technical issue" + error);
        return;
    }
}
module.exports = ClubDataFindController;