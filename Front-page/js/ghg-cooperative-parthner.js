//按钮滑动封装
//let time = null
//$('.xh-nev-btn').mousemove(function(){
//	clearInterval(time)
//	$(this).find('.nav-span').addClass('active')
//	$(this).find('.nav-span').css({
//		width: '100%'
//	})
//})
//$('.xh-nev-btn').mouseleave(function(){
//	let spanWid=$(this).find('.nav-span').width()
//	console.log(spanWid)
//	 time= setInterval((e)=>{
//		spanWid--
//		$(this).find('.nav-span').width(spanWid) 
//		if(spanWid<=0){
//			$('.nav-span').removeClass('active')
//			clearInterval(time)
//		 }
//	},20)
//})

//按钮封装
//$('.xh-nev-btn').mousemove(function(){
//	$(this).find('.nav-span').animate({
//		width: '0px'
//	},300,function(){
//		console.log()
//		$(this).find('.nav-span').animate({
//			width: '100%'
//		})
//	})
	
//})

//tab 切换 
//文字切换
$('.xh-nev-btn').click(function(){
	let parentEle=$(this).parents('.main-cooperrative')
	let index =$(this).index()
	console.log(index)
//	$(function(){
//	$(this).addClass('on').siblings().removeClass('on')
//	})
	$(this).addClass('on').siblings().removeClass('on')
	let h1 =parentEle.find('.textChange').children('h1')
	 let h2=parentEle.find('.textChange').children('h2')
	if(index ==0){
		
		let h1Html ='<p>星河控股集团</p>'
		let h2Html ='<p>星河控股集团成立于1988年，现有地产、金融、产业、商置、物业五大业务集团<p/>'
		h2.html(h2Html)	
		h1.html(h1Html)
		
	}
	if(index ==1){
	let	h1Html ='<p>星河地产集团</p>'
	
	let	h2Html ='<p>星河地产集团已开发面积超过5000万平方米，土地储备面积逾3300万平方米，<br>作为深圳创新投资集团、深圳福田银座村镇银行第二大股东，<br>阳光保险、天津津融资产管理有限公司重要股东，前海母基金、国家中小企业发展基金有限合伙人。<br>已逐步形成股权投资、债权投资、基金管理三大业务板块.</P>'			
	h1.html(h1Html)
	h2.html(h2Html)	
	}
	if(index ==2){
		let h1Html ='<p>星河金融控股集团 </P>'
		let h2Html ='<p>星河金融控股集团自有资金投资超人民币200亿元，<br>拥有产融联盟新城、双创社区、特色小镇三条重要产品线，创新“产城投融”运营模式，<br>致力于打造“留产业、留人才、留税收”的产业高地。<br>产融联盟新城代表作深圳星河WORLD，截至目前已签约企业超500家（含14家500强企业、30家上市企业）；<br>双创社区管理运营面积约60,000平方米，目前入孵创业团队逾200家。</p>'
		h1.html(h1Html)
		h2.html(h2Html)		
	}
	if(index==3){
		let h1Html ='<p>星河商置集团 </P>'
		let h2Html ='<p>拥有产融联盟新城、双创社区、特色小镇三条重要产品线，创新“产城投融”运营模式，<br>致力于打造“留产业、留人才、留税收”的产业高地。<br>双创社区管理运营面积约60,000平方米，目前入孵创业团队逾200家。<br>产融联盟新城代表作深圳星河WORLD，截至目前已签约企业超500家（含14家500强企业、30家上市企业）；<br>双创社区管理运营面积约60,000平方米，目前入孵创业团队逾200家。</p>'
		h1.html(h1Html)
		h2.html(h2Html)	
	}
	if(index ==4){
		let h1Html ='<p>星河物业集团 </P>'
		let h2Html ='<p>作为“商业地产价值链整合资产运营商”。<br>旗下商业管理公司星河商置（新三板代码：839819）具备15年专业商业运营经验。<br>管理规模超200万平方米，积累逾1,000个商业品牌资源。</p>'
		h1.html(h1Html)
		h2.html(h2Html)
	}
	if(index ==5){
		let h1Html ='<p>星河商置集团 </P>'
		let h2Html ='<p>作为“商业地产价值链整合资产运营商”，<br>旗下商业管理公司星河商置（新三板代码：839819）具备15年专业商业运营经验，<br>管理规模超200万平方米，积累逾1,000个商业品牌资源。</p>'
		h1.html(h1Html)
		h2.html(h2Html)
	}
})
//tab 表格切换
//获取按钮
let btnList = document.querySelectorAll('.xh-nev-btn')
console.log(btnList)
//获取滑动盒子
let slidebox= $('.slideBox')
//获取每个图片的宽度
let liWid= slidebox.find('.tab-li').eq(0).width()
//获取滑动盒子
let tabList = document.querySelectorAll('.tab-li')
console.log(tabList)
let ulEle= slidebox.find('ul')
//为每个按钮点击事件
for(let i=0;i<btnList.length;i++){
	btnList[i].onclick= function(){
		//获取被点击按钮的下标
	let index= $(this).index()
	console.log(index)
	//ul向左移动一个li的宽度
	ulEle.animate({
		left:-liWid*index
	})
	}
}











