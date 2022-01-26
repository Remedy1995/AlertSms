const mongoose=require('mongoose');
require('dotenv').config();
const mongo_connection=process.env.MONGO_PASSWORD;
function connection(){
    try{
mongoose.connect(mongo_connection,{useNewUrlParser:true,useUnifiedTopology:true})
console.log("successfully connected to the database")
    
    }
    catch(error){
console.log(error.message)
    }
  


}

module.exports=connection;