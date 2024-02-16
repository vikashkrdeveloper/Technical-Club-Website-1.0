const database = require('../db/connect');
const AllowAndDenySchema = new database.Schema({
    contest_Permission: {
        type: Number,
        default: 0,
    },
    live_stream_permission: {
        type: Number,
        default: 0,

    },
    coding_contest_login_permission: {
        type: Number,
        default: 0,

    },
    quiz_contest_login_permission: {
        type: Number,
        default: 0,

    },
    test_contest_login_permission: {
        type: Number,
        default: 0,

    },
    live_stream_permission: {
        type: Number,
        default: 0,

    },
    bgmi_registration_permission: {
        type: Number,
        default: 0,
    },
    coding_registration_permission: {
        type: Number,
        default: 0,
    },
    hackathon_registration_permission: {
        type: Number,
        default: 0,
    },
    logo_registration_permission: {
        type: Number,
        default: 0
    },
    quiz_registration_permission: {
        type: Number,
        default: 0
    },
    test_registration_permission: {
        type: Number,
        default: 0
    },
}, { timestamps: true })
const AllowAndDenymodel = new database.model("Permissions", AllowAndDenySchema)
module.exports = AllowAndDenymodel;