const database=require('../model/ClubCreateSchema');
const ClubDataApiControllers = async (req, res) => {
    try {
        const data=await database.find();
        res.status(200).send(data);

    } catch (error) {
        console.log('Some technical issue');
    }

}
module.exports = ClubDataApiControllers;