const express = require('express');
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express());

function credentials(req){
    username = req.body.username;
    password = req.body.password
}

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

app.listen(3000,function(){
    console.log("Server running on 3000")
})