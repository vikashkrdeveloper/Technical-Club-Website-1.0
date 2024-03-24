const database = require('../../model/AllowAndDenySchema');
const permissionupdates = async (req, res) => {
    try {
        const { contest_Permission, coding_contest_login_permission, quiz_contest_login_permission, test_contest_login_permission, live_stream_permission, bgmi_registration_permission, coding_registration_permission, hackathon_registration_permission, logo_registration_permission, quiz_registration_permission, test_registration_permission } = req.body;
        const id = req.params.id;
        if (id) {
            await database.updateOne({ _id: id }, { contest_Permission, coding_contest_login_permission, quiz_contest_login_permission, test_contest_login_permission, live_stream_permission, bgmi_registration_permission, coding_registration_permission, hackathon_registration_permission, logo_registration_permission, quiz_registration_permission, test_registration_permission })
            res.status(202).json({ message: "sucessfully update", status: 202 })
        } else {
            res.status(400).send("All permision require")
        }

    } catch (error) {
        res.status(500).send("Internal server Error")

    }
}
module.exports = permissionupdates