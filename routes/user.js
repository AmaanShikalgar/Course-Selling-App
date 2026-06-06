const {Router} = require("express");
const { UserModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;
const userRouter = Router();

userRouter.post("/signup", async function(req,res){
        const{email , password, firstName, lastName} = req.body;
        //hash the pass

        try{
            const hashedPassword = await bcrypt.hash(password,5);

            await UserModel.create({
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
        }
    });

userRouter.post("/signin",async function(req,res){
        const {email,password} = req.body;

        const user = await UserModel.findOne({
            email : email
        });

        if(!user){
            return res.status(403).json({
                message:"user not found"
            });
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        
        if(passwordMatch){
            const token = jwt.sign({
                id: user._id
            },JWT_USER_SECRET);

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

userRouter.get("/purchases",function(req,res){
        res.json({
            message: "works"
        })
    });

module.exports = {
    userRouter : userRouter
}
