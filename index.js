const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();


app.use(express.json());

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(() =>
        console.log("MongoDb Connected"))
    .catch((err) => console.log(err));

    app.listen(3000,function(){
        console.log("Server running on 3000")
    })
}

main();