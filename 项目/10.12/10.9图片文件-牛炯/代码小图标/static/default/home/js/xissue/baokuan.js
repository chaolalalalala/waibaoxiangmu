/**
 * Created by Administrator on 2017/2/13.
 */
//今日爆款
$.ajax({
    type: "get",
    url:"//dalicai.jd.com/hot",
    dataType:"jsonp",
    jsonp: "callback",
    success: function( data ){
        if( data && data.length > 0 ){
            var visibleProduct = data[ 0 ];
            var purseAmount = visibleProduct.purchase_amount;
            if( purseAmount != "1000万元以上" ){
                purseAmount += "元";
            }
            if( !visibleProduct ){
                viewSoldOut();
                return ;
            }
            var item_yield = visibleProduct.item_yield;
            var purchase_amount = purseAmount;
            if( visibleProduct.type == "jklc" ){
                $("#item_yield").addClass("xjk-num").html( item_yield + "<span>%</span>" );
            }else{
                $("#item_yield").html( item_yield + "<span>%</span>" );
            }
            //在理财首页和大理财都会用到这个 所以区分开来 licaiIndex表示是理财首页
            var investPeriod_html = "";
            if( visibleProduct.type == "jklc" || visibleProduct.type == "xblc" ){
                investPeriod_html = visibleProduct.invest_period;
            }else if( visibleProduct.type == "bxlc" ){
                investPeriod_html = "锁定期限"+visibleProduct.invest_period+"天</span>";
            }else{
                investPeriod_html = "理财期限"+visibleProduct.invest_period+"天</span>";
            }
            $("#history").html( investPeriod_html );
            $("#purchase_amount").html( "剩余可投"+purchase_amount );
            $("#item_name").html(visibleProduct.tips);
            var productType = visibleProduct.type;
            var productId = visibleProduct.id;
            if( visibleProduct.type == "jklc" ){
                $.ajax({
                    type: "get",
                    url:"//trade.jr.jd.com/myxjk/checkUserXJKStatus.action",
                    dataType:"jsonp",
                    jsonp: "callback",
                    success: function( data ){
                        $("#now-zhuan").attr("href",data.xjkUrl).attr("clstag","jr|keycount|jr_dalicai|bk_"+productType+"_"+productId);
                    }
                });
            }else{
                $("#now-zhuan").attr("href",visibleProduct.url).attr("clstag","jr|keycount|jr_dalicai|bk_"+productType+"_"+productId);
            }
        }else{
            viewSoldOut();
        }
    }
});

//已经售磬
function viewSoldOut(){
    $("#day-bao").addClass("sold-out");
    var rounds = $("#day-bao").children(".rounds:eq(0)");
    $(rounds).addClass("sold-out-text");
    $(rounds).children(".history").html("");
    $(rounds).children(".shou-num").html("已售罄");
    $(rounds).children(".tou-day").html("爆款产品 敬请期待");
    $("#now-zhuan").addClass("appoint-zhuan").html("预约赚钱").attr("href","//yue.jr.jd.com/yuyue/appointment.htm").attr("clstag","jr|keycount|jr_dalicai|lclb_lcyy");
    $("#now-zhuan").after('<p class="sheng your-mine">理财期限、收益随你定</p>')
}

function formatCurrency( num ){
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num)){
        num = "0";
    }
    var sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    var cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10){
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++){
        num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
    }
    return (((sign)?'':'-') + num );
}