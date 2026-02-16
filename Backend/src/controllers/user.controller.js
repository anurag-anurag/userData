const User = require('../model/user.model')


const createUSer = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            success:true,
            message:"user created",
            user:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const getUser = async(req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json({
            success:true,
            message:"All user Fetched..",
            All_Users:user.length,
            user:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const updateUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"user updated",
            user:user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })        
    }
}

const deleteUser = async(req,res)=>{
 try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"user deleted",
        user:{name:user.firstName,email:user.email}
    })
 } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })    
 }
}



module.exports = {createUSer,getUser,updateUser,deleteUser}