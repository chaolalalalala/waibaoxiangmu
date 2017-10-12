function get_friends()  
{  
         $.ajax({  
             type: "get",  
             async: false,  
             url: "http://m.wogaogongyi.com.cn/api/get_new_win60/uid-"+uid,  
             dataType: "jsonp",  
             success: function(data){
				if(data.count > 0){
					$("#friends").append('<i class="friends_tip" style="display: block;background:#f00;border-radius:50%;width: 0.6em;height: 0.6em;top: 5px;right:-0.2em;position:absolute;margin-right: 45%;"></i>');
				}
             },  
             error: function(){   
             }  
         });  
}
function show_price(){	
	var nowprice = $("#now_price").html();
	if(nowprice=='0.00'){
		//window.location.reload();
	}
}

$(document).ready(function(){

	 /* setInterval(function(){
        ajaxCurl("POST","/Wap/trading/setmin",'',true,function(res){});
      },60000);//定时 五秒
	  */
	  
  	//1:请求资产类型
  	ajaxCurl("GET","/Wap/trading/getCapitalTypes",'',true,function(res){
        res = [
            {
                "id": 1,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 0,
                "product_key": "hot",
                "product_name": "热门资产",
                "capital_type": 0,
                "capital_key": "EURUSD",
                "capital_name": "欧元/美元",
                "capital_time": 0,
                "flag": 1,
                "sort": 3
            },
            {
                "id": 2,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 0,
                "product_key": "hot",
                "product_name": "热门资产",
                "capital_type": 0,
                "capital_key": "USDJPY",
                "capital_name": "美元/日元",
                "capital_time": 0,
                "flag": 1,
                "sort": 1
            },
            {
                "id": 3,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 0,
                "product_key": "hot",
                "product_name": "热门资产",
                "capital_type": 0,
                "capital_key": "GBPUSD",
                "capital_name": "英镑/美元",
                "capital_time": 0,
                "flag": 1,
                "sort": 1
            },
            {
                "id": 1,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 1,
                "product_key": "cyp",
                "product_name": "货币对",
                "capital_type": 0,
                "capital_key": "BTCCNY",
                "capital_name": "比特币",
                "capital_time": 0,
                "flag": 1,
                "sort": 3
            },
            {
                "id": 4,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 1,
                "product_key": "hj",
                "product_name": "货币对",
                "capital_type": 0,
                "capital_key": "HJRMB",
                "capital_name": "黄金",
                "capital_time": 0,
                "flag": 1,
                "sort": 3
            },
            {
                "id": 5,
                "trade_type": 0,
                "trade_name": "标准",
                "product_type": 1,
                "product_key": "by",
                "product_name": "货币对",
                "capital_type": 0,
                "capital_key": "BYRMB",
                "capital_name": "白银",
                "capital_time": 0,
                "flag": 1,
                "sort": 3
            }
        ];
	  //存储资产列表 此为全局变量
      window.param.CapitalList = res;
	  //2:加载热门资产
	  setCapitalList("hot");
	  //画图
	  setTimeout(function(){
		drawKline(getCapitalTypeById("sw_active"), getDiffById("time_diff"), "svgId", "", "deal_value");
	  },1000);
	  setExpirationTime('time_menu');
	  setExpirationTime('time_menu1');
	});
   window.setInterval(function() {show_price();}, 10000);
//get_friends();
  //window.setInterval(function() {get_friends();}, 10000);
});
  
