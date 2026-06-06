const jwt = require("jsonwebtoken");

const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

function userAuth(req,res,next){
    const token = req.headers.token;

    try{
        const decoded = jwt.verify(token,JWT_USER_SECRET);
        req.userId=decoded.id;
        next();
    } catch(err){
        res.status(403).json({
            message : "Unauthorized"
        });
    }
}

module.exports = {
    userAuth
}