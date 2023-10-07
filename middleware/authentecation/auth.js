const jwt=require('jsonwebtoken')


module.exports.auth=(req,res,next)=>{
    const token = req.header('token')
    jwt.verify(token , 'hamada',(err,decoded)=>{
    if(err)
    {
        res.json(err)
    }else{
        req.id=decoded.userId
        next()
    }
    })
}