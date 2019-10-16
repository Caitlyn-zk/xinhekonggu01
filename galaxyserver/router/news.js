let data = require("../controlor/data/data")
let common = require("../common")
module.exports = {
    // 获取新闻分类
    /**
     * newsClassify 回调函数
     * @param {*} req 
     * @param {*} res 
     */
    newsClassify:async function(req,res){
        let result = await data.newsClass()
        if(!result){
            res.json({
                status:506,
                message:'获取分类失败'
            })
        }else{
           res.json({
               status:200,
               data:result
           })
        }

    },
    // 添加新闻
    addnews:async function(req,res){
        let img = req.body.img
        let time = req.body.time
        let title = req.body.title
        let text = req.body.text
        common.newsData(img,time,title,text)
        let addNews = await
        
    },
    // 更改新闻
    updateNws:async function(){

    },
    // 删除新闻
    deletNews:async function(){

    }
}