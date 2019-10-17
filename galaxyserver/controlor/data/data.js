
// 数据库操作

let query = require("../mysql")


module.exports = {
    /**
     * 判断登录
     * @param {array} data 
     */
    islogin:async function(data){
        let sql = 'select * from user where name = ? and password = ?'
        let result = await query(sql,data)
        if(result.length>0){
            return result;
        }else{
            return false;
        }
    },
    /**
     * 动态分类
     */
    dynamicClassify:async function(){
        let sql = 'select * from dynamicclassify'
        let result = await query(sql,'')
        return result;
    },
    /**
     * 添加新闻
     * @param {Array} data 
     */
    addNews:async function(data){
        let sql = 'insert into news(img,time,title,text) values(?)'
        let result = await query(sql,[data])
        return result;
    },

    // 判断新闻是否存在
    queryNews:async function(title){
        let sql = 'select * from news where title = ?'
        let result = await query(sql,title)
        if(result>0){
            return false;/*新闻已经存在*/
        }else{
            return true;/*新闻不存在*/
        }
    },
    // 获取新闻
    getNews:async function(){
        let sql = 'SELECT * FROM news  ORDER BY TIME desc'
        let result = await query(sql,'')
        return result;
    },
    // 修改新闻
    updateNws:async function(data){
        let sql = 'update news set img = ?,time = ?,title = ?,text = ? where id = ?'
        let result = await query(sql,data)
        return result;
    },
    // 删除新闻
    deletNews:async function(id){
        let sql = 'delete from news where id = ?'
        let result = await query(sql,id)
        return result;
    },


    // 添加动态
    adddynamic:async function(data){
        let sql = 'insert into dynamic(img,time,title,text,class) values(?)'
        let result = await query(sql,[data])
        return result;
    },

    // 判断动态是否存在
    querydynamic:async function(data){
        let sql = 'select * from dynamic where id = ?'
        let result = await query(sql,data)
        if(result.length>0){
            return false;/*id存在*/
        }else{
            return true;/*id不存在*/
        }
    },

    // 获取动态
    getdynamic:async function(){
        let sql = 'select * from dynamic'
        let result = await query(sql,'')
        return result;
    },
    // 通过类名获取动态
    getdynamicByClass:async function(data){
        let sql = 'select * from dynamic where class = ?'
        let result = await query(sql,data)
        return result;
    },

    // 修改动态
    updatedynamic:async function(data){
        let sql = 'update dynamic set img = ?,time = ?,title = ?,text = ? where id = ?'
        let result = await query(sql,data)
        return result;
    },

    // 删除动态
    deletedynamic:async function(data){
        let sql = 'delete from dynamic where id = ?'
        let result = await query(sql,data)
        return result;
    },



    // 添加合作伙伴
    addalliance:async function(data){
        let sql = 'insert into alliance(name,img) values(?)'
        let result = await query(sql,[data])
        return result;
    },

    // 判断合作伙伴是否存在
    queryalliance:async function(data){
        let sql = 'select * from alliance where id = ?'
        let result = await query(sql,data)
        if(result.length>0){
            return false;/*id存在*/
        }else{
            return true;/*id不存在*/
        }
    },
    //获取合作伙伴
    getalliance:async function(){
        let sql = 'select * from alliance'
        let result = await query(sql,'')
        return result;
    },

    
    //修改合作伙伴
    updatealliance:async function(data){
        let sql = 'update alliance set name = ?,img = ? where id = ?'
        let result = await query(sql,data)
        return result;
    },


    // 删除合作伙伴
    deletealliance:async function(data){
        let sql = 'delete from alliance where id = ?'
        let result = await query(sql,data)
        return result;
    },

    // 添加视频
    addvideo:async function(data){
        let sql = 'insert into vedio(title,video) values(?)'
        let result = await query(sql,[data])
        return result;
    },

    // 获取视频
    getvideo:async function(){
        let sql = 'select * from vedio'
        let result = await query(sql,'')
        return result;
    },

    // 查询视频是否存在
    queryvideo: async function(data){
        let sql = 'select * from vedio where id = ?'
        let result = await query(sql,data)
        if(result.length>0){
            return false;/*这个ID存在*/
        }else{
            return true;/*这个ID不存在*/
        }
    },

    // 更改视频
    updatevideo:async function(data){
        let sql = 'update vedio set title = ? ,video = ? where id = ?'
        let result = await query(sql,data)
        return result;
    },

    //删除视频
    deletevideo:async function(data){
        let sql = 'delete from vedio where id = ?'
        let result = await query(sql,data)
        return result;
    },

    // 获取招聘信息
    getadvertise:async function(){
        let sql = 'select * from job'
        let result  = await query(sql,'')
        return  result;
    },

    // 添加招聘信息
    addadvertise:async function(data){
        let sql = 'insert intoinsert into job(section,name,place) values(?)'
        let result = await query(sql,data)
    },

    // 查询是否存在该招聘信息
    queryadvertise:async function(data){
        let sql = 'select * from job where id = ?'
        let result = await query(sql,data)
        if(result>0){
            return false;/*该招聘信息存在*/
        }else{
            return true;/*该招聘信息不存在*/ 
        }
    },

    // 修改招聘信息
    updateadvertise:async function(data){
        let sql = 'update job set section = ?,name = ?,place = ? where id = ?'
        let result = await query(sql,data)
        return result;
    },

    // 删除招聘信息
    deleteadvertise:async function(data){
        let sql = 'delete from job where id = ?'
        let result = await query(sql,data)
        return result;
    }








}