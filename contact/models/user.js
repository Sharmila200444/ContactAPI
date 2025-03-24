const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    email:String
});

const usermodel=mongoose.model('contacts',userSchema);

module.exports=usermodel;