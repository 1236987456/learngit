$(function(){
	// 菜单列表
	$(".slide-icon").click(function(){
		$(".menu-bar").slideToggle();
		if($(this).hasClass('close-icon')){
			$(this).removeClass("close-icon")
		}else{
			$(this).addClass("close-icon")
		}
	})
	// 分类点击
	$(".hover-boxs img").click(function(){
		$(this).next().next().fadeIn()
	});
	$(".hover-boxs .hover2").click(function(){
		$(this).fadeOut()
	});
	// 视频点击
	var video=document.getElementById("video");
	$(".con-two img").click(function(){
		$(".motai").fadeIn();
		video.play()
	});
	$(".close").click(function(){
		$(".motai").fadeOut();
		video.pause()
	});
	// 列表高度
	// var l=$(".search-left").height();
	// $(".search-right").css({
	// 	"height":l
	// });
	// $(window).resize(function(){
	// 	 l=$(".search-left").height();
	// 	$(".search-right").css({
	// 		"height":l
	// 	});

	// })
})