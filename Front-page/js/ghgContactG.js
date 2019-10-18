//给地图按钮换颜色
$('.map-btn').click(function(){
	$(this).addClass('active').siblings().removeClass('active')
	$(this).children('.map-a').addClass('active')
	$(this).siblings().children('.map-a').removeClass('active')
})

//拿到地图匡
let mapBox =document.querySelectorAll('.allMap')
//拿到按钮
let btnList =document.querySelectorAll('.map-btn')
//拿到文章框
let textBox =document.querySelectorAll('.textBox')
//给每个按钮添加点击事件
for(let i=0;i<btnList.length;i++){
	btnList[i].onclick =function(){
		for(var j=0;j<mapBox.length;j++){
			mapBox[j].classList.remove('active')
		}
		//移除每个文章栏的active
		for(let k=0; k<textBox.length;k++){
			textBox[k].classList.remove('active')
		}
		//为点击的增加active
		textBox[i].classList.add('active')
		mapBox[i].classList.add('active')
	}
}
//拿到按钮 
let addressBtn =document.querySelectorAll('.address-name')
//拿到切换盒子
let addressBox =document.querySelectorAll('.addressBox')
for(let i=0;i<addressBtn.length;i++){
	addressBtn[i].onclick= function(){
		for(var j=0;j<addressBox.length;j++){
			//给按钮和盒子都移除css效果
			addressBox[j].classList.remove('active')
			addressBtn[j].classList.remove('active')
		}
		addressBox[i].classList.add('active')
		addressBtn[i].classList.add('active')
	}
}
$(function(){
	let scrollTop =document.body.scrollTop || document.documentElement.scrollTop
	//拿到tab 按钮
$('.xh-nev-btn').click(function(){
	//获取scrollTop
	//获取下标
	let index =$(this).index()
	if(index==1){
		console.log($('.mapBox').offset().top)
		$('html').animate({
			scrollTop:$('.mapBox').offset().top
		},800)
	}
	if(index==2){
		$('html').animate({
			scrollTop:$('.bottomBox').offset().top
		},800)
	}
})
})
$('.contact-btn').click(function(){
	$(this).addClass('on').siblings().removeClass('on')
})


