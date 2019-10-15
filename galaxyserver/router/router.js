// 所有的回调函数的汇总
let login = require("./login")
let news = require("./news")
console.log(news.newsClassify)
let obj = Object.assign({},login,news)
module.exports = obj
