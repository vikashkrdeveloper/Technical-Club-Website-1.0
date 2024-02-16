const database = require('../../model/AllowAndDenySchema');
const AllowAndDenyController = async (req, res) => {
    try {
        const data = await database.findOne();
        res.status(200).send({ contest_Permission: data.contest_Permission, coding_contest_login_permission: data.coding_contest_login_permission, quiz_contest_login_permission: data.quiz_contest_login_permission, test_contest_login_permission: data.test_contest_login_permission, live_stream_permission: data.live_stream_permission, bgmi_registration_permission: data.bgmi_registration_permission, coding_registration_permission: data.coding_registration_permission, hackathon_registration_permission: data.hackathon_registration_permission, logo_registration_permission: data.logo_registration_permission, quiz_registration_permission: data.quiz_registration_permission, test_registration_permission: data.test_registration_permission, message: "Data Send Sucessfully", status: 200 });
    } catch (error) {
        res.status(500).send('Some technical issue');
    }
}
module.exports = AllowAndDenyController;