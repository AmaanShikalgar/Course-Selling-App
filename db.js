const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() =>
    console.log("MongoDb Connected"))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    email: { type:String , unique:true , required:true },
    password: {type:String , required:true},
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: { type:String , unique:true , required:true },
    password: {type:String , required:true},
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title : String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId : ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId : ObjectId
});

const UserModel = mongoose.model("user",userSchema);
const AdminModel = mongoose.model("admin",adminSchema);
const CourseModel = mongoose.model("course",courseSchema);
const PurchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}