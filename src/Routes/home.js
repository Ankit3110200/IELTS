const express=require('express');
const router=express.Router();
// const {userCreate} =require('../Controllers/user.action')

// router.get('/signin',userCreate);
// router.get('/signup',userCreate);
router.get('/home',(req,res) => {
    res.status(200).json({home:"true"});
})

module.exports=router;