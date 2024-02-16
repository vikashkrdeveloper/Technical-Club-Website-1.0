const database = require('../../model/EventGallerySchema');
const GalleryDataApiControllers = async (req, res) => {
    try {
        const currentPage = req.query.currentpage;
        if (currentPage !== undefined) {
            const Perpagelimit = 12;
            const startIndex = (currentPage - 1) * Perpagelimit;
            const endIndex = startIndex + Perpagelimit;
            const data = await database.find({ id: { $gte: startIndex+1, $lte: endIndex } });
            let datafilter = [];
            if (data) {
                const length = await database.countDocuments();
                data.forEach((element) => {
                    datafilter.push({ _id: element._id, Image: element.image, datatotalDataLength: length })
                })
            }
            res.status(200).send(datafilter);
            return;
        }
        res.status(400).send({ error: "please give a vaild crediantial", status: 400 });
        return;

    } catch (error) {
        console.log("Some technical issue" + error);
        res.status(500).send("Some technical issue");
        return;
    }
}
module.exports = GalleryDataApiControllers;