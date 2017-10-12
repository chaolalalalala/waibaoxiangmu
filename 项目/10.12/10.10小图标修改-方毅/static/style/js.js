//var loc = location.href.split(':');  if(loc[0]=='http') {  location.href='https:'+loc[1];     }


		/**
 * Created by john on 2017/5/30.
 */
var num=0;
var timer;
$('.box').hover(function(){
    //$('.box3').show();
    clearInterval(timer);
},function(){
    //$('.box3').hide();
    timer =setInterval(function(){
        $('.you').click()
    },7000)
}).mouseleave();
var len = $(".box2 li").length;
var liw = 100/len + "%";
$(".box2 li").css("width",liw);
var wlen = $(".box2 li").length * 100 + "%";
$(".box2").css("width",wlen);

$('.zuo').click(function(){
    var len = $(".box2 li").length;
    num--;
    if(num < 0) num=len-1;
    animate2()
});
$('.you').click(function(){
    var len = $(".box2 li").length;
    //console.log(len);

    num++;
    if(num>=len) num=0;
    console.log(num);
    animate2()
});
$('.box4 span').click(function(){

    $('.box4 span').removeClass('bianse');
    $(this).addClass('bianse');
    num = $(this).index();
    animate2()
});
function animate2(){
    //var Owidth = $(".box2 li").width();
    //$('.box2').stop(true).animate({left:-Owidth*num});
    var wlen = $(".box2 li").length * 100 + "%";
    $(".box2").css("width",wlen);
    var liw = 100/len + "%";
    $(".box2 li").css("width",liw);
    var Owidth = $(".box2 li").width();
    $('.box2').stop(true).animate({left:-Owidth*num});
    $('.box4 span').removeClass('bianse');
    $('.box4 span').eq(num).addClass('bianse');
}
