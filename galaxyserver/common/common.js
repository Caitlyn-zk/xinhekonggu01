
// 后台公共封装

module.exports = {
    // 登录的数据验证是否存在
    /**
     * 
     * @param {String} username  用户名
     * @param {String} password  密码
     * @param {String} verify    验证码
     */
    loginData:function(username,password,verify){
        if(!username){
            res.json({
                status:501,
                message:'请输入用户名'
            })
            return false;
        }
        if(!password){
            res.json({
                status:502,
                message:'请输入密码'
            })
            return false;
        }
        if(!verify){
            res.json({
                status:503,
                message:'请输入验证码'
            })
            return false;
        }
    },


    // 新闻的数据验证
    /**
     * 
     * @param {String} img 新闻图片
     * @param {String} time 新闻时间
     * @param {String} title 新闻表题
     * @param {String} text 新闻详情
     */
    newsData:function(img,time,title,text){
        if(!img){
            res.json({
                status:507,
                message:'请添加图片'
            })
            return false;
        }
        if(!time){
            res.json({
                status:508,
                message:'请输入新闻时间'
            })
            return false;
        }

        if(!title){
            res.json({
                status:509,
                message:'请输入新闻标题'
            })
            return false;
        }

        if(!text){
            res.json({
                status:510,
                message:'请输入新闻详情'
            })
        }
    }

    

}