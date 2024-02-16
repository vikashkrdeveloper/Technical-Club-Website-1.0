const database = require('../../model/ChartApplicationUserDataSchema');
const ChartUserCreateControllerApi = async (req, res) => {
    try {
        const id = req.query.id;
        const username = req.query.username;
        if (id !== undefined && username != undefined) {
            const data = await database.findOne({ id, username });
            if (data) {
                const dataElement = {
                    _id: data._id,
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    belongs_to_referral_country: data.belongs_to_referral_country,
                    branch: data.branch,
                    city: data.city,
                    college: data.college,
                    gender: data.gender,
                    graduated: data.graduated,
                    graduation_year: data.graduation_year,
                    image: data.image,
                    international_phone_number: data.international_phone_number,
                    linkedin: data.linkedin,
                    node_access_token: data.node_access_token,
                    phone_country_code: data.phone_country_code,
                    screen_name: data.screen_name,
                    total_exp_in_months: data.total_exp_in_months,
                    DateTime: data.DateTime
                }
                res.status(200).send({ sucess: dataElement, secure: true, status: 200 });

            } else {

                res.status(403).send({ error: "Please enter valid creadential", secure: true, status: 403 });
            }

        } else if (username != undefined) {
            const data = await database.findOne({username });
            if (data) {
                const dataElement = {
                    _id: data._id,
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    belongs_to_referral_country: data.belongs_to_referral_country,
                    branch: data.branch,
                    city: data.city,
                    college: data.college,
                    gender: data.gender,
                    graduated: data.graduated,
                    graduation_year: data.graduation_year,
                    image: data.image,
                    international_phone_number: data.international_phone_number,
                    linkedin: data.linkedin,
                    node_access_token: data.node_access_token,
                    phone_country_code: data.phone_country_code,
                    screen_name: data.screen_name,
                    total_exp_in_months: data.total_exp_in_months,
                    DateTime: data.DateTime
                }
                res.status(200).send({ sucess: dataElement, secure: true, status: 200 });

            } else {

                res.status(403).send({ error: "Please enter valid creadential", secure: true, status: 403 });
            }
        }
        else if (id === undefined && username === undefined) {
            const datafind = await database.find();
            let datafilter = [];
            if (datafind) {
                datafind.forEach((data) => {
                    const dataElement = {
                        _id: data._id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        belongs_to_referral_country: data.belongs_to_referral_country,
                        branch: data.branch,
                        city: data.city,
                        college: data.college,
                        gender: data.gender,
                        graduated: data.graduated,
                        graduation_year: data.graduation_year,
                        profileImage: data.profileImage,
                        international_phone_number: data.international_phone_number,
                        linkedin: data.linkedin,
                        node_access_token: data.node_access_token,
                        phone_country_code: data.phone_country_code,
                        screen_name: data.screen_name,
                        total_exp_in_months: data.total_exp_in_months,
                        DateTime: data.DateTime
                    }
                    datafilter.push(dataElement);
                })
            }
            res.status(200).send({ sucess: datafilter, secure: true, status: 200 });

        } else {
            res.status(402).send({ error: "Please enter all creadential", secure: true, status: 402 });

        }



    } catch (error) {
        res.status(500).send({ error: "Some technical issue", secure: true, status: 500 });
    }
}
module.exports = ChartUserCreateControllerApi