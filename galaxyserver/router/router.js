// 所有的回调函数的汇总
let login = require("./login")
let news = require("./news")
let dynamic = require("./dynamic")
let alliance = require("./alliance")
let obj = Object.assign({},login,news,dynamic,alliance)
module.exports = obj
