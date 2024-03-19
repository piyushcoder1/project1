const express=require('express');
const {registerUser}=require('../controllers/userController');
const {verifyToken}=require('../middleware/authMiddleware');
const router=express.Router();
router.post('/register', registerUser);
module.exports=router;