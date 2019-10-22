//给地图按钮换颜色
$('.map-btn').click(function(){
	$(this).addClass('active').siblings().removeClass('active')
	$(this).children('.map-a').addClass('active')
	$(this).siblings().children('.map-a').removeClass('active')
})

//拿到地图框
let mapBox =document.querySelectorAll('.allMap')
//拿到按钮
let btnList =document.querySelectorAll('.map-btn')
//拿到文章框
let textBox =document.querySelectorAll('.textBox')

//给文章切换
for(let i=0; i<btnList.length;i++){
	btnList[i].onclick= function(){
		for(var j=0;j<textBox.length;j++){
			textBox[j].classList.remove('active')
		}
		textBox[i].classList.add('active')
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

//
$('.map-btn').click(function(options){
	let index=$(this).index()
	if(index==0){
		 address({
			x:'114.066331',
			y:'22.608738',	
		})	
	}
	if(index ==1){
		 address({
			x:'114.061959',
			y:'22.543631'
		})
	}
	if(index ==2){
		 address({
			x:'114.066156',
			y:'22.610383'
		})
	}
	if(index ==3){
		 address({
			x:'114.066156',
			y:'22.610383'
		})
	}
	if(index == 4){
		 address({
			x:'114.042893',
			y:'22.528097'
		})
	}
})

///*邮箱验证*/
//$(function(){
//	$.extend($.validator,{
//			messages: {
//				required:"该字段不能为空必须.",
//				remote: "请输入有效日期（ISO）请修复此字段.", //远程 发送请求判断
//				email: "请输入正确的邮箱.",//邮箱字段
//				url: "请输入正确的地址.",//有效地址
//				dateISO: "请填写一个有效日期（ISO）.",//全球时间
//				number: "请输入有效数字.",//数字
//				digits: "请只输入数字.",//小数
//				equalTo: "请输入相同的字符.",//等于 例如密码相等
//				maxlength: $.validator.format( "请输入不超过{0}个字符." ),
//				minlength: $.validator.format( "请至少输入{0}个字符." ),
//				rangelength: $.validator.format( "请输入6-18位字符." ),
//				range: $.validator.format( "请输入介于{0}和{1}之间的值." ),//区间
//				max: $.validator.format( "请输入一个小于或等于{0}的值." ),
//				min: $.validator.format( "请输入一个大于或等于{0}的值." ),
//				step: $.validator.format( "请输入{0}的倍数." )
//			}
//			
//		});
//		
//		$('.form-email').validate({
//			//验证规则
//			rules: {
//				name:{
//					//表示该字段必填
//					required:true
//				},
//				homeName: {
//					required:true,
//					number:true
//				},
//				email: {
//					required:true,
//					email:true
//				},
//				pho: {
//					required:true,
//					tel:true
//				}
//				
//			}
//		})
//		//$.validate.addMethod(验证名字，验证方法，验证错误信息) 自定义验证
//		$.validator.addMethod('pho',function(value,element){
//			var reg =  /0?(13|14|15|17|18)[0-9]{9}/
//			return reg.test(value)
//			
//		},'请输入手机号')
//})
//邮箱提示
		$('.btn-box').click(function(){
			console.log(1)
			//获取姓名
			let name =$('[name =name]').val()
			//邮箱正则
			let reg= /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
			//获取电话号码
			let pho =$('[name=pho]').val()
			console.log(pho)
			//电话号码正则
			var regPho =/^1[356789]\d{9}$/
			//获取楼盘号
			let foolNum =$('[name= homeName]').val()
			//获取邮箱
			let email =$('[name =email]').val()
			
			if(!name){
				$.tooltip({
					type:'null',
					content:'请输入姓名',
					interval:'10000'
				})
				return;
			}
			if(!foolNum ){
				console.log(foolNum)
				$.tooltip({
					type:"null",
					content:'请输入楼盘号',
					interval:'3000'
				})
				return;
			}
			if(!email ){
				$.tooltip({
					type:'null',
					content:'请输入邮箱',
					interval:'3000'
				})
				return;
			}
			if( !reg.test(email)){
				$.tooltip({
					type:'null',
					content:'邮箱格式不正确',
					interval:'3000'
				})
				return;
			}
			if(!pho){
				$.tooltip({
					type:'null',
					content:'请输入电话号码',
					interval:'3000'
				})
				return;
			}
			if( !regPho.test(pho)){
				$.tooltip({
					type:'null',
					content:'电话号码格式不正确',
					interval:'3000'
				})
				return;
			}
			
			//用ajax 发送数据
			let api ="http://192.168.97.251:3000"
			console.log($('.form-email').valid())
			if($('.form-email').valid()){
				let name= $('[name=name]').val()
				let number =$('[name =homeName]').val()
				let email =$('[name =email]').val()
				let tel =$('[name =pho]').val()
				let message =$('[name =textarea]').val()
			
			$.ajax({
					type:"post",
					url:api+"/addmessage",
			//传送的数据需要为对象		
					data:{
						name,
						number,
						email,
						tel,
						message
					},
					dataType:'json',
					success:function(res){
						if(res.status==200){
							alert('发送成功')
						}else{
							alert('发送失败')
						}
					}
				});
			}
			
			
		})
		
		$('.xh-nev-btn').click(function(){
			let current =$('.current')
			let index =$(this).index()
			if(index ==0){
				current.html('练习方式')				
			}
			if(index ==1){
				current.html('下属公司')
			}
			if(index==2){
				current.html("客户服务")
			}
			$(this).addClass('on').siblings().removeClass('on')
		})
		
	


