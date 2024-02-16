const database = require('../../model/ChartApplicationUserDataSchema');
const comparepasswordfun = require('../../helper/comparepassword');
const ChartUserLoginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username && password) {
            const usernamefind = await database.findOne({ username });
            if (usernamefind) {
                const comparepassword = await comparepasswordfun(password, usernamefind.password);
                if (comparepassword) {
                    const token = await usernamefind.genratetokens();
                    res.cookie('chart_MessageUser', token)
                    res.status(200).send(usernamefind);
                } else {

                    res.status(401).send({ error: "Invalid Login details", secure: true, status: 401 });
                }
            } else {
                res.status(401).send({ error: "Invalid Login details", secure: true, status: 401 });

            }


        } else {
            res.status(400).send({ error: "All field require", secure: true, status: 400 });

        }

    } catch (error) {
        res.status(500).send({ error: "Some technical issue" + error, secure: true, status: 500 });
    }
}
module.exports = ChartUserLoginController