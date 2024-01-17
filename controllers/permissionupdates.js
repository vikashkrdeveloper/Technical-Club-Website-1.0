const database = require('../model/AllowAndDenySchema');
const permissionupdates = async (req, res) => {
    try {
        const { contestPermission, bgmiformpermission, codingformpermission, hackathonformpermission, logoformpermission, quizformpermission, testpermission } = req.body;
        const ids = req.params.id;
        if (contestPermission && bgmiformpermission && codingformpermission && hackathonformpermission && logoformpermission && quizformpermission && testpermission) {

            await database.updateOne({ _id: ids }, { contestPermission, bgmiformpermission, codingformpermission, hackathonformpermission, logoformpermission, quizformpermission, testpermission })
        } else {
            res.status(400).send("All permision require")
        }

    } catch (error) {
        res.status(500).send("Internal server Error")

    }
}
module.exports = permissionupdates