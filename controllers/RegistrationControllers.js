const database = require('../model/RegistrationDataSchema');
const hashpasswordfunction = require('../helper/hash');
const RegistrationControllers = async (req, res) => {
    try {
        const { userid, password, conformpassword, teamName, member1, member2, member3, team_leader } = req.body;

        if (teamName && userid && password && conformpassword && member1 && member2 && member3 && team_leader) {
            const useridfind = await database.findOne({ userid });
            const member1find = await database.findOne({ member1 });
            const member2find = await database.findOne({ member2 });
            const member3find = await database.findOne({ member3 });
            const teamleader = await database.findOne({ team_leader });
            if (useridfind) {
                res.status(400).send('Userid Already exist ');
            } else {
                if (member1find) {
                    res.status(408).send('Member 1 already exist');

                } else {
                    if (member2find) {
                        res.status(402).send('Member 2 already exist');

                    } else {
                        if (member3find) {

                            res.status(403).send('Member 3 already exist');
                        } else {
                            if (teamleader) {
                                res.status(404).send('Team leader already exist');

                            } else {
                                if (password === conformpassword) {
                                    const hashpassword = await hashpasswordfunction(password);
                                    const datainsert = new database({ name: teamName, userid, password: hashpassword, member1, member2, member3, team_leader });
                                    await datainsert.save();

                                    res.status(200).send('Registration sucessfully');

                                } else {
                                    res.status(401).send('Password and conform password is wrong');
                                }

                            }
                        }
                    }
                }

            }

        }
        else {
            res.status(500).send('All field require');
        }
    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(403).send("Some technical issue");
    }
}
module.exports = RegistrationControllers;