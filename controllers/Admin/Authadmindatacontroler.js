const Authadmindatacontroler = (req, res) => {
    res.status(200).send(req.rootUser);
    return;
}
module.exports = Authadmindatacontroler;