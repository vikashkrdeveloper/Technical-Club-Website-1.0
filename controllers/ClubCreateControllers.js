const database = require('../model/ClubCreateSchema');

const ClubCreateControllers = async (req, res) => {
    try {
        const photoBuffer = req.file.buffer;
        const insertdata=await database({clubname:"hjgj",createddate:"fghfdhhghg",image:{data:photoBuffer}})
        await insertdata.save();
        res.status(200).send('Image saved successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send("Some technical issue");
    }
}

module.exports = ClubCreateControllers;
