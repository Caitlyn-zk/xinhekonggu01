let data = require("../controlor/data/data")
let common = require("../common")
module.exports = {
    // 添加新闻
    addnews:async function(req,res){
        let arr =  common.Data(req,res)
        let queryNews = await data.queryNews(arr[2])
        if(!queryNews){
            res.json({
                status:514,
                message:'新闻已存在请勿重复添加'
            })
        }else{
            let addNews = await data.addNews(arr)
            if(!addNews){
                res.json({
                    status:511,
                    message:'新闻添加失败'
                })
            }else{
                res.json({
                    status:512,
                    message:'添加新闻成功'
                })
            }
        }
    },

    //获取新闻
    getnews:async function(req,res){
       let resulet = await data.getNews()
       if(resulet){
           res.json({
               status:200,
               data:resulet,
               message:'新闻获取成功'
           })
       }else{
           res.json({
               status:513,
               message:'新闻获取失败'
           })
       }
    }, 

    // 更改新闻
    updateNews:async function(req,res){
        let arr =  common.Data(req,res)
        let id = req.body.id
        arr.push(id)
        let queryNews = await data.queryNews(arr[2])
        if(!queryNews){
            res.json({
                status:515,
                message:'该新闻不存在'
            })
        }else{
            let updateNews = await data.updateNws(arr)
            if(updateNews){
                res.json({
                    status:200,
                    message:'新闻修改成功'
                })
            }else{
                res.json({
                    status:516,
                    message:'新闻修改失败'
                })
            }

        }       

    },
    // 删除新闻
    deletNews:async function(req,res){
        let id = req.body.id
        let resulet = await data.deletNews(id)
        if(resulet){
            res.json({
                status:200,
                message:'删除成功'
            })
        }else{
            res.json({
                status:517,
                message:'删除失败'
            })
        }
    }
}