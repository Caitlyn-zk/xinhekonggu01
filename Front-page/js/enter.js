//	页面切换
	
	$(function() {
		//		tab-title为点击按钮
		$('.ghg-tablelist').click(function() {
			
			$(this).addClass('on').siblings('li').removeClass('on')
			var idx = $(this).index()
			$('.ghg-containerBox').eq(idx).addClass('on').siblings('div').removeClass('on')
		})
	})
		$(function() {
		//		
		$('.ghg-tablelist').click(function() {
			$(this).addClass('on').siblings('li').removeClass('on')
			var idx = $(this).index()
			$('.ghg-current').eq(idx).addClass('on').siblings('a').removeClass('on')
		})
	})
			$(function() {
		$('.ghg-pageList').click(function() {
			$(this).addClass('on').siblings('li').removeClass('on')
			var idx = $(this).index()
			$('.ghg-list').eq(idx).addClass('on').siblings('li').removeClass('on')
		})
		
			
		
	


	})
//				$(function() {
//		$('.ghg-Cultural').click(function() {
//			$('.ghg-substance').addClass('on').siblings('div').removeClass('on')
//			
//			
//		})
//	})	

	//法律声明
	$('.ghg-statement').click(function() {
		$('.ghg-The-law').css({
				"display": "block"
			}),
			$('.ghg-myModel').css({
				"display": "block"
			})
	})

	//关闭弹框 
	$('.ghg-down').click(function() {
		$('.ghg-foot-alert').css({
				"display": "none"
			}),
			$('.ghg-myModel').css({
				"display": "none"
			})

	})
	//地图
	$('.ghg-map').click(function() {
		$('.ghg-The-map').css({
				"display": "block"
			}),
			$('.ghg-myModel').css({
				"display": "block"
			})
	})

	//微信点击事件
	$('.ghg-WeChat').click(function() {
		$('.ghg-WeChat-alert').fadeIn()
	})
	//关闭微信
	$('.ghg-text-hide').click(function() {
		$('.ghg-WeChat-alert').hide()
	})



$.ajax({
	
	type:"post",
	url:"http://192.168.97.251:3000/getnews",
	dataType:'json',
	success:function(res){
		let news=$(".ghg-imgList")
		console.log(news)
		let html=''
		console.log(res.data)
		for(let item of res.data){
//			<img src="http://192.168.97.251:3000/news/${item.img}"/>
						html+=`<div class="ghg-newsBox"><img class="ghg-image" src="http://192.168.97.251:3000/news/${item.img}" />
				 		    <div class="ghg-newsdetial"><div>${item.text}</div></div>
				 		       </div>`
		}
		news.append(html)
         console.log(res)
	}
});