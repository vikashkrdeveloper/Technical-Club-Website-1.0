const QuizAuthdataController = async (req, res) => {
    try {
        res.status(200).send(req.rootUser);
        return;
    } catch (error) {
        res.status(500).send("Some technical issue");
        return;
    }

}
module.exports = QuizAuthdataController