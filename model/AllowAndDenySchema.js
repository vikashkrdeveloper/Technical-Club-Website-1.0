const database = require('../db/connect');
const AllowAndDenySchema = new database.Schema({
    contest_Permission: {
        type: Boolean,
        default: false,
    },
    live_stream_permission: {
        type: Boolean,
        default: false,

    },
    coding_contest_login_permission: {
        type: Boolean,
        default: false,

    },
    quiz_contest_login_permission: {
        type: Boolean,
        default: false,

    },
    test_contest_login_permission: {
        type: Boolean,
        default: false,

    },
    live_stream_permission: {
        type: Boolean,
        default: false,

    },
    bgmi_registration_permission: {
        type: Boolean,
        default: false,
    },
    coding_registration_permission: {
        type: Boolean,
        default: false,
    },
    hackathon_registration_permission: {
        type: Boolean,
        default: false,
    },
    logo_registration_permission: {
        type: Boolean,
        default: false,
    },
    quiz_registration_permission: {
        type: Boolean,
        default: false,
    },
    test_registration_permission: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })
const AllowAndDenymodel = new database.model("Permissions", AllowAndDenySchema)
module.exports = AllowAndDenymodel;