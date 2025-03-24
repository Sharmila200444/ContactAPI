const usermodel=require('../models/user');


// create new contact
exports.createuser = async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        // Check if the user already exists
        const existingUser = await usermodel.findOne({ name });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Create a new user instance
        const newuser = new usermodel({ name, phone, email });

        // Save the new user to the database
        await newuser.save();

        return res.status(200).json({
            message: "User saved successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};



// get whole contact

exports.getuser=async(req,res)=>{
    try{
        const user=await usermodel.find();
        return res.status(200).json(user);

    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
};


// get single contact


exports.singleuser=async(req,res)=>{
    try{
        const user=await usermodel.findById(req.params.id);
        if(!user){
            return res.status(400).json({
                message:"contact not found"
            });
        }
        return res.status(200).json(user);
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
};


// update an contact

exports.updateuser=async(req,res)=>{
    try{
        const user=await usermodel.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        if(!user){
            return res.status(400).json({
                message:"contact not found"
            });
        }
        return res.status(200).json(user);
        
    }catch(error){
        return res.status(400).json({
            message:error.message
        });
    }
};



// delete an contact

exports.deleteuser=async(req,res)=>{
    try{
        const user=await usermodel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(400).json({
                message:"contact not found"
            });
        }
        return res.status(200).json({
            message:"contact deleted successfully"
        });
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
};






