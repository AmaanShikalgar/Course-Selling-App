const {Router} = require("express")
const adminRouter = Router();


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

adminRouter.use(adminMiddleware);

adminRouter.get("/course",function(req,res){
    res.json({
        message: "Works"
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.put("/course",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.delete("/course/bulk",function(req,res){
    res.json({
        message: "Works"
    })
})

module.exports = {
    adminRouter : adminRouter
}