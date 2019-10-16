
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
     * 新闻分类
     */
    newsClass:async function(){
        let sql = 'select * from dynamicclassify'
        let result = await query(sql,'')
        return result;
    },

    addNews:async function(data){
        let sql = 'insert into table news() values(?)'
        let result = await query(sql,[data])
    }



}