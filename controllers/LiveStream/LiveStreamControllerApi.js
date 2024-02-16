const database = require('../../model/LiveStreamSchema');
const LiveStreamControllerApi = async (req, res) => {
    try {
        const Insertdata = await database.findOne();
        res.status(200).send(Insertdata);
    } catch (error) {
        console.log('Some technical issue'+error);
    }
}
module.exports = LiveStreamControllerApi;