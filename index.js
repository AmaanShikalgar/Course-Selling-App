const express = require('express');

const app = express();

const port =3000

app.use(express())

function credentials(req){
    username = req.body.username;
    password = req.body.password
}

app.post("/user/signin",function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

app.post("/user/signup",function(req,res){
    res.json({
        message : "signup endpoint"
    })
})

app.post("/course/purchase",function(req,res){

})

app.get("/user/purchases",function(req,res){
    
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
