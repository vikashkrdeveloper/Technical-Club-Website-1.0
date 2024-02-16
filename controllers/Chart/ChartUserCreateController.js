const database = require('../../model/ChartApplicationUserDataSchema');
const hashpasswordfun = require('../../helper/hash');
const ChartUserCreateController = async (req, res) => {
    try {
        const { name, username, password } = req.body;
        if (name && username && password) {
            const usernamefind = await database.findOne({ username });
            if (usernamefind) {
                res.status(402).send({ error: "User name Already exist", secure: true, status: 402 });

            } else {
                const hashpassword = await hashpasswordfun(password);
                const profileImageBoy = `https://avatar.iran.liara.run/public/boy?username=${username}`;
                const insertdata = await database({ name, username, screen_name: name, profileImage: profileImageBoy, password: hashpassword })
                await insertdata.save();
                res.status(200).send({ sucess: "Sucessfully Register", secure: true, status: 200 });

            }


        } else {
            res.status(400).send({ error: "All field require", secure: true, status: 400 });

        }

    } catch (error) {
        res.status(500).send({ error: "Some technical issue" + error, secure: true, status: 500 });
    }
}
module.exports = ChartUserCreateController