const express=require('express');
const app=express();
const GetData=require('./models/createuser');
const connection=require('./config/connection');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

const cors = require("cors");
app.use(cors());
const port=3001;
const sendmessage=require('./routes/sendmessage');
//connect to the database;
connection();
app.use("/sendmessage",sendmessage);

app.post('/sendmessage',(req,res)=>{
  console.log(req.body.fullname)
  console.log(req.body.message)
  console.log(req.body.phone)
})
app.get('/getphone',(res,req)=>{

console.log(GetData());

GetData.find({}).then(data=>{
    console.log(data)

    for(i=0;i<data.length;i++){
      var phone= data[i].phone;
      
    console.log(phone)
    }

})
 console.log("you have all the phone numbers")
})



app.listen(port,()=>{
    console.log("the server is running on server " +port);
})