const { query } = require("express");
const express=require("express");
var mysql = require('mysql');
const router=express.Router();

var client = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'balram',
    password: '',
    port: 3306,
});
client.connect(function(err){
    if(err){
      console.log(err);
    }else{
      console.log('you successfully connected!!')
    }
  });
  router.post("/",(req,res)=>{
    console.log("this is req");
    const name=req.body.fname,lname=req.body.lname,email=req.body.email,address=req.body.address,phone=req.body.phone;
   var sql="INSERT INTO `food_project` (`first_name`, `last_name`,`email`,`address`,`phone`) VALUES ('"+name+"','"+lname+"','"+email+"','"+address+"','"+phone+"')";
    
client.query(sql, (err,res) => {
    if (err)
              console.log(err.stack);
          else {
              console.log("successful!");
          }
  });
});

  
  

module.exports=router;