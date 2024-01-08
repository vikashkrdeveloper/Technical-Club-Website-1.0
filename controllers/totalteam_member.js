const database = require('../model/RegistrationDataSchema');
const totalteam_member = async (req, res) => {
    try {
        const finddata = await database.find();
        const datas = []
        finddata.map((element) => {
            datas.push({ _id: element._id, teamname: element.name, participant: element.userid, email: element.emailid, registration: element.registrationno, member1: element.member1, member2: element.member2, member3: element.member3, teamleadername: element.team_leader })

        })
        res.status(200).send(datas);
        return;

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue" + error)
        return;
    }
}
module.exports = totalteam_member