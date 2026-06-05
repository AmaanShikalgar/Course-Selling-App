const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup",function(req,res){
        const{username , password} = credentials;
    })

userRouter.post("/signin",function(req,res){
        res.json({
            message: "signin endpoint"
        })
    })


userRouter.get("/purchases",function(req,res){
        
    })

module.exports = {
    userRouter : userRouter
}
