const jwt=require('jsonwebtoken');

const verifyToken =(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(403).json({message: 'Token missing'});

    }

    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded.user;
        next();
    }
    catch(err){
     return res.status(401).json({message:'Invalid Token'});

    }
}
module.exports={verifyToken};