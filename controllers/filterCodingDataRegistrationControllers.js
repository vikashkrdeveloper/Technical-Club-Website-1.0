const database = require('../model/CodingRegistrationCreateSchema')
const filterCodingDataRegistrationControllers = async (req, res) => {
    try {
        const searchquery = req.query.search;
        const data = await database.findOne({ emailid: searchquery });
        if (data) {
            res.status(200).send(data)
            return;
        } else {
            res.status(401).send('Data Not Found');
            return;
        }

    } catch (error) {
        res.status(500).send("Some technical issue");
        return;
    }

}
module.exports = filterCodingDataRegistrationControllers;