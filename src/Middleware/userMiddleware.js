exports.requireLogin=(req,res,next)=>{
    if(req.body.user!="Shubham"){
        res.status(404).json({message:"Access Denied !"});
    }else{
        next();
    }
}