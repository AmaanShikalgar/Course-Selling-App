const {Router} = require("express")
const adminRouter = Router();
const { AdminModel } = require("../db");

adminRouter.post("/signin",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.post("/signup",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.post("/",function(req,res){
    res.json({
        message: "Works"
    })
})


adminRouter.put("/",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.get("/bulk",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.delete("/",function(req,res){
    res.json({
        message: "Works"
    })
})

module.exports = {
    adminRouter : adminRouter
}