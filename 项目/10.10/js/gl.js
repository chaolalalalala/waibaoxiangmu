$(function(){
	
	
	var mySwiper = new Swiper('#swiper-container1', {
				slidesPerView : 4,
				watchSlidesProgress : true,
				watchSlidesVisibility : true,
	});
	
	
	$("#swiper-container1 .swiper-slide").click(function(){
		$("#swiper-container1 .swiper-slide").removeClass("active");
		$(this).addClass("active");
	});
	
//	setInterval(function(){
//		console.log($("#swiper-container1").css("marginLeft"));
//	},300);
	
	
});
