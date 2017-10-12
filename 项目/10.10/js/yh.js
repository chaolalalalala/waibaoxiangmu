$(function(){
	$(".topnav ul li").click(function() {
		$(".topnav ul li").removeClass("active")
		$(this).addClass("active");
	});
	
	
	
	//回到顶部
	
	$(".totop").click(function(){
		$("body").animate({
			"scrollTop":0
		},300);
	});
	
	
	
//	当地旅游点击样式
	$(".xiangqingclick ul li").click(function(){
		$(".xiangqingclick ul li .ddclick").removeClass("active");
		$(this).find(".ddclick").addClass("active");
	});
	
//首页点击样式
	$(".yinyclick").click(function(){
		$(".dwac").removeClass("active");
		$(this).find(".dwac").addClass("active");
	});
	
	
//	评分
	$(".chrome i").click(function(){
		
		var index = $(this).index();
		$(".chrome i").removeClass("active");
		for(var j=0;j<=index;j++){
			$(".chrome i:eq("+j+")").addClass("active");
		}
	});
	
	
	
//	<!--		美国东海岸-->
	$(".dhacli li").click(function(){
		$(".dhacli li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".xhacli li").click(function(){
		$(".xhacli li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	$(".jnd li").click(function(){
		$(".jnd li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".xwy li").click(function(){
		$(".xwy li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	$(".calendar-week .item").click(function(){
		$(".calendar-week .item").removeClass("active");
		$(this).addClass("active");
	});
	
	console.log(parseFloat($(".calendar-date .item").css("width")))
	console.log(parseInt($("body").css("width")));
	console.log(parseInt($(".calendar").css("width")));
	var a = parseFloat($(".calendar-date .item").css("width"))/100;
	console.log(a)
	var b = parseInt($("body").css("width"));
	console.log(b)
	var c = parseInt($(".calendar").css("width"))/100 * b * a -2 + 'px';
	console.log(c)
	$(".calendar-date .item").css("height",c);
	$(".calendar-date .item").css("lineHeight",c);
});




