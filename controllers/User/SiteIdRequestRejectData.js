
const UserIdRequestModel = require("../../model/Admin/UserIdRequestSchema");

const SiteIdRequestReject = async (req, res) => {
    try {
        const SiteIdRequestRejectDataId = req.params.id;
        if (SiteIdRequestRejectDataId) {
            const SiteIdRequestRejectData = await UserIdRequestModel.findOneAndDelete({ _id: SiteIdRequestRejectDataId });
            if (SiteIdRequestRejectData) {
                res.status(200).json({ message: "Data Delete Sucessfully", status: 200 });
                return;
            } else {
                res.status(201).json({ message: "Data already  delete", status: 201 });
                return;
            }
        }

    } catch (error) {
        res.status(500).json({ message: "Some technical issue", error: "" + error, status: 500 });
        return;
    }
}

module.exports = SiteIdRequestReject