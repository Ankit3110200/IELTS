const express=require('express');
const router=express.Router();
const {userCreate,userShubham} =require('../Controllers/user.action');
const { requireLogin } = require('../Middleware/userMiddleware');

router.get('/signin',(req,res,next)=>{
    console.log("you are in require Middleware");
    next();
},userCreate);

router.post('/shubham',requireLogin,userShubham);
router.get('/signup',userCreate);

module.exports=router;