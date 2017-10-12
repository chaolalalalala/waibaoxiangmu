$(function() {
	//	验证码

	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', '0',
		'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	];

	var y = function() {
		var yzm = [];
		for(var i = 0; i < 4; i++) {
			var inde = Math.ceil(Math.random() * 25);
			yzm.push(arr[inde]);
		}
		return yzm;
	};
	$("form .yanzhengma .ht").html(y);
	$("form .yanzhengma div").click(function() {
//		if($("form .yanzhengma .ht").text() ==""){
//			$("form .yanzhengma div img").addClass("active");
//		}else{
//			$("form .yanzhengma div img").removeClass("active");
//		}
		$("form .yanzhengma div img").addClass("active");
		$("form .yanzhengma .ht").html(y);
		
		
		if($("form .yanzhengma .ht").text()!=""){
			setTimeout(function(){
				$("form .yanzhengma div img").removeClass("active");
			},300);
		}
		
		
	});
	
	
});