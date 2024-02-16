const ChartUserAuthDataController = async (req, res) => {
    try {
        res.status(200).send({sucess:req.ChatUser,secure:true,status:200});

    } catch (error) {
        res.status(401).send({ error: "Authorization Require", secure: true, status: 401 });

    }
}

module.exports = ChartUserAuthDataController