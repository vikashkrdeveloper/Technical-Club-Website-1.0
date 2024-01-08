const database = require('../model/RegistrationDataSchema');
const hashpasswordfunction = require('../helper/hash');
const RegistrationControllers = async (req, res) => {
    try {
        const { userid, password, conformpassword, teamname, registrationno, emailid, member1, member2, member3, team_leader } = req.body;



        if (userid && password && conformpassword && teamname && registrationno && emailid&& member1 && member2 && member3 && team_leader) {
             
            const useridfind = await database.findOne({ userid });
            const emailidfind = await database.findOne({ emailid });
            const team_leaderfind = await database.findOne({ team_leader });
            const member1find = await database.findOne({ member1 });
            const member2find = await database.findOne({ member2 });
            const member3find = await database.findOne({ member3 });
            const registrationnofindfind = await database.findOne({ registrationno });
            if (useridfind) {
                res.status(400).send('Userid Already exist ');
                return;
            } else {
                if (emailidfind) {
                    res.status(403).send('Email already exist');
                    return;

                } else {
                    if (registrationnofindfind) {
                        res.status(402).send('Registration Number already exist');
                        return;

                    } else {
                        if (team_leaderfind) {
                            res.status(401).send('Team leader already exist');

                        } else {
                            if (member1find) {
                                res.status(401).send('Member 1 already exist');

                            } else {
                                if (member2find) {
                                    res.status(401).send('member 2 already exist');

                                } else {
                                    if (member3find) {
                                        res.status(401).send('Member 3 already exist');

                                    } else {

                                        if (password === conformpassword) {
                                            const hashpassword = await hashpasswordfunction(password);
                                            const datainsert = new database({ userid, password: hashpassword, name:teamname, registrationno, emailid,member1, member2, member3, team_leader });
                                            await datainsert.save();

                                            res.status(200).send('Registration sucessfully');
                                            return;

                                        } else {

                                            res.status(401).send('Password and conform password is wrong');
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
        else {
            res.status(500).send('All field require');
            return;
        }
    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(403).send("Some technical issue");
        return;
    }
}
module.exports = RegistrationControllers;