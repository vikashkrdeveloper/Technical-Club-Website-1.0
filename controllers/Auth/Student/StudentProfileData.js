const StudentProfileData = (req, res) => {
    const StudentProfileData = req.StudentProfileData;
    if (StudentProfileData) {
        res.status(200).json({ message: "Student Data Fetch Sucessfully", data: StudentProfileData, status: 200 });
        return;
    } else {
        res.status(400).json({ message: "Student Data Not Found", status: 400 });
        return;
    }
}

module.exports = StudentProfileData;