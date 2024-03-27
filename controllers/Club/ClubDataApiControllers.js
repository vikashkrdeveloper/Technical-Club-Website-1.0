const database = require('../../model/Club/ClubCreateSchema');
const ClubDataApiControllers = async (req, res) => {
    try {
        const data = await database.find().select('-__v').select('-updatedAt').select('-createdAt');
        res.status(200).send(data);
        return;

    } catch (error) {
        console.log('Some technical issue');
    }

}
module.exports = ClubDataApiControllers;