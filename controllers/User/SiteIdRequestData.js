const UserIdRequestModel = require("../../model/Admin/UserIdRequestSchema");

const SiteIdRequestData = async (req, res) => {
    try {
        const SiteIdRequestIdData = await UserIdRequestModel.find().select('-__v');
        if (SiteIdRequestIdData) {
            res.status(200).json({ message: "Data fetch Sucessfully", data: SiteIdRequestIdData, status: 200 });
            return;
        } else {
            res.status(200).json({ message: "Data fetch Sucessfully", data: [], status: 200 });
            return;
        }
    } catch (error) {
        res.status(500).json({ message: "Some technical issue", error: "" + error, status: 500 });
        return;
    }
}

module.exports = SiteIdRequestData