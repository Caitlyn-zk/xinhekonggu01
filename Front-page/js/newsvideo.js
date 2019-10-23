let api = "http://192.168.97.251:3000/video/"
$(function(){
		$.ajax({
			type:'post',
			url:"http://192.168.97.251:3000/getvideo",
			dataType:"json",
		
			success:function(res){
				console.log(res)
				console.log($('.ghg-showvideo'))
				
				let newsvideo=$('.ghg-showvideo');
				let str=``;	
				let stri=``;	
				for (let item of res.data) {
					
					
					stri  +=`<li class="ghg-news-videoli" data-toggle="modal" data-target="#myModal${item.id}">
								<a videohref="http://www.chngalaxy.com/en/upload/file/2018-11-13/7581ec6d-3ef4-46c3-b2f6-24908d8c3542.mp4">
									<img class="ghg-image" src="${api+item.videoImg}" style="width: 100%;" />
									<div class="ghg-picture-news ghg-font-18">星河控股集团资料片</div>
								</a>
							</li>`
				}
				newsvideo.append(stri);

				
				$(".ghg-showvideo").on("click",".ghg-news-videoli",function(){
					let videoId = $(this).attr("data-target").substr(8)
					let index = $(this).index()
					
					
					let html = `
					<div class="modal ghg-modal-video01 fade" id="myModal${videoId}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
						<div class="modal-dialog" role="document">
							<div class="modal-content ghg-video-content">
								<div class="modal-body ghg-video-body">
									<button type="button" class="close ghg-btn-modal" data-dismiss="modal" aria-label="Close">
										<span class="glyphicon glyphicon-remove"></span>
									</button>
									<video class="vidoes" width="570" controls="controls" autoplay="autoplay">
										<source src="${api+res.data[index].video}" type="video/mp4">
										<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
											<param name="movie" value="myvideo.swf" />
											<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
										</object> 当前浏览器不支持 video直接播放，点击这里下载视频：
										<a href="${api+res.data[index].video}">下载视频</a>
									</video>
								</div>
							</div>
						</div>
					</div>`
					$('.ghg-video-modal').append(html)
					
				})
				
			}
		})
	})

$.ajax({
	
	type:"post",
	url:"http://192.168.97.251:3000/getnews",
	dataType:'json',
	success:function(res){
		
		let news=$(".ghg-imgList")
		console.log(res)
		let html=''
		console.log(res.data)
		for(let item of res.data){
//			<img src="http://192.168.97.251:3000/news/${item.img}"/>
		console.log(item.img)
						html+=`
						<div class="ghg-newsBox">
							<img class="ghg-image" src="http://192.168.97.251:3000/news/${item.img}" />
					 		    <div class="ghg-newsdetial">
					 		    	<div>${item.text}</div>
					 		    </div>
						</div>`
		}
		news.html(html)

	}
});


//$('').Click(function(){
//	
//})
//	let classify=1
//	let page=1
//	let count =10
$.ajax({
	type:"post",
	url:"http://192.168.97.251:3000/getdynamic",
	dataType:'json',
//	data:{
//		classify,
//      page,
//      count
//	}
	success:function(res){
		
		let news=$(".ghg-animate")
		console.log(res)
		let html=''
		console.log(res.data)
		for(let item of res.data){
//			<img src="http://192.168.97.251:3000/news/${item.img}"/>
		console.log(item.img)
						html+=`
						<div class="ghg-newsBox">
							<img class="ghg-image" src="http://192.168.97.251:3000/dynamic/${item.img}" />
					 		    <div class="ghg-newsdetial">
					 		    	<div>${item.text}</div>
					 		    </div>
						</div>`
		}
		news.html(html)

	}
});




      // $('.buttonText').text(a)

//$.ajax({
//	type:"post",
//	url:"http://192.168.97.251:3000/getdynamic",
//	dataType:'json',
//	data:{
//		classify,
//      page,
//      count
//	}
//	success:function(res){
//		
//		let news=$(".ghg-animate")
//		console.log(res)
//		let html=''
//		console.log(res.data)
//		for(let item of res.data){
////			<img src="http://192.168.97.251:3000/news/${item.img}"/>
//		console.log(item.img)
//						html+=`
//						<div class="ghg-newsBox">
//							<img class="ghg-image" src="http://192.168.97.251:3000/dynamic/${item.img}" />
//					 		    <div class="ghg-newsdetial">
//					 		    	<div>${item.text}</div>
//					 		    </div>
//						</div>`
//		}
//		news.html(html)
//
//	}
//});


