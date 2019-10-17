//发送 ajax 获取招聘列表数据
$.ajax({
	url: 'http://192.168.97.251:3000/getadvertise',
	type: 'get',
	dataType: 'json',
	success: function(res){
//		console.log(res)
		//模板引擎封装方法
		var html = template('ghg-about-tablist',res)
		$('.ghg-table-main').html(html)
//		console.log(html)
	}
	
})