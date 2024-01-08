const database = require('../model/AdminLoginSchema');
const conformpasswordfun = require('../helper/comparepassword');
const AdminLoginControllers = async (req, res) => {
    try {
        const { adminid, password } = req.body;
        if (adminid && password) {
            const findadminid = await database.findOne({ adminid });
            if (findadminid) {

                const hashpassword = await findadminid.password;
                const passwordverify = await conformpasswordfun(password, hashpassword);
                if (passwordverify) {
                    const token = await findadminid.admintokengenrate();
                    res.cookie("jwttokens", token);
                    res.status(200).send("Login Sucessfully");

                } else {
                    res.status(400).send('Invalid login details');

                }
            } else {
                res.status(400).send('Invalid login details');
            }


        } else {
            res.status(500).send('All field require');
        }

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send('Some technical issue'+error);
    }
}
module.exports = AdminLoginControllers;