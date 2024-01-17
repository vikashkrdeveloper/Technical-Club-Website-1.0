const database = require('../model/AllowAndDenySchema');
const PermissionChangeController = async (req, res) => {
    try {
        const { formpermission, contestPermission } = req.body;
        const insertdata = await database({ formpermission, contestPermission });
        await insertdata.save();
        res.status(200).send("Permission Updates Done");
        return;
    } catch (error) {
        res.status(500).send('Some technical issue');
        return;
    }
}
module.exports = PermissionChangeController;