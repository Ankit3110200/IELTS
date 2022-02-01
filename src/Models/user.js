const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    GToken:{
        type: String,
        require:true,
        unique:true
    }
},{timestamps:true});


module.exports=mongoose.model('user',userSchema);