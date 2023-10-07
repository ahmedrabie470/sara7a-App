const nodemailer = require("nodemailer")


module.exports.sendEmail= async (options)=>{
    const transporter = nodemailer.createTransport({
       service:"gmail",
        auth: {
          user: 'ahmedrabie295@gmail.com',
          pass: 'J T Q Y MLOA RY C TBPAC'
        }
      });

   let info = transporter.sendMail({
    from: '"re3oooo" <ahmedrabie295@gmail.com>', // sender address
    to: options.email,
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
    <div style="background:#bbf;color:#fff;padding:20px">
    <img src ="https://lh3.googleusercontent.com/a/AAcHTtcVXrsNieoszvbc2VjkaNO1NWnYTZUrrBbHJsmmZsh9OZ4a=s360-c-no" > 
    <h1>${options.message}</h1>
    <a href="http://localhost:3000/users/verify/${options.token}">verify</a>
    </div>
 `,
    },(err,info)=>{
    if(err){
      console.log(err);
    }else{
      console.log(info);
    }
    })
    console.log(info);
      ;}