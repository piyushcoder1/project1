const bycrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

const registerUser= async(req,res)=>{
    const {username,password,role}=req.body;
    try{
        let user=await User.findOne({username});
        if(user){
            return res.status(400).json({message: 'User already exists'});

        }
        const hashedPassword=await bycrypt.hash(password, 10);
        user=new User({username, password: hashedPassword, role});
        await user.save();
        const payload={
            user:{
                id: user._id,
                role: user.role,
            },
        };
        const token =jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        return res.status(201).json({token});

    }
    catch(err){
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}
module.exports={registerUser}