function movesay_init(){
    //初始化四个frame
    var header = $api.byId('title1');
    var headerPos = $api.offset(header);
    var body_h = getWinHight();
    var footer_h = $api.offset($api.byId('footer')).h;
    var width     = getWinWidth();
        openFrame({
            name: 'ms_main1',
            url: aurl('wap/main/main1'),
            bgColor: '#eaedf4',
            scrollEnabled:false,
            rect:{x:0, y:headerPos.h, w:width, h:body_h - headerPos.h - footer_h},
        });

        openFrame({
            name: 'ms_main2',
            url: aurl('wap/main/main2'),
            bgColor: '#eaedf4',
            scrollEnabled:false,
            hide:1,
            rect:{x:0, y:headerPos.h, w:width, h:body_h - headerPos.h - footer_h},
        });

        openFrame({
            name: 'ms_main3',
            url: aurl('wap/main/main3'),
            bgColor: '#eaedf4',
            scrollEnabled:false,
            hide:1,
            rect:{x:0, y:headerPos.h, w:width, h:body_h - headerPos.h - footer_h},
        });

        openFrame({
            name: 'ms_main4',
            url: aurl('wap/main/main4'),
            bgColor: '#eaedf4',
            scrollEnabled:false,
            hide:1,
            rect:{x:0, y:headerPos.h, w:width, h:body_h - headerPos.h - footer_h},
        });
}


//跳到我的
function chose_tab(index){
    //alert("chose_tab come "+index);
    randomSwitchBtn($api.byId('tabbar' + index), index);
}
var last_index = 1;
function randomSwitchBtn(obj, index,forceLogin) {
    //art(index);
    //alert(index);
    if(index == 4 && !chkLogin(forceLogin)){
        //判断登录
        return;
    }

    if(index >= 1 && index <= 4){
        mem("TABID",index);
    }

    if( $('#title'+last_index).html() == null ){
        //在iframe中

        parent.$('[id^="title"]').addClass("aui-hide");
        parent.$('[id^="tabbar"]').removeClass("aui-active");
        parent.$('[id^="ms_main"]').css("display","none");

        parent.$('#title'+index).removeClass("aui-hide");
        parent.$('#tabbar'+index).addClass("aui-active");
        parent.$('#ms_main'+index).css("display","block");

    }
    else {
        $('[id^="title"]').addClass("aui-hide");
        $('[id^="tabbar"]').removeClass("aui-active");
        $('[id^="ms_main"]').css("display","none");

        $('#title'+index).removeClass("aui-hide");
        $('#tabbar'+index).addClass("aui-active");
        $('#ms_main'+index).css("display","block");

    }


}

function setTitle(id,title){
    $api.html($api.byId(id),title);
}

//资讯
function show_art_list(){
    openWin({
        name: 'art_header_list',
        url: aurl('html/art/header_list'),
        slidBackEnabled:false,
        delay:100
    });
}

function trade_show_set(){
    openWin({
        name: 'trade_show_set_h',
        url: aurl('html/main2/trade_show_set_h'),
        slidBackEnabled:false,
        delay:100
    });
}

//set
function show_set(){
    if( !chkLogin(1) )
    {
        //未登录
        return;
    }
    openWin({
        name: 'set_h',
        url: aurl('html/setting/set_h'),
        slidBackEnabled:false,
        delay:0
    });
}