const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchase",function(req,res){
        res.json({
            message:"works"
        })
    })
    
    
courseRouter.get("/preview",function(req,res){
        res.json({
                message:"works"
            })
    })

module.exports={
    courseRouter : courseRouter
}