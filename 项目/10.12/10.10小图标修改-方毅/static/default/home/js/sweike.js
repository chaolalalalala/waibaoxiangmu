$(function(){

    $(".fenlei1").hover(function(){
        $(this).css("background-color","#f90");
        $(this).children().css("color","#fff");
    },function(){
        $(this).css("background-color","#efefef");
        $(this).children().css("color","#666");
    });

    $(".erji").hover(function(){
        $(this).css("background-color","#f90");
        $(this).children().css("color","#fff");
    },function(){
        $(this).css("background-color","#efefef");
        $(this).children().css("color","#666");
    });
    $(".san_foot").hover(function(){
        $(this).css("background-color","#f90");
        $(this).children().css("color","#fff");
    },function(){
        $(this).css("background-color","#efefef");
        $(this).children().css("color","#666");
    });

    $(".classoption div").hover(function(){
        $(this).css("background-color","#f90");
        $(this).children().css("color","#fff");
    },function(){
        $(this).css("background-color","#efefef");
        $(this).children().css("color","#666");
    });



       var a = $(".itemr_top_li").length;
    //console.log("a"+a)
         if(a > 3 ){

             $(".topnoorg:gt(2)").css({
                 "font-size": "14px",
             "font-weight": "700",
             "color": "#888",
             "font-style": "italic",

             });
         }




})

