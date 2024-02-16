const database = require('../../model/AdminLoginSchema');
const hashpasswordfun = require('../../helper/hash');
const AdminRegistrationControllers = async (req, res) => {
    try {
        const { name, email, phone, password, conformpassword, adminid } = req.body;
        if (name && email && phone && password && adminid) {
            const findemail = await database.findOne({ email })
            const findadminid = await database.findOne({ adminid })
            const findphone = await database.findOne({ phone })
            if (findemail) {
                res.status(400).send("Email exist")
            } else {
                if (findadminid) {
                    res.status(401).send('Admin id exist');
                } else {
                    if (findphone) {
                        res.status(402).send('phone id exist');

                    } else {
                        if (password === conformpassword) {
                            const hashpassword = await hashpasswordfun(password);
                            const insertdata = new database({ name, email, phone, password: hashpassword, adminid })
                            await insertdata.save();
                            res.status(200).send({ message: "Done", secure: true, status: 200 });

                        } else {
                            res.status(403).send('Password and conform password not match');

                        }

                    }
                }
            }

        } else {
            res.status(400).send({ error: 'All field require', secure: true, status: 400 });
        }


    } catch (error) {
        res.status(500).send('Some technical issue');
        console.log('Some technical issue' + error);
    }
}
module.exports = AdminRegistrationControllers;