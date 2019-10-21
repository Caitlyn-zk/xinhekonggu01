//发送 ajax 获取招聘列表数据
$.ajax({
	url: 'http://192.168.97.251:3000/getadvertise',
	type: 'post',
	dataType: 'json',
	success: function(res){
		var html = template('ghg-about-tablist',res)
		$('.ghg-table-main').html(html)
	}
	
})

//导航栏的点击事件
$('.ghg-abtout-nav li').click(function(){
	//添加on
	$(this).find('.ghg-abtout-click').addClass('on')
	//移除on
	$(this).siblings().find('.ghg-abtout-click').removeClass('on')
})

$('.ghg-abtout-show').click(function(){
	$('.ghg-abtout-select').slideDown()
})

//申请岗位的下划线切换
$('.ghg-station-box ul li').click(function(){
	$(this).find('a').addClass('on')
	$(this).siblings().find('a').removeClass('on')
	
	
	let index = $(this).index()
	
	let tab = $('.ghg-tbas')
	
	tab.eq(index).addClass('on').siblings().removeClass('on')
	
})

//下拉菜单
$(function(){
	$(".select p").click(function(e){
		$(".select").toggleClass('open');
		e.stopPropagation();
	});
	
	$(".select ul li").click(function(e){
		var _this=$(this);
		$(".select > p").text(_this.attr('data-value'));
		_this.addClass("Selected").siblings().removeClass("Selected");
		$(".select").removeClass("open");
		e.stopPropagation();
	});
	
	$(document).on('click',function(){
		$(".select").removeClass("open");
	})
	
});