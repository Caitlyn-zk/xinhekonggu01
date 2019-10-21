/*下拉框封装*/
//闭合空间
(function($, w){
	//行参
	//模拟下拉框
	$.fn.selectExamp = function(option){
		//$.extend 合并对象的 合并到第一个
		var options = $.extend({
			title:'.select-title',
			list:".selsect-lists"
		},option);
		
		var _this = this;
		//查找selectkuang
		var selecTitle = $(this).find(".select-title")
		//获取下拉列表
		var lists = $(this).find(options.list).children()
		
		//点击下拉框的title,将下拉框的列表显示出来
		selecTitle.click(function(event){
			
			//阻止冒泡
			event.stopPropagation();
			
			$(this).next().toggleClass('show')
			
			$(this).closest(options.parent).siblings(options.parent).find(options.list).removeClass('show')
			
		})
		
		//2. 点击下拉菜单时选项赋值
		lists.click(function(){
			
			var aInput = $(this).closest(options.parent).find('input')
			
			//给input框赋值
			aInput.val($(this).html())
			
			//将list收回去
			//$(document.list).removeClass('show')
		})
		//3.点击文档 下拉框收回
		$(document).click(function(){
			$(options.list).removeClass('show')
		})
		
	}
	console.log($)
	console.log($)
	//传参到匿名函数中
})($,window)//实参
