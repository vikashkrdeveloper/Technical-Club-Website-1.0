const FacuiltyIncharge = require('../../model/Club/FacuiltyIncharge')
const ClubFacuiltyInchargeAdd = async (req, res) => {
    try {
        const facuilty_incharge_avatar = req.file;
        const { facuilty_incharge_name, facuilty_incharge_role, facuilty_incharge_department, clubId, facuilty_incharge_mobile_Number, facuilty_incharge_email, facuilty_incharge_Twitter, facuilty_incharge_Linkedin } = req.body;
        if (facuilty_incharge_avatar && facuilty_incharge_name && facuilty_incharge_role && facuilty_incharge_department && clubId && facuilty_incharge_mobile_Number && facuilty_incharge_email && facuilty_incharge_Twitter && facuilty_incharge_Linkedin) {
            const facuilty_incharge_email_verification = await FacuiltyIncharge.findOne({ facuilty_incharge_email });
            if (!facuilty_incharge_email_verification) {
                const facuilty_incharge_mobile_Number_verification = await FacuiltyIncharge.findOne({ facuilty_incharge_mobile_Number });
                if (!facuilty_incharge_mobile_Number_verification) {
                    const InsertData = await FacuiltyIncharge({ facuilty_incharge_name, facuilty_incharge_role, facuilty_incharge_department, clubId, facuilty_incharge_mobile_Number, facuilty_incharge_email, facuilty_incharge_Twitter, facuilty_incharge_Linkedin, facuilty_incharge_avatar: { data: facuilty_incharge_avatar.buffer } })
                    await InsertData.save();
                    res.status(200).json({ message: "Facuilty Incharge Added Sucessfully", status: 200 });

                } else {
                    res.status(402).json({ message: "Mobile number already exist", status: 402 })

                }

            } else {

                res.status(401).json({ message: "Email id already exist", status: 401 })
            }

        } else {
            res.status(400).json({ message: "All field require", status: 400 })
        }


    } catch (error) {
        res.status(500).json({ message: "Some technical issue", error: "" + error, status: 500 });
    }
}
module.exports = ClubFacuiltyInchargeAdd;
