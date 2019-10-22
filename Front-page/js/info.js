(function($,w){
	
		//options 对象
		// content 提示信息
		// type 表示提示的类型 null ，warn, success
		$.tooltip =function(options){

			
			var className =''
			if(options.type =='null'){
				className ='null'
			}else if(options.type == warn){
				className ='warn'
			}
			//填充内容
			//用$是为了清除时一个个的清除
			let infoBox =$(`<div class="info contact">
					<div class="info-title clearfix">
					<span class="pull-left">提示信息</span>
					<span class="pull-right close">X</span>
					</div>
					<div class="alert ${options.type}">${options.content}</div>
					</div>`)
			$('.email-rightBox').append(infoBox)
			
			$('.close').click(function(){
				infoBox.remove()
			})
			 window.timer = setTimeout(function(){
				infoBox.remove()
			},options.interval || 3000)
			
		}
})($,window)
