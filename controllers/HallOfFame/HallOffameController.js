const database = require('../../model/HallOfFameSchema');
const HallOffameController = async (req, res) => {
    try {
        const yearQuery = req.query.year;
        if (yearQuery !== undefined) {
            if (yearQuery === "all") {
                let filterData = [];
                const findData = await database.find();
                if (findData) {
                    findData.forEach((data) => {
                        const element = {
                            id: data.id,
                            clubName: data.clubName,
                            clubYear: data.clubYear,
                            clubEventName: data.clubEventName
                        }
                        filterData.push(element);
                    })
                }
                res.status(200).send({ data:filterData, secure: true, responseStatus: 200 });
                return
                

            } else {

            }

        } else {
            res.status(422).send({ error: "Category is required", secure: true, responseStatus: 422 });
            return;
        }


    } catch (error) {
        res.status(500).send({ error: "Some technical issue", secure: true, responseStatus: 500 });
        return;
    }
}
module.exports = HallOffameController