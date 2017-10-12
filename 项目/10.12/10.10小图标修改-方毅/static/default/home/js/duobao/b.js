$(function(){

  $(".w_small_img li").hover(function(){

          $(this).addClass("active_img").siblings().removeClass("active_img");

          var li_width=$(this).outerWidth();
          //console.log(li_width)
          var li_left=$(this).position().left;
          //console.log(li_left)
          $(".w_modified").stop().animate({width:li_width,left:li_left},{duration:1500,easing:"easeOutElastic"});


     })


     $(".w_pluss_one").click(function(){

           var n = $(".text_input").val();
           var num = parseInt(n)+1;
           if(num==0){ return;}
           $(".text_input").val(num);



     })

    $(".w_subtracts_one").click(function(){

        var n = $(".text_input").val();
        var num = parseInt(n)-1;
        if(num==0){ return;}
        $(".text_input").val(num);
    });


    //
    //$(".choose_list .yiji_dd").find("a").click(function(){
    //
    //    var index = $(".choose_list .yiji_dd").find("a").index(this);
    //    //console.log(index)
    //    $.cookie("current", index,{ expires: 300, path: '/' });
    //    //$.cookie("current", index, { path: '/'});
    //    if ($.cookie("current")!= null){
    //        //获取记录的状态
    //        var num = $.cookie("current");
    //
    //        //console.log(num)
    //
    //        //var name = $(".choose_list .yiji_dd").find("a").eq(num).text();
    //
    //        //console.log(name)
    //
    //        //当前下标的元素添加样式
    //        $(".w_guide").append('<a>'+num+'</a>');
    //
    //    }
    //
    //})




    
})