$(function(){
	
//	选择订单
	$(".indentlist .xuanze").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
	
//	全选
	$($("footer ul li:eq(0)")).click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".indentlist .xuanze").removeClass("active");
		}else{
			$(this).addClass("active");
			$(".indentlist .xuanze").addClass("active");
		};
	});
	
	
	$(".indentlist .clixg").click(function(){
		$(".recompose").addClass("active");
	});
	
	$(".recompose .remove").click(function(){
		$(".recompose").removeClass("active");
	});
	
})
