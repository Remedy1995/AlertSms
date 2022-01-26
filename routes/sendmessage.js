const express=require('express');
const router=express.Router();
const bodyparser=require('body-parser');
const axios = require('axios');
const connection=require('../config/connection');
//connect to the database;
connection();
router.use(bodyparser.urlencoded({ extended: false }))
const cors = require("cors");
router.use(cors());
// parse application/json
router.use(bodyparser.json())
 // SEND SMS
 router.post("/sendmessage",function(req,res){
 
    console.log(req.body.fullname)
    console.log(req.body.phone)
    console.log(req.body.message)

    const sender=req.body.fullname;
    const recipients=req.body.phone;
    const message=req.body.message;
 const data = {"sender": sender,
              "message": message,
              "recipients": [recipients]};

 const config = {
   method: 'post',
   url: 'https://sms.arkesel.com/api/v2/sms/send',
   headers: {
    'api-key': 'OkRSSWJsaXJXdTFSdTRRS3Y='
   },
   data : data
 };

 axios(config)
 .then(function (response) {
   console.log(JSON.stringify(response.data));
 })
 .catch(function (error) {
   console.log(error);
 });



 })

module.exports=router;