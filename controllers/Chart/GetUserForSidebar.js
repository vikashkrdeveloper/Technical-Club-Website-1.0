 const User=require('../../model/ChartApplicationUserDataSchema')
 const GetUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select('-password').select('-__v');
        res.status(200).json(filteredUsers);

    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
}
module.exports=GetUserForSidebar;