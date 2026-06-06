const jwt = require('jsonwebtoken');

const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;

function adminAuth(req,res,next){
    const token = req.headers.token;

    try{
        const decoded = jwt.verify(token,JWT_ADMIN_SECRET);
        req.adminId = decoded.id;
        next();
    }catch(err){
        res.status(403).json({
             message : "Unauthorized"
        });
    }
}

module.exports = {
    adminAuth
}