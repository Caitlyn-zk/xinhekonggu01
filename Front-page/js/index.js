/*公共逻辑代码*/
/*顶部js*/
	/*导航的侧边*/
	$(".navbar-header .collapsed").click(function() {
		if($(this).hasClass('on')) {
			$(this).removeClass("on")
			$(".navbar-collapse-lists").animate({
				"left": "100%"
			},150,function(){
				$(".ghg-contents").animate({
					"marginRight": 0
				},150)
				$(".ghg-contents .ghg-navbar").animate({
					'left': "0%"
				},10)
			})
			
		var html = `<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>`
		$(this).html(html)
		$(".navbar-collapse-lists").removeClass("active")
		} else {
			$(this).addClass("on")
			$(this).find("span").remove()		
			
			$(".ghg-contents").animate({
				"marginRight": "50%"
			},300,function(){
				$(".navbar-collapse-lists").css({
					"left": "50%"
				})
				$(".ghg-contents .ghg-navbar").animate({
					'left': "-50%"
				},10)
				
			})
			
			var html = `<a type="button" class="ghg-butn">
						<span class="glyphicon glyphicon-remove"></span>
					</a>`
			$(this).html(html)
			
			/*划出部分*/
			$(".navbar-collapse-lists").addClass("active")
		
		}

	})
	
	/*导航点击上划线*/
	$(".nav > li").click(function(){
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
	})
	
	$(function() {
		//侧边划出列表
		$('.ghg-navlists span').click(function() {
			var curLi = $(this).parent().find('li');
			var restUl = $(this).parent().siblings('ul');
			console.log(restUl)
			if(curLi.css('display') == 'none') {
				curLi.slideDown();
			} else {
				curLi.slideUp();
			}
			restUl.find('li').slideUp();

		})

		$('.ghg-modal-btn').click(function() {
			$(".ghg-log").addClass('active')
		})

	})
	/*中英文替换的js*/
	$("ul.ghg-nav-bottom span").click(function(){
		$("ul.ghg-nav-bottom li").css({
			"display":"block"
		})
	})
	/*循环点击*/
	$(".nav > li").click(function(){
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
	})
	
	/*底部js*/
	//法律声明,地图弹框
	$('.ghg-statement').click(function(){
		$('.ghg-The-law').css({
			 "display": "block"
		}),
		$('.ghg-myModel').css({
			"display": "block"
		})
	})
	//地图弹框
	$('.ghg-map').click(function(){
		$('.ghg-The-map').css({
			 "display": "block"
		}),
		$('.ghg-myModel').css({
			"display": "block"
		})
	})
	//关闭弹框 
	$('.ghg-down').click(function(){
		$('.ghg-foot-alert' ).css({
			 "display": "none"
		}),
		$('.ghg-myModel').css({
			"display": "none"
		})
	})
	
	//微信点击事件
	$('.ghg-WeChat').click(function(){
		$('.ghg-WeChat-alert').fadeIn()
	})
	//关闭微信
	$('.ghg-text-hide').click(function(){
		$('.ghg-WeChat-alert').hide()
	})
	
	$(window).resize(function() {
	    let width = $(window).width();
		if(width <= 1039){
		console.log(width)
			$('.ghg-map,.ghg-statement').click(function(){
				$('.ghg-The-map,.ghg-The-law').css({
					 "display": "none"
				}),
				$('.ghg-myModel').css({
					"display": "none"
				})
			})
		}else{
			$('.ghg-map,.ghg-statement').click(function(){
				$('.ghg-The-map,.ghg-The-law').css({
					 "display": "block"
				}),
				$('.ghg-myModel').css({
					"display": "block"
				})
			})
		}
			
	});