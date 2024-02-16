const database = require('../db/connect');

const ClubCreateSchema = new database.Schema({
    clubname: {
        type: String,
        lowercase: true,
        trim: true
    },
    createddate: {
        type: String,
        lowercase: true,
        trim: true
    },
    clubdescription:{
        type: String,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

const ClubCreateModel = database.model('ClubCreate', ClubCreateSchema);

module.exports = ClubCreateModel;