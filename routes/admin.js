const {Router} = require("express")
const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");
const { adminAuth } = require("../middleware/adminAuth")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET

//bcrypt , zod , jwt 

adminRouter.post("/signup",async function(req,res){
    const{email , password, firstName, lastName} = req.body;
    //hash the pass
    
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
                id: admin._id
            },JWT_ADMIN_SECRET);

            //do cookie logic in future
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
    const adminId = req.userId;

    const {title, description,imageUrl,price} =  req.body;

    await CourseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course Created",
        courseId: course._id
    })
})

adminRouter.put("/course",adminAuth,async function(req,res){
    const adminId = req.userId;

    const {title, description,imageUrl,price} =  req.body;

    await CourseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course Created",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message: "Works"
    })
})

adminRouter.delete("/course",function(req,res){
    res.json({
        message: "Works"
    })
})

module.exports = {
    adminRouter : adminRouter
}