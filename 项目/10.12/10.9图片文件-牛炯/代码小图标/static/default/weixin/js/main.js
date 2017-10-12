/**
 * Created by Administrator on 2017/3/25.
 */


getMarketList();
setInterval('refreshMarket()',1000);

function getMarketList(){

    $.ajax({
        type: 'get',
        url: host_api + '/weixin/index/marketlist',
        data: {},
        success: function (res) {

            //console.log('===================');
            //console.log(res.constructor);
            //res = JSON.parse(res);
            if(!res || (res.status == 0) ){
                console.log('req data error ');
                return;
            }

            marketList = res.info;
            console.log(marketList);
            var htmlContent = '';
            $.each(res.info, function (n, value) {
                htmlContent += (n == selectedItemIndex) ? '<li class="sw_active"' : '<li ' ;
                htmlContent += 'id="menu_' + value.name + '"><a href="javascript:;">' + value.name + '</a></li>';
            });
            $("#product_switch").html(htmlContent);

        },
        error: function (data) {
            //location.reload(); //marked_by_liang
            console.log('req  error');
        }
    });

}

function refreshMarket(){

    var param = {};

    try{
        param = {market:marketList[selectedItemIndex].name};
    }
    catch (e){

    }

    $.ajax({
        type: 'post',
        url: host_api + '/weixin/index/marketinfo',
        data: param,
        success: function (res) {

            //res = JSON.parse(res);
            if(!res || (res.status == 0) ){
                console.log('req data error ');
                return;
            }

            console.log(res);

            $('#optionname').html(res.info.title);
            $('#now_price').html(res.info.new_price);

            $('#market_msg .zuoshou_').html(res.info.time);
            $('#market_msg .height_').html(res.info.max_price);
            $('#market_msg .low_').html(res.info.min_price);

            if( lastMarket && lastMarket.new_price > res.info.new_price){
                $('#now_price').removeClass('up_price').addClass('down_price');
            }
            else {
                $('#now_price').removeClass('down_price').addClass('up_price');
            }
            lastMarket = res.info;

            //设置购买页面时间
            $('#now_time').html(res.info.time);
            //设置购买页面当前价格
            $('#flow_span_value').html(res.info.new_price);
        },
        error: function (data) {
            //location.reload(); //marked_by_liang
            console.log('req  error');
        }
    });
}

//设置收益
function set_shouyi(){
    times = $(".swiper-slide-active h4 span").html();
    times = times.replace(" ", "");
    times = parseInt(times);

    var money = $(".slct p i").text();
    if (money == '') {
        money = $("#input_money").val();
    }
    var bili = set_profit(times);
    $("#input_money").val(money);
    $('.active h1 b').text(money);
    var yuqi = 0;
    var yuqi = money * bili;
    // 这里检查是否使用了券，如果使用了增益券，价格需要增加
    yuqi = yuqi * vue.get_bili();

    yuqi = parseFloat(yuqi) + parseFloat(money);
    yuqi = Math.floor(yuqi);
    $('.active h1 i').html('预期收益：<span>' + yuqi + '</span>元');
}

function setPage(type){
    //设置订单方向
    if(type == 'buy'){
        //买
        $('#flow_span_dir').html('<font color="red">买涨</font>');
    }
    else {
        //卖
        $('#flow_span_dir').html('<font color="green">买跌</font>');
    }

    //设置购买金额 预期收益 资产类型 结算周期
    

}

/*
 * ##click action lists
 * #### up - 买涨
 */
$(".up").on("click", function () {

    $(".active ul").find('li').siblings().removeClass('slct');
    $(".active ul").find('li').eq(4).addClass('slct');

    setPage('buy');
    $('#buildBox').show();

});


//买跌
$(".down").on("click", function () {
    $(".active ul").find('li').siblings().removeClass('slct');
    $(".active ul").find('li').eq(4).addClass('slct');


    setPage('sell');
    //set_shouyi();
    $('#buildBox').show();
    //pop_Open();
    //set_order_message();
});

$(".back").on("click", function () {
    $('#buildBox').hide();
    $('#buildConfirm').hide();
});










