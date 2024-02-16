const database = require('../../model/EventGallerySchema');
const GalleryImagesControllers = async (req, res) => {
    try {
        const Imagedata = req.file.buffer;
        const insertdata = await database({ image: { data: Imagedata } })
        insertdata.save();
        res.status(200).send("Added");
        return;

    } catch (error) {
        console.log('Some technical issue'+error);
        res.status(500).send("Some technical issue");
        return;
    }

}
module.exports = GalleryImagesControllers;