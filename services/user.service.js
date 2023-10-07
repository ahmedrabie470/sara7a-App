const userModel=require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { sendEmail } = require('../emails/user.email')

module.exports.signup= async (req,res)=>{
    const {name,email,password, age}=req.body
    const user = await userModel.findOne({email})
    if(user){
        
        res.json({message:"Email already exist"})
    }else{
        bcrypt.hash(password,5,async function (err,hash) {
            await userModel.insertMany({name,email,password:hash, age})
            let token = jwt.sign({email},'koko')
            sendEmail({email,token,message:"hello re3oo"})
            res.json({message:"success"})
        })
        
    }
    
}

module.exports.signin= async (req,res)=>{
    const {email,password}=req.body
    const user = await userModel.findOne({email})
    if(user){
      const match = await bcrypt.compare(password,user.password)
        if(match){
            const token = jwt.sign({userId:user._id,name:user.name,email:user.emailConfirm},'hamada')
            if(user.emailConfirm==true){
                res.json({message:"Login",token})
            }else{
                res.json({message:"you must verify email "})
            }
        }else{
            res.json({message:"incorrect password"})
        }
        
    }
    res.json({message:"Email does't exist"})
}

        module.exports.emailVerify=(req,res)=>{
        const{token}=req.params;
        jwt.verify(token,"koko",async (err,decoded)=>{
            if(err){
                res.json(err)
            }else{
                const user = await userModel.findOne({email:decoded.email})
                if(user){
                    await userModel.findOneAndUpdate({email:decoded.email},{emailConfirm:true}),
                    res.json ({message:"verified"})
                }else{
                    res.json ({message:"user not found"})
        
                }
            }

        })
        
        }