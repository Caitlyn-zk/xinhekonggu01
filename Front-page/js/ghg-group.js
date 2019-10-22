$('.hourse').mousemove(function(){
	// 小三角形出现
	$(this).find('.triangle').addClass('on')
	//给图片加加放大效果
	$(this).find('.land-img').addClass('on')
	//给字体放大增加效果
	$(this).find('.land-title').addClass('on')
})
$('.hourse').mouseleave(function(){
	$(this).find('.triangle').removeClass('on')
	$(this).find('.land-img').removeClass('on')
	$(this).find('.land-title').removeClass('on')
})
//手风琴
$('.accordion-title').click(function(){
	let next=$(this).next('.accordion-text')
	next.slideDown('fade')
	let parent=$(this).parents('.accordion').siblings()
	parent.find('.accordion-text').slideUp('fast')
	next.addClass('active')	
	
})

//
$('.accordion').click(function(){
	$(this).addClass('active')
	$(this).siblings().removeClass('active')
	let icon =$(this).find('.icon')
	if(icon.html()==='+'){
		icon.html('-')
	}else{
		icon.html('-')
	}
	
	$('.accordion').find('.icon').not(icon).html('+')
	
})

//tab 切换
//拿到图片
let jqImg =$('.sd-img')
console.log(jqImg)
// 拿到按钮
let accordion =$('.accordion')
//拿到隐藏图片
let hideImg =$('.sf-img-box-hide')
console.log(hideImg)
console.log(accordion)
for(let i =0; i<accordion.length;i++){
	accordion[i].onclick =function(){
		console.log(111)
		for(var j=0;j<jqImg.length;j++){
			jqImg[j].classList.remove('active')
		}
		for(var k=0; k<hideImg.length;k++){
			hideImg[k].classList.remove('on')
		}
		jqImg[i].classList.add('active')
		hideImg[i].classList.add('on')
	}
}
	$('.xh-nev-btn').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	})







