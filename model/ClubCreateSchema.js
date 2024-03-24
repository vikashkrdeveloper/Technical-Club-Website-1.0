const database = require('../db/connect');

const ClubCreateSchema = new database.Schema({
    clubname: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    club_Id: {
        type: String,
        uppercase: true,
        trim: true,
        default: null
    },
    createddate: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
    },
    clubdescription: {
        type: String,
        trim: true,
        default: null,
    },
    club_image: {
        data: Buffer,
        contentType: String
    }
    //
    // student_incharge: [
    //     {
    //         student_incharge_avatar: {
    //             data: Buffer,
    //             contentType: String
    //         },
    //         student_incharge_name: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         },
    //         student_incharge_role: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         },
    //         student_incharge_department: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         },
    //     }
    // ],
    // club_member: [
    //     {
    //         member_avatar: {
    //             data: Buffer,
    //             contentType: String
    //         },
    //         member_name: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         },
    //         member_role: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         },
    //         member_department: {
    //             type: String,
    //             lowercase: true,
    //             trim: true,
    //             default: null,
    //         }
    //     }
    // ]

}, { timestamps: true });
ClubCreateSchema.pre('save', async function (next) {
    try {
        const databaseClubFind = await ClubCreateModel.countDocuments();
        let getYear = new Date().getUTCFullYear();
        let clubId = `${getYear}GECS${databaseClubFind + 1}TS`;
        this.club_Id = clubId;
        next();
    } catch (error) {
        console.log("Some technical issue"+error);
    }
})
const ClubCreateModel = database.model('ClubCreate', ClubCreateSchema);

module.exports = ClubCreateModel;