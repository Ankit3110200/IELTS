const User = require('../Models/user');

exports.userCreate=(req,res)=>{
    User.findOne({GToken:req.body.token})
    res.status(200).json({success:"true"});
    
}

exports.userShubham=(req,res)=>{
    res.status(200).json({success:"SHubham"});
}