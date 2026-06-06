const {Router} = require("express");
const { userAuth } = require("../middleware/userAuth")
const courseRouter = Router();
const { PurchaceModel, CourseModel } = require("../db")

courseRouter.post("/purchase",userAuth,async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    //should check if course is bought
    await PurchaceModel.create({
        userId,
        courseId
    });
    res.json({
        message:"you have successfully bought course content"
    });
});
    
courseRouter.get("/preview", async function(req,res){
    const courses = await CourseModel.find({});
    res.json({
        courses
    });
});

module.exports={
    courseRouter : courseRouter
}