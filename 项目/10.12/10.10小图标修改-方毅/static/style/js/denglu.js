$(function() {
	/*$(".mask_wrap_close").click(function () {
		$(".all_mask").hide();
			$(".all_mask_loginbox").hide();
	});
	function loginpop(){
		$(".all_mask").show();
			$(".all_mask_loginbox").show();

	}*/
	var bhei = $("body").height();
	$(".all_mask").height(bhei);
	$(".nav_hover").hover(function () {
		$(this).find(".nav_xiala").show()
		$(this).find(".nav_xiala2").show()
	},function () {

		$(this).find(".nav_xiala").hide()
		$(this).find(".nav_xiala2").hide()
	});
});
