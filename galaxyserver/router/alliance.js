let data = require("../controlor/data")
let multer = require('multer')
let Storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./ued/alliance');
    },
    filename:function(req,file,callback){
        callback(null,file.fieldname+'_'+Date.now()+'_'+file.originalname)
    }

})
let upload = multer({storage:Storage}).array('allianceUploader')
module.exports = {
    // 添加合作伙伴
    addalliance:async function(req,res){
        upload(req,res,function(err){
            if(err){
                return res.json({
                    status:531,
                    message:'文件上传失败'
                })
            }else{
                let name = req.body.name
                let img = req.files[0].filename
                if(!name){
                    res.json({
                        status:522,
                        message:'请输入合作伙伴名'
                    })
                    return false;
                }
                if(!img){
                    res.json({
                        status:523,
                        message:'请输入合作伙伴图片'
                    })
                    return false;
                }
        
                let arr = [name,img]
                let result = data.addalliance(arr)
                if(result){
                    res.json({
                        status:200,
                        message:'添加合作伙伴成功'
                    })
                }else{
                    res.json({
                        status:524,
                        message:'添加合作伙伴失败'
                    })
                }
            }
        })
        
        
    },

    // 获取合作伙伴
    getalliance:async function(req,res){
        let result = data.getalliance()
        if(result){
            res.json({
                status:200,
                data:result,
                message:'获取合作伙伴成功'
            })
        }else{
            res.json({
                status:525,
                message:'获取合作伙伴失败'
            })

        }
    },

    // 修改合作伙伴
    updatealliance:async function(req,res){
        upload(req,res,function(err){
            if(err){
                return res.json({
                    status:531,
                    message:'文件上传失败'
                })
            }else{
                let name = req.body.name
                let img = req.files[0].img
                let id = req.body.id
                if(!name){
                    res.json({
                        status:522,
                        message:'请输入合作伙伴名'
                    })
                    return false;
                }
                if(!img){
                    res.json({
                        status:523,
                        message:'请输入合作伙伴图片'
                    })
                    return false;
                }
                if(!id){
                    res.json({
                        status:526,
                        message:'请输入合作伙伴id'
                    })
                }
                let arr = [name,img,id]
                let result = data.updatealliance(arr)
                if(result){
                    res.json({
                        status:200,
                        message:'合作伙伴修改成功'
                    })
                }else{
                    res.json({
                        status:527,
                        message:'合作伙伴修改失败'
                    })
                }
            }

        })
        
    },

    // 删除合作伙伴
    deletealliance:async function(req,res){
        let id = req.body.id
        if(!id){
            res.json({
                status:528,
                message:'请输入需要删除的id'
            })
            return false;
        }

        let queryalliance = await data.queryalliance(id)
        if(queryalliance){
            res.json({
                status:529,
                message:'该合作伙伴不存在'
            })
        }else{
            let result = await data.deletealliance(id)
            if(result){
                res.json({
                    status:200,
                    message:'删除合作伙伴成功'
                })
            }else{
                res.json({
                    status:530,
                    message:'删除合作伙伴失败'
                })
            }
        }
        
    }

}