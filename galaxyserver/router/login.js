// 登录界面
let data = require('../controlor/data')
let jwt = require("jsonwebtoken")
let common = require("../common")


module.exports = {
    login:async function(req,res){
        let username = req.body.username
        let password = req.body.password
        let verify = req.body.verify

        let token = jwt.sign({username},'jwt',{
            expiresIn:60*60*1
        })
        // 判断接受数据是否存在
        common.loginData(username,password,verify)

        // 查询数据库
        let result = await data.islogin([username,password])
        if(result){
            res.json({
                status:200,
                message:'登录成功',
                info:{
                    data:{
                        result
                    },
                    token
                }
            })
        }else{
            res.json({
                status:504,
                message:'用户名或密码错误'
            })
        }
    },
    verifylogin:async function(req,res){
        let token = req.body.token
        jwt.verify(token,'jwt',function(err,decode){
            if(!err){
                res.json({
                    status:200,
                    message:''
                })
            }else{
                res.json({
                    status:505,
                    message:'登录失效'
                })
            }

        })
    }
}