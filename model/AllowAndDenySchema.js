const database = require('../db/connect');
const AllowAndDenySchema = new database.Schema({
    contestPermission: {
        type: Number,
        default: 0,
    },
    bgmiformpermission: {
        type: Number,
        default: 0,
    },
    codingformpermission: {
        type: Number,
        default: 0,
    },
    hackathonformpermission: {
        type: Number,
        default: 0,
    },
    logoformpermission: {
        type: Number,
        default: 0
    },
    quizformpermission: {
        type: Number,
        default: 0
    },
    testpermission: {
        type: Number,
        default: 0
    },
}, { timestamps: true })
const AllowAndDenymodel = new database.model("Permissions", AllowAndDenySchema)
module.exports = AllowAndDenymodel;