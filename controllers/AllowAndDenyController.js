const database = require('../model/AllowAndDenySchema');
const AllowAndDenyController = async (req, res) => {
    try {
        const data = await database.findOne();
        res.status(200).send({_id:data._id, contestPermission: data.contestPermission, bgmiformpermission: data.bgmiformpermission, codingformpermission: data.codingformpermission, hackathonformpermission: data.hackathonformpermission, logoformpermission: data.logoformpermission, quizformpermission: data.quizformpermission, testpermission: data.testpermission });
    } catch (error) {
        res.status(500).send('Some technical issue');
    }
}
module.exports = AllowAndDenyController;