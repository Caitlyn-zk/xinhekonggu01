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
//for(let i=0;i<btnList.length;i++){
//	btnList[i].onclick =function(){
//		for(var j=0;j<mapBox.length;j++){
//			mapBox[j].classList.remove('active')
//		}
//		//移除每个文章栏的active
//		for(let k=0; k<textBox.length;k++){
//			textBox[k].classList.remove('active')
//		}
//		//为点击的增加active
//		textBox[i].classList.add('active')
//		mapBox[i].classList.add('active')
//	}
//}
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

/*邮箱验证*/
$(function(){
	$.extend($.validator,{
			messages: {
				required:"该字段不能为空必须.",
				remote: "请输入有效日期（ISO）请修复此字段.", //远程 发送请求判断
				email: "请输入正确的邮箱.",//邮箱字段
				url: "请输入正确的地址.",//有效地址
				dateISO: "请填写一个有效日期（ISO）.",//全球时间
				number: "请输入有效数字.",//数字
				digits: "请只输入数字.",//小数
				equalTo: "请输入相同的字符.",//等于 例如密码相等
				maxlength: $.validator.format( "请输入不超过{0}个字符." ),
				minlength: $.validator.format( "请至少输入{0}个字符." ),
				rangelength: $.validator.format( "请输入6-18位字符." ),
				range: $.validator.format( "请输入介于{0}和{1}之间的值." ),//区间
				max: $.validator.format( "请输入一个小于或等于{0}的值." ),
				min: $.validator.format( "请输入一个大于或等于{0}的值." ),
				step: $.validator.format( "请输入{0}的倍数." )
			}
			
		});
		
		$('.form-email').validate({
			//验证规则
			rules: {
				name:{
					//表示该字段必填
					required:true
				},
				homeName: {
					required:true,
					number:true
				},
				email: {
					required:true,
					email:true
				},
				pho: {
					required:true,
					tel:true
				}
				
			}
		})
		//$.validate.addMethod(验证名字，验证方法，验证错误信息) 自定义验证
		$.validator.addMethod('pho',function(value,element){
			var reg =  /0?(13|14|15|17|18)[0-9]{9}/
			return reg.test(value)
			
		},'请输入手机号')
})
$('.form-submit').click(function(){
	let api ="http://192.168.97.251:3000"
	if($('.form-email').valid()){
		let name= $('[name=name]').val()
		let homeName =$('[name =homeName]').val()
		let email =$('[name =email]').val()
		let pho =$('[name =pho]').val()
		let textareaOne =$('[name =textarea]').val()
		$.ajax({
			type:"post",
			url:api+"addMessge",
			async:true,
			dataType:'json',
			success:function(data){
				if(status==200){
					alert('发送成功')
				}else{
					alert('发送失败')
				}
			}
		});

	}
		
	
})

