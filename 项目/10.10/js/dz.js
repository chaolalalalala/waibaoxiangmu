$(function() {

	//添加减少
	$("form .add").click(function() {
		var num = $(this).next().html();
		num--;
		if(num <= 0) {
			num = 0;
		}
		$(this).next().html(num);
	});

	$("form .remo").click(function() {
		var num = $(this).prev().html();
		num++;
		if(num >= 99) {
			num = 99;
		}
		$(this).prev().html(num);
	});

	//	选择房间车辆
	$("form .fangjian .fj").click(function() {
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			
		}else{
			$("form .fangjian .fj").removeClass("active");
			$(this).addClass("active");
		}
		
//				$("form .fangjian .fj").removeClass("active");
//		$(this).addClass("active");
	});

	$("form .car .xzcat span").click(function() {
		
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			
		}else{
			$("form .car .xzcat span").removeClass("active");
			$(this).addClass("active");
		}
//		$("form .car .xzcat span").removeClass("active");
//		$(this).addClass("active");
	});

	$(".ysno .ye").click(function() {
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(".ysno .ye").removeClass("active");
			$(this).addClass("active");
		}
//		$(this).addClass("active");
	});



	//	验证码

	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', '0',
		'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	];

	var y = function(){
		var yzm = [];
		for(var i = 0; i < 4; i++) {
			var inde = Math.ceil(Math.random() * 25);
			yzm.push(arr[inde]);
		}
		return yzm;
	};
	$("form .yanzhengma .ht").html(y);
	$("form .yanzhengma div").click(function(){
		$("form .yanzhengma .ht").html(y);
	});
});