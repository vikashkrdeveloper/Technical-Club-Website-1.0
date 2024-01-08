const database = require('../model/AdminLoginSchema');
const admindatacontroler = async (req, res) => {
    try {
        const finddata = await database.find();
        let datas = [];
        if (finddata) {
            finddata.forEach((element, index) => {
                datas.push({ _id: element._id, adminname: element.name, email: element.email, phone: element.phone, adminid: element.adminid, token: element.tokens })
            })
            res.status(200).send(datas);
            return;
        }
        res.status(200).send(datas);

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send('Some technical issue');
    }
}
module.exports = admindatacontroler;