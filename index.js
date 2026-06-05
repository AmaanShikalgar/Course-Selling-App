const express = require('express');
const { userRouter } = require("./routes/user");
const{ courseRouter } = require("./routes/course");
const app = express();

app.use(express());

function credentials(req){
    username = req.body.username;
    password = req.body.password
}

app.use("/user",userRouter);
app.use("/course",courseRouter);

app.post("/adminLogin",function(req,res){

})

app.post("/adminSignup",function(req,res){

})

app.post("/createCourse",function(req,res){

})

app.delete("/deleteCourse",function(req,res){

})


app.listen(3000)