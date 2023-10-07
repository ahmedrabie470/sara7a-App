
const messageModel = require('../models/message.model')

module.exports.addMsg=async(req,res)=>{
    const {message,userId}=req.body
    await messageModel.insertMany({message,userId})
    res.json({message:'success'})
}

module.exports.allMsgs=async(req,res)=>{
    const allMsgs = await messageModel.find({userId:req.id},{message:1,_id:0})
    res.json({message:"success", allMsgs })
}