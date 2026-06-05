const express = require('express');

const app = express();

app.use(express())

function credentials(req){
    a = req.body.a;
    b = req.body.b
}

app.post("/login",function(req,res){
})

app.post("/signup",function(req,res){

})

app.post("/purchase",function(req,res){

})

app.get("/purchasedCourses",function(req,res){

})

app.get("/Courses",function(req,res){

})

app.post("/adminLogin",function(req,res){

})

app.post("/adminSignup",function(req,res){

})

app.post("/createCourse",function(req,res){

})

app.delete("/deleteCourse",function(req,res){

})
