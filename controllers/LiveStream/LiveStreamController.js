const database = require('../../model/LiveStreamSchema');
const LiveStreamController = async (req, res) => {
    try {
        const { name, videoid } = req.body;
        if (name && videoid) {
            const Insertdata = await database({ name, videoid });
            await Insertdata.save();
        } else {
            res.status(400).send("All fiel require");
        }

    } catch (error) {
        console.log('Some technical issue');
    }
}
module.exports = LiveStreamController;