const path=require('path');
const users=require('../models/users.model')
exports.userInfo=(req,res)=>
    {
        res.sendFile(path.join(__dirname,'../views/index.html') )
    }


exports.userInfoSave=(req,res)=>
    {
        const name=req.body.fullName
        const age=req.body.age;
        const info={
            name,age
        }
        users.push(info);
        res.status(200).json({
            success:true,
            users
        })
        
    }