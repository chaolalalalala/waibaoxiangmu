$(function(){
	
//	
	
	function tim(year,month,day,hour,minute,second){
		
		var endtime = new Date(year,month-1,day,hour,minute,second);
		var endTime = endtime.getTime();
		
		var newTime = new Date();
		var djs = (endTime-newTime)/1000;
		
		
		
//		秒
		var mm = parseInt(djs%60);
//		分
		var fen = parseInt(djs/60%60);
//		时
		var hh = parseInt(djs/60/60%60);
//		天
		var day = parseInt(djs/60/60/24);
		
		
		if(mm<=0){
			mm = "00";
		}
		if(fen<=0){
			fen = "00";
		}
		if(hh<=0){
			hh = "00";
		}
		if(day<=0){
			day = "00";
		}
		
		if(mm<10 && mm!='00'){
			mm = "0"+mm;
		};
		if(fen<=10 && fen!='00'){
			fen = '0'+fen;
		};
		if(hh<=10 && hh!='00'){
			hh = '0'+hh;
		};
		if(day<=10 && day!='00'){
			day = '0'+day;
		};
		
		
		$(".timedj span:eq(0)").html(day);
		$(".timedj span:eq(1)").html(hh);
		$(".timedj span:eq(2)").html(fen);
		$(".timedj span:eq(3)").html(mm);
		
	}
	
	
//	传入活动结束日期
	tim(2017,9,24,9,58,00);
	var timer = setInterval(function(){
		tim(2017,9,24,9,58,00);
	},1000);
});
