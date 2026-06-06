const {Router} = require("express")
const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");
const { adminAuth } = require("../middleware/adminAuth")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const course = require("./course");
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET

adminRouter.post("/signup",async function(req,res){
    const{email , password, firstName, lastName} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,5);
        await AdminModel.create({
                email: email,
                password:hashedPassword, // both are the same 
                firstName,         // both are the same
                lastName
            });
            res.json({
                message:"Signup succeeded"
            });    
    }catch(err){
            res.status(403).json({
                message:"Invalid Credentials"
            });
    };
});
    
adminRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;
    const admin = await AdminModel.findOne({
        email : email
    });
    if(!admin){
        return res.status(403).json({
            message:"user not found"
        });
    }

    const passwordMatch = await bcrypt.compare(password,admin.password);
        
    if(passwordMatch){
        const token = jwt.sign({
            id: admin._id},JWT_ADMIN_SECRET);
        res.json({
            token : token
        });
    }else{
        res.status(403).json({
            message : "Invalid Credentials"
        });
    }
});

adminRouter.post("/course",adminAuth,async function(req,res){
    const adminId = req.adminId;
    const {title, description,imageUrl,price} =  req.body;
    const course = await CourseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId
    });
    res.json({
        message: "Course Created",
        courseId: course._id
    });
});

adminRouter.put("/course",adminAuth,async function(req,res){
    const adminId = req.adminId;
    const {courseId,title, description,imageUrl,price} =  req.body;
    const updatedCourse = await CourseModel.updateOne( //needs two arguments
    {
        _id:courseId,
        creatorId:adminId   // this is filter
    },
    {
        title,
        description,
        imageUrl,       //this is the changes
        price,     
    });

    if (updatedCourse.matchedCount===0){
        return res.status(404).json({
            message: "Course not found or unautorized"
        });
    };
    res.json({
        message: "Course Updated"
    });
});

adminRouter.get("/course/bulk",adminAuth, async function(req,res){
    const adminId = req.adminId
    const courses = await CourseModel.find({
        creatorId: adminId
    });
    res.json({
        courses
    });
});

adminRouter.delete("/course",async function(req,res){
    const adminId = req.adminId;
    const {courseId} =  req.body;
    const deletedCourse = await CourseModel.deleteOne({
        _id:courseId,
        creatorId:adminId   // this is filter
    });

    if (deletedCourse.deletedCount===0){
        return res.status(404).json({
            message: "Course not found or unautorized"
        });
    };
    res.json({
        message: "Course Deleted"
    });
});

module.exports = {
    adminRouter : adminRouter
}