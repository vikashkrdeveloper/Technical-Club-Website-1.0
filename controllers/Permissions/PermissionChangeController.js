const database = require('../../model/AllowAndDenySchema');
const PermissionChangeController = async (req, res) => {
    try {
        const { contest_Permission, coding_contest_login_permission, quiz_contest_login_permission, test_contest_login_permission, live_stream_permission, bgmi_registration_permission, coding_registration_permission, hackathon_registration_permission, logo_registration_permission, quiz_registration_permission, test_registration_permission } = req.body;
        if (contest_Permission && coding_contest_login_permission && quiz_contest_login_permission && test_contest_login_permission && live_stream_permission && bgmi_registration_permission && coding_registration_permission && hackathon_registration_permission && logo_registration_permission && quiz_registration_permission && test_registration_permission) {
            const insertdata = await database({ contest_Permission, coding_contest_login_permission, quiz_contest_login_permission, test_contest_login_permission, live_stream_permission, bgmi_registration_permission, coding_registration_permission, hackathon_registration_permission, logo_registration_permission, quiz_registration_permission, test_registration_permission });
            await insertdata.save();
            res.status(200).send("Permission Created");
            return;

        } else {
            res.status(400).send({ error: "All field require", secure: true, status: 400 });
            return;
        }
    } catch (error) {
        res.status(500).send('Some technical issue');
        return;
    }
}
module.exports = PermissionChangeController;