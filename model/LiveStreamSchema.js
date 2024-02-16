const database=require('../db/connect');
const LiveStreamSchema=new database.Schema({
    name:{
        type:String
    },
    videoid:{
        type:String
    }
},{timestamps:true});

const LiveStreamModel=database.model('Live_Stream',LiveStreamSchema);
module.exports=LiveStreamModel;