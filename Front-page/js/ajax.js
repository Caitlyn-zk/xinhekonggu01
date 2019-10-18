// 访问地址
var requestUrl ='http://192.168.97.251:3000/'
//创建一个请求协议
var request = new XMLHttpRequest()

//打开请求
//request.open(请求类型，请求的地址,是否异步)
//请求的地址 是后台给的
//请求类型 是后台人员规定的
request.open('',requestUrl+'',true)
//3.发送请求到后台
//后台会规定是否需要数据
//request.send(null);
request.send()
//请求发送的四个状态

//请求监听四个状态码
request.onreadystatechange = function(){
	if(request.readyState ==4){
		JSON.parse(request.responseText)
		
	}
}
