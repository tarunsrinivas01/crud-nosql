const express = require("express");
const app = express();

const mongoose=require('mongoose')
const con=require("./controllers/createstudent")
const con1=require("./controllers/getdetails")
const con2=require("./controllers/updatedetails")
const con3=require("./controllers/deletedetails")


app.post("/create",con.createstudentinfo)
app.get("/getdetails",con1.getstudentdetails)
app.put("/updatedetails",con2.updatedetails)
app.delete("/deletedetails",con3.deletestudentdetails)



mongoose.connect('mongodb+srv://tarun:tarun@cluster0.uef6x77.mongodb.net/crud-nosql?retryWrites=true&w=majority')
.then(()=>{
  console.log('connected')
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})