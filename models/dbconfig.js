const mongoose =  require('mongoose');

exports.dbconnection = async ()=>{
    try{
       mongoose.connect(process.env.MONGO_URL)
        
        console.log('DB Connected');
    }catch(err){
        console.log(err.message);
    }
}