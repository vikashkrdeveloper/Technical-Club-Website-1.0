const database = require('../model/RegistrationDataSchema');
const totalteam_member = async (req, res) => {
    try {
        const finddata = await database.find();
        const datas = []
        finddata.map((element) => {
            datas.push({ name: element.name, userid: element.userid, team_leader: element.team_leader, member1: element.member1, member2: element.member2, member3: element.member3 })

        })
        res.status(200).send(datas);

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue" + error)
    }
}
module.exports = totalteam_member