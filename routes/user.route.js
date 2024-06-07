
const express=require('express')
const router=express.Router();
const bodyParser=require('body-parser')
const { userInfo, userInfoSave} = require('../controller/users.controller');


router.get('/login',userInfo)
router.post('/login',userInfoSave)


module.exports=router