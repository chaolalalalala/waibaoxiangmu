var weixin_login_st = "";
var weixin_login_tm = 0;
$(document).ready(function () {

    /*主菜单*/
    $('.mainbav .menu').hover(function () {
        $(this).find('.subnav_border').show();
    }, function () {
        $(this).find('.subnav_border').hide();
    });

    $(".sidebar_good .tjed").hover(
        function () {
            $(".sidebar_good .tjed").removeClass("act");
            $(this).addClass("act");
            $(".sidebar_good .huakuai1").css("left", ($(this).index() * 120 + 126) + "px");
            $(".servicelist").hide();
            $(".servicelist").eq($(this).index()).show();
        }
    );

    $(".sidebar_hot .tjed").hover(
        function () {
            $(".sidebar_hot .tjed").removeClass("act");
            $(this).addClass("act");
            $(".sidebar_hot .huakuai1").css("left", ($(this).index() * 120 + 108) + "px");
            $(".hotneeds").hide();
            $(".hotneeds").eq($(this).index()).show();
        }
    );

    $(".hottags td").hover(function () {
        $(this).css("background-color", $(this).find("a").css("color"));
        $(this).find("a").css("color", "#ffffff");
    }, function () {
        $(this).find("a").css("color", $(this).css("background-color"));
        $(this).css("background-color", "#f4f4f4");
    });

    loadTop();
    gettui680items();
    $(".cgalxz").parent().hover(
        function () {
            $(this).find(".cgalxz").animate({ bottom: 0 }, 300, function () { });
        },
        function () {
            if ($(this).find(".cgalxz").attr("tt") == "1") {
                $(this).find(".cgalxz").animate({ bottom: -347 }, 300, function () { });
            } else {
                $(this).find(".cgalxz").animate({ bottom: -173 }, 300, function () { });
            }
        }
    );


    $(".sssel").hover(function () {
        $(".kind_list").show();
    }, function () {
        $(".kind_list").hide();
    });

    $(".kind_list").hover(function () {
        $(".kind_list").show();
    }, function () {
        $(".kind_list").hide();
    });

    //    $(".tsbt").click(function () {
    //        $("#keyword").val($(".inputss").val());
    //        $("#sea_form").submit();
    //    });
    /*链接搜索*/
    //    $(".searchtext").click(function () {

    //        if ($(this).attr("url") != "" && $(this).attr("url") != undefined)
    //        {
    //            $("#sea_form").attr("action", $(this).attr("url"));
    //            $("#key_gg").val($(this).attr("key"));
    //            $("#sea_form").submit();
    //        }
    //        else
    //        {
    //            $("#sea_form").attr("action", "http://so.680.com");
    //            $("#keyword").val($(this).html());
    //            $("#sea_form").submit();
    //        }
    //    });
    /*top search box action begin*/

    $(".kind_list li").click(function () {
        if ($(this).attr("t") == "1") {
            $(".inputss_s").attr("placeholder", "请输入项目编号或标题");
        } else if ($(this).attr("t") == "3") {
            $(".inputss_s").attr("placeholder", "请输入服务标题");
        } else if ($(this).attr("t") == "4") {
            $(".inputss_s").attr("placeholder", "请输入服务商名称");
        }
        $(".sssel").html($(this).html());
        $(".kind_list").hide();
    });
    //form submit
    $(".top_search_form").submit(function (e) {
        e.preventDefault();
        search_top_fun();
    });

    /*top search box action end*/
    /*加急项目列表*/
    $("#circle_2").hover(function () {

        $("#circle_2").removeClass("circle_2");
        $("#circle_2").removeClass("circle_3");
        $("#circle_2").addClass("circle_3");

        $("#circle_3").removeClass("circle_2");
        $("#circle_3").removeClass("circle_3");
        $("#circle_3").addClass("circle_2");

        $(".itempage1").show();
        $(".itempage2").hide();
    });

    $("#circle_3").hover(function () {
        $("#circle_2").removeClass("circle_2");
        $("#circle_2").removeClass("circle_3");
        $("#circle_2").addClass("circle_2");

        $("#circle_3").removeClass("circle_2");
        $("#circle_3").removeClass("circle_3");
        $("#circle_3").addClass("circle_3");

        $(".itempage1").hide();
        $(".itempage2").show();
    });


    if ($(".top_one").length > 0) {
        if ($(".top_one").html().indexOf("t_login") != -1) {
            if ($(".loadlogin_top_ele").length <= 0) {
                $(".top_one .blue").css("position", "relative").css("z-index", "99999999999");
                $(".top_one .blue").append("<div class='loadlogin_top_ele' style='display:none;width:280px;text-align:center;font-size:12px;border:solid 1px #e6e6e6;position:absolute;top:16px;left:-275px;background:#fff;padding:10px 10px 35px;'><style type='text/css'>.login_pc_weixin{width:263px;height:150px}.weixin_login_l{text-align:center;width:150px;float:left}.weixin_login_r{text-align:left;width:110px;float:left;padding-top:10px;line-height:22px;color:#888}a.login_pc_wx_btn{color:#1e69be}a.login_pc_wx_btn:hover{color:#f60;text-decoration:none}.weixin_login_lerr{text-align:center;line-height:22px;padding-top:18px;color:#555}a.re_weixin_loginbtn{background:#f90;color:#fff;display:block;width:127px;margin:0 auto;height:30px;line-height:30px;border-radius:2px;font-size:14px;margin-top:10px}a.re_weixin_loginbtn:hover{background:#f60;color:#fff;text-decoration:none}.on_weixin_help{ position:relative;}.on_weixin_help .it_weixin_help{ display:none;}.on_weixin_help_over .it_weixin_help{   position:absolute; top:0 ;left:115px; display:block;}</style><div style='font-size:14px;color:#333;text-align:left;padding-left:10px'>微信扫一扫，便可登录，方便快捷</div><div class=\"login_pc_weixin\">加载中...</div></div>");
            }
            $(".top_one .blue").hover(function () {
                if ($(".loadlogin_top_ele").length > 0) {
                    $(".loadlogin_top_ele").show();
                    if ($(".login_pc_weixin_v").length > 0 || ($(".login_pc_weixin").length > 0 && $(".login_pc_weixin").html().indexOf("登录成功") != -1)) {

                    } else {
                        login_pc_weixin(1);
                    }
                }
            }, function () {
                if ($(".loadlogin_top_ele").length > 0) {
                    $(".loadlogin_top_ele").hide();
                }
            });
        }
        //
    }


    $(".btn1").click(function () {
        $("#box").animate({ height: "300px" });
    });


    //fws onmouseover show tips content
    $(".touxk").poshytip({
        className: 'tip-yellow',
        alignY: 'bottom',
        offsetX: -10,
        offsetY: 20,
        content: function (updateCallback) {
            var uid = $(this).attr('uid');
            $.get('/task/ajax_do/Json_weike.asp', { act: "readn", id: uid }, function (data) {
                var container = $(data);
                updateCallback(container);
            });
            return '加载中...';
        }
    });

    //预约服务商--begin---
    var bt_con = "<style type='text/css'>.btn_1_bt{float: left;margin-left: 36px;width: 280px;}.btn_1_bt a{background: #EF261C;color: #fff;font-size: 14px;width:89px;margin-left:3px;line-height: 34px;text-align: center;display: block;height: 34px}.yuyue_val {width: 260px;position: relative;padding-bottom: 6px;}.yuyue_val input{outline:none;width: 120px;padding-left:5px;height: 34px;line-height: 34px;border: solid 0 #D8D8D8;}.btn_1_bt a:hover{background: #E11010;color: #fff;text-decoration: none;}.err_yy_msg {position: absolute;background: #666666;z-index: 999;padding: 0 15px;color: #ffffff;font-size: 14px;top: 18px;height: 34px;line-height: 34px;right: 44px;display: block;width: 185px;text-align: center;filter: alpha(opacity:80);opacity: 0.8;}.footer_float {bottom: 0px;position: fixed;left: 0;z-index: 9999;background: transparent url(http://shop.680.com/images/yuyue/ib.png) repeat scroll 0px 0px;padding-top: 2px;height: 110px;width: 100%;opacity: 1;}.bt_scrr_arrow_1{cursor: pointer;display: inline;position: fixed;left: 0;bottom:8px;background:url(/images/2016/idx_yy_st.png) left center no-repeat;z-index: 9999;height:100px;width:131px;}.idx_yuyue_show_type{height: 34px;line-height: 34px;padding-left: 30px;background:#fff url(/images/2016/idx_talk.png) 5px center no-repeat;}.idx_yuyue_types{position: absolute;top:-202px;background: #fff;width: 184px;left: 30px;padding:10px 15px;overflow: hidden;height:180px;overflow-y: auto;border: solid 1px #ddd;}.idx_sel_yuyue_type{height:21px;line-height: 21px;padding-left:5px}.idx_yuyue_show_t{border-left: solid 1px #ddd;padding-left: 5px;width:193px}.idx_yy_arr{ height:34px;width:16px;background:#fff url(/images/2016/idx_arr.png) center center no-repeat;border-left:solid 1px #ddd}.idx_yuyue_valt{cursor:pointer;}.idx_yy_tel_icon{background:#fff url(/images/2016/idx_tel.png) center center no-repeat;width:30px;height:34px;border-right:solid 1px #ddd}.idx_yy_closebtn{cursor: pointer;background-color: rgba(0,0,0,.4);border-radius: 35px;display: block;height: 28px;position: absolute;width: 35px;top: 5px;right: -25px;text-align: center;padding-top: 7px;}</style><div class=\"footer_float\" style='left: 0px;'><div style=\"width:1100px;margin:0 auto\"><div style=\"padding-left: 18px; padding-right: 0;position:relative\"><div onclick=\"closefloat();\" class=\"idx_yy_closebtn\">";
    bt_con += "<img src=\"/images/2016/idx_close.png\"></div><div style=\"clear:both\"></div><div style=\"padding-top:8px;float:left;width:740px\"><img src=\"/images/2016/idx_yy_bg.png\"></div>";
    bt_con += "<div class=\"btn_1_bt\"><div style='background:#262626;padding:18px 15px'><div class=\"yuyue_val idx_yuyue_valt\"><div class=\"fl idx_yuyue_show_type\"><div class='idx_yuyue_show_t'>您需要什么？</div></div><div class='fl idx_yy_arr'></div><div class='clear'></div><div class=\"idx_yuyue_types\" style='display:none'><ul><li class=\"idx_sel_yuyue_type\" data='1_2'>LOGO设计</li><li class=\"idx_sel_yuyue_type\" data='1_4'>VI设计</li><li class=\"idx_sel_yuyue_type\" data='1_5'>包装设计</li><li class=\"idx_sel_yuyue_type\" data='1_55'>宣传品设计</li><li class=\"idx_sel_yuyue_type\" data='8_76'>产品设计</li><li class=\"idx_sel_yuyue_type\" data='6_0'>营销推广</li><li class=\"idx_sel_yuyue_type\" data='16_0'>起名取名</li><li class=\"idx_sel_yuyue_type\" data='4_0'>文案策划</li><li class=\"idx_sel_yuyue_type\" data='2_64'>网站建设</li><li class=\"idx_sel_yuyue_type\" data='2_6'>UI设计</li><li class=\"idx_sel_yuyue_type\" data='35_0'>APP开发</li><li class=\"idx_sel_yuyue_type\" data='15_0'>装修设计</li><li class=\"idx_sel_yuyue_type\" data='34_11'>软件开发</li><li class=\"idx_sel_yuyue_type\"  data='12_0'>动漫制作</li><li class=\"idx_sel_yuyue_type\"  data='7_54'>其他服务</li></ul></div></div><input type='hidden' id='idx_yy_sel_type' value=''/><input type='hidden' id='idx_sel_yuyue_name' value=''/>";
    bt_con += "<div class=\"yuyue_val\"><div class='fl idx_yy_tel_icon'></div><div class='fl'><input id=\"yy_mobile\" type=\"text\" placeholder=\"联系电话\" maxlength=\"11\"></div><div class='fl'><a href=\"javascript:;\" class=\"ract_qyqqdj\" onclick=\"fast_yuyue_tf();\">免费预约</a></div><div class='clear'></div></div></div>";
    bt_con += "<div class=\"clear\"></div></div><div class=\"clear\"></div></div></div><div class=\"bt_scrr_arrow_1\" style=\"display:none\"></div></div>";
    $("body").append(bt_con);
    $(".bt_scrr_arrow_1").click(function () {
        var left = $(".footer_float").css("left");
        if (left == "0px") {
            left = "-100%";
            $(".bt_scrr_arrow_1").show();
        } else {
            left = "0px";
            $(".bt_scrr_arrow_1").hide();
        }
        $(".footer_float").animate({ left: left}, { easing: "linear" });
    });
    $(".idx_yuyue_valt").hover(function () { }, function () { $(".idx_yuyue_types").hide(); });
    $(".idx_sel_yuyue_type").hover(function () { $(this).css("background-color", "#fff1de").css("color", "#f60"); }, function () { $(this).css("background-color", "#fff").css("color", "#555"); });
    $(".idx_sel_yuyue_type").bind("click", function () { $(".idx_yuyue_show_t").html("我需要" + $(this).html()); $(".idx_yuyue_types").hide(); $("#idx_yy_sel_type").val($(this).attr("data")); $("#idx_sel_yuyue_name").val($(this).html()); });
    $(".idx_yy_arr").bind("click", function () { $(".idx_yuyue_types").show(); });
    $(".idx_yuyue_show_t").bind("click", function () { $(".idx_yuyue_types").show(); });
    //预约服务商--end---




});

$(".slideBox").slide({ mainCell: ".bd ul", autoPlay: true, effect: "leftLoop", interTime: 5000, delayTime: 1000 });

$(".urgentvike").slide({ mainCell: ".bd ul", autoPage: true, effect: "topLoop", autoPlay: true, vis: 3 });

$(".solved_2").slide({ mainCell: ".bd ul", autoPage: true, effect: "topLoop", autoPlay: true , vis: 3});
function search_idx() {
    $("#keyword").val($(".inputss").val());
    //$("#sea_form").submit();
}

function load_idx_yuyue_fabu(tel,cids) {
    var winH = $(document).height();
    var winW = $(document).width();
    var leftW = (winW - 670) / 2;
    var wwH = $(window).height();
    var topH = (wwH - 600) / 2;
    if ($(".idx_load_yuyue_spacer").length > 0) {
        $(".idx_load_yuyue_spacer").show();
        $(".idx_load_yuyue_spacer_con").show();
    } else {
        var con = "<style type='text/css'>.idx_yy_fb_t{background:#f90;color:#fff;text-align: center;padding:30px;height:70px;position:relative}.idx_yy_fb_name{height:40px;line-height:40px;font-size:26px;color:#fff;}.idx_yy_fb_note{font-size:18px;padding-top:4px}a.idx_yy_fb_r_close:hover{background: #f60;color: #fff;text-decoration: none;}a.idx_yy_fb_r_close{position: absolute;top: 10px;right: 10px;color: #fff;font-size: 27px;background: #FFB24C;color: #FA8300;display: block;border-radius:50%;height:25px;width:25px;line-height: 25px;}.idx_yy_fb_info{height: 30px;line-height: 30px;text-align: center;font-size: 18px;color: #333;font-weight: 700;padding: 10px;}.idx_yy_fb_yzm_note{padding:8px;font-weight:700;}.idx_yy_fb_i_t{font-weight: 700;padding-left: 30px;font-size:16px;color:#333;height:30px;line-height:30px}a.idx_yy_fb_actbtn{background: #f60;font-weight: 700;color: #fff;display: block;height: 40px;line-height: 40px;width: 130px;text-align: center;border-radius: 2px;font-size: 16px;}a.idx_yy_fb_actbtn:hover{background:#f90;color:#fff;text-decoration:none}.idx_yy_fb_stop{padding:12px 25px}.idx_yy_fb_i_con{padding-left: 30px;padding-bottom: 15px;}.idx_yy_fb_act{position:relation;border-top: dashed 1px #eee;height: 40px;padding: 10px 0 20px 195px;}a.idx_yy_fb_yzm_btn{display: block;height: 30px;line-height: 30px;text-align: center;width: 100px;color: #ff6c00;background: #fbf9e9;border: solid 1px #f90;border-radius: 4px;}a.idx_yy_fb_yzm_btn:hover{ background:#f90;color:#fff;text-decoration:none}.idx_yy_fb_closebtn{}.idx_yy_fb_yq{resize: none; height: 90px;line-height: 150%;border: solid 1px #ddd;padding: 5px;width: 570px;font-size: 14px;}.idx_yy_fb_money_t{padding-left:20px}.idx_yy_fb_tel,.idx_yy_fb_yzm,.idx_yy_fb_money{width:150px;height:30px;padding:0 5px;line-height:30px;border:solid 1px #ddd;}.idx_yy_fb_title{ height:30px;line-height:30px;border:solid 1px #ddd;padding:2px 5px;width:570px;}.idx_yy_fb_err{position: absolute;bottom: 318px;border-radius: 2px;left: 29px;text-align: center;background: #8e8d8d;color: #fff;padding: 6px 10px;font-size: 14px;}.idx_yy_fb_money_act{ height:40px;padding-left:14px}.idx_yy_fb_money_act a{display: block;height: 30px;font-size:14px;line-height: 30px;text-align: center;width: 120px;color: #fff;background: #f60;border-radius: 4px;}.idx_yy_fb_money_act a:hover{background:#f90;color:#fff;text-decoration:none}</style><div class='idx_load_yuyue_spacer' style='height:" + winH + "px;width:" + winW + "px;position:absolute;left:0;top:0;z-index:9999999;background:#676767;zoom:1;filter:alpha(opacity=50); -moz-opacity:0.5; opacity:0.5;'></div><div class='idx_load_yuyue_spacer_con' style='width:670px;margin:0 auto;position:fixed;left:" + leftW + "px;top:" + topH + "px;z-index:99999999;zoom:1'><div style='width:670px;background:#fff'>";
        con += "<div class='idx_yy_fb_t'><a href='javascript:void(0);' class='idx_yy_fb_r_close' onclick='close_idx_yy_fb();'>×</a><div class='idx_yy_fb_name'><b>√</b> 恭喜您，已成功预约顾问！</div><div class='idx_yy_fb_note'>专业顾问会在30分钟内联系您，请保持手机畅通</div></div>";
        con += "<div class='idx_yy_fb_info'>继续完善以下信息，我们会安排服务商优先联系您</div>";
        con += "<div class='idx_yy_fb_ok_space'>";
        con += "<div class='idx_yy_fb_i_t'>您需要</div>";
        con += "<div class='idx_yy_fb_i_con'><input type='text' id='idx_yy_fb_title' placeholder='一句话描述您的需求' class='idx_yy_fb_title' maxlength='50'/></div>";
        con += "<div class='idx_yy_fb_i_t'>具体要求</div>";
        con += "<div class='idx_yy_fb_i_con'><textarea  id='idx_yy_fb_yq' placeholder='描述下您的具体需求' class='idx_yy_fb_yq'></textarea></div>";
        con += "<div class='idx_yy_fb_i_t'>联系方式</div>";
        con += "<div class='idx_yy_fb_i_con' style='padding-bottom:5px'><input type='text' id='idx_yy_fb_tel' value='" + tel + "' class='idx_yy_fb_tel' maxlength='11'/></div>";
        con += "<div class='idx_yy_fb_i_con idx_yy_fb_i_yzm' style='position:relative'>";
        con += "<div class='fbf_fst_user' style='display: none;position: absolute;top: -38px;left: 24px;background: #fdfdfd;border: solid 3px #dedede;padding: 5px 0 0 33px;border-radius: 4px;width: 363px;'><div class='fstf_fb_l' style='height: 30px;line-height: 30px;font-size: 14px;'>请输入图片验证码：<a href='javascript:void(0);' style='font-size: 20px;font-weight: 700;' onclick=\"closepicwinf();\">×</a></div><div class='fstf_fb_r'><input type='text' id='rg_yzm' class='fsthp_text' placeholder='图片验证码' style='height: 33px;width:85px;line-height: 33px;border: solid 1px #C3C1C1;padding-left:3px' maxlength='10' /><img id='randomgif' onclick='getgif()' src='/ashx/gif.ashx?" + Math.random() + "' style='vertical-align: middle;padding-left: 10px;' /></div><div class='getpicyzm_act' style='padding:15px 0;height: 30px;'><a href='javascript:void(0);' style='height: 30px;line-height: 30px;background: #FF7907;color: #fff;display:block;width:140px;border-radius:3px;text-align:center;text-decoration:none;' class='sendmmsbtn' onclick='sendcodepre();'>立即获取短信验证码</a></div><div class='clear'></div></div>";
        con+="<div class='fl'><input type='text' id='idx_yy_fb_yzm' placeholder='请输入您收到的验证码' value='' class='idx_yy_fb_yzm' maxlength='11'/></div><div class='fl' style='padding-left:5px'><a href='javascript:void(0);' class='idx_yy_fb_yzm_btn' onclick='getfastmobilecodef();'>获取短信验证码</a><input type='hidden' id='idx_yy_fb_key' value=''></div><div class='fl idx_yy_fb_yzm_note'></div><div class='clear'></div></div>";
        con += "<div class='idx_yy_fb_act'><div class='idx_yy_fb_err' style='display:none'></div><a href='javascript:void(0);' class='fl idx_yy_fb_actbtn' onclick=\"idx_yy_fb_save('" + cids + "');\">立即提交</a><div class='fl idx_yy_fb_stop'><a href='javascript:void(0);' class='idx_yy_fb_closebtn' onclick=\"close_idx_yy_fb();\">暂不完善</a></div><div class='clear'></div></div>";
        con += "</div>";
        con+="</div></div>";

        $("body").append(con);
    }
}
function closepicwinf() {
    $(".fbf_fst_user").hide();
}
function idx_yy_fb_save(cids) {
    $(".loadmsg").remove();
    var idx_yy_fb_title_v = $("#idx_yy_fb_title").val();
    if (isValEmpty(idx_yy_fb_title_v)) {
        loaderr_msg("请一句话描述您的需求！", 1500,318);
        document.getElementById("idx_yy_fb_title").focus();
        return false;
    }
    var idx_yy_fb_yq_v = $("#idx_yy_fb_yq").val();
    if (isValEmpty(idx_yy_fb_yq_v)) {
        loaderr_msg("描述下您的具体需求！", 1500, 172);
        document.getElementById("idx_yy_fb_yq").focus();
        return false;
    }
    var idx_yy_fb_tel_v = $("#idx_yy_fb_tel").val();
    if (isValEmpty(idx_yy_fb_tel_v)) {
        loaderr_msg("请填写联系方式！", 1500, 93);
        document.getElementById("idx_yy_fb_tel").focus();
        return false;
    }
    var idx_yy_fb_yzm_v = $("#idx_yy_fb_yzm").val();
    if (isValEmpty(idx_yy_fb_yzm_v)) {
        loaderr_msg("请填写验证码！", 1500, 55);
        document.getElementById("idx_yy_fb_yzm").focus();
        return false;
    }
    var idx_yy_fb_key_v = $("#idx_yy_fb_key").val();
    $(".idx_yy_fb_actbtn").hide();
    $(".idx_yy_fb_stop").hide();
    $(".idx_yy_fb_act").append("<span class='loadmsg' style='display: block;height: 30px; line-height: 30px;font-size: 14px;'>提交中...</span>");
    webAjax("/ashx/yuyue.ashx", "type=idxyuyuefabusave&tel=" + idx_yy_fb_tel_v + "&cids=" + cids
        + "&crv_idx_yy_fb_title=" + escape(idx_yy_fb_title_v)
        + "&crv_idx_yy_fb_yq=" + escape(idx_yy_fb_yq_v)
        + "&idx_yy_fb_yzm=" + idx_yy_fb_yzm_v
        + "&idx_yy_fb_key=" + idx_yy_fb_key_v
        ,
        function (result) {
            $(".loadmsg").html("");
            if (result.indexOf("ok=") != -1) {
                $(".idx_yy_fb_ok_space").html("<div style='padding:20px;font-size:16px;padding-top:80px;padding-left:80px'><b style='font-size:18px;color:#392;'>提交需求要求成功！</b>还可以马上托管赏金：</div><div style='padding-bottom:200px;padding-left:60px'><div class='fl idx_yy_fb_money_t'>您的预算：<input type='text' id='idx_yy_fb_money' value='' class='idx_yy_fb_money' maxlength='7' style='width:97px' onkeyup=\"this.value=this.value.replace(/[^0-9]/g,'');\"  onblur=\"this.value=this.value.replace(/[^0-9]/g,'');\" /> 元 <span style='color:#999'>(不低于50的整数)</span></div><div class='fl idx_yy_fb_money_act'><a href='javascript:void(0);' class='fasttopayidxysbtn' onclick=\"setmoneytopayf(" + result.split('=')[1] + ",'/fabu/itempay.aspx?itemid=" + result.split('=')[1] + "&key=" + result.split('=')[2] + "');\">立即托管赏金</a></div><div class='clear'></div></div>");

            } else if (result.indexOf("okshow=") != -1) {
                var show_tel = "";
                var show_pd = "";
                var show_un = "";
                var show_gourl = "";
                var show_key = "";

                show_tel = result.split('=')[3];
                show_pd = result.split('=')[4];
                show_un = result.split('=')[5];
                show_key = result.split('=')[6];
                show_gourl = "/fabu/itempay.aspx?itemid=" + result.split('=')[1] + "&key=" + result.split('=')[2];

                var newlogin = "<div  class='idx_yy_fabu_un_info' style='padding:30px 20px;line-height:180%;width:628px'><div style='color:green;font-size:16px'>提交需求要求成功！</div><div style='font-size:14px;color:#444;line-height:25px;'><div style='color: rgb(30, 131, 223);font-weight: 700;font-size:14px;padding-bottom:5px'>亲，您以后可以直接用手机号：<b style='color:rgb(255, 106, 15);font-size: 20px;'>" + show_tel + "</b> 登录网站管理项目！</div><div style='background:#F5F5F5;padding:5px 10px;border-radius: 4px;'><div style='padding-left:5px;'><font color='red' style='font-size:12px;'>为了方便您对账号的使用、对项目的管理，建议您重新编辑以下信息。编辑好后保存信息即可！</font></div><div style='padding-top:5px'>系统分配的用户名：<input type='text' id='euname' value='" + show_un + "' class='input_wp100 wp98' maxlength='16' onblur=\"this.value=this.value.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,'');\" style='border: solid 1px #A09C9C;margin-bottom: 3px;margin-left: 0;height: 30px;line-height: 30px;width: 200px;'> <font color='gray' style='font-size:12px'>(支持字母数字汉字)</font></div><div style='padding-left:28px;padding-top:5px'>您的登录密码：<input type='text' id='epwd' value='" + show_pd + "' class='input_wp100 wp98' maxlength='16' style='border: solid 1px #A09C9C;margin-bottom: 3px;margin-left: 0;height: 30px;line-height: 30px;width: 200px;'/> <font color='gray' style='font-size:12px'>(更改为自己易记的登录密码)</font></div><div style='padding-left:28px;padding-top:5px'>您的常用邮箱：<input type='text' class='bindemail input_wp100 wp98' maxlength='50' value='' onblur=\"this.value=this.value.replace(/[^a-zA-Z0-9@\._-]/g,'');\" placeholder='请填写邮箱' style='border: solid 1px #A09C9C;margin-bottom: 3px;margin-left: 0;height: 30px;line-height: 30px;width: 200px;'> <font color='gray' style='font-size:12px'>(为了您的账号安全，请绑定邮箱)</font></div><div style='padding:5px;padding-left:128px;height: 35px;'><div><input type='button' id='bindemailbtn' value='好了，确定保存' style='border: solid 1px #0698F9;background: #0B97F4;height: 34px;line-height: 34px;border-radius: 3px;padding: 0px 5px;box-shadow: 2px 2px 2px #dadada;width: 160px;cursor: pointer;color: #fff;font-size: 14px;' onclick=\"fabu_bind_emailf('" + show_key + "','" + show_gourl + "')\"></div><div style='clear:both;'></div></div></div></div></div>";
                newlogin += "<div style='height: 30px;line-height: 30px;padding: 5px 20px;padding-left:80px;font-size: 14px;color: #333;font-weight: 700;'>还可以马上托管赏金</div><div style='padding-bottom:160px;padding-left: 60px;'><div class='fl idx_yy_fb_money_t'>您的预算：<input type='text' id='idx_yy_fb_money' value='' class='idx_yy_fb_money' maxlength='7' onkeyup=\"this.value=this.value.replace(/[^0-9]/g,'');\"  onblur=\"this.value=this.value.replace(/[^0-9]/g,'');\" /> 元 <span style='color:#999'>(不低于50的整数)</span></div><div class='fl idx_yy_fb_money_act'><a href='javascript:void(0);' onclick=\"setmoneytopayf(" + result.split('=')[1] + ",'" + show_gourl + "');\" class='fasttopayidxysbtn'>立即托管赏金</a></div><div class='clear'></div></div>";
                $(".idx_yy_fb_ok_space").html(newlogin);


            }
            else if (result == "notitle") {
                loaderr_msg("请一句话描述您的需求！", 1500, 318);
                document.getElementById("idx_yy_fb_title").focus();
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();

            } else if (result == "nocon") {
                loaderr_msg("描述下您的具体需求！", 1500, 172);
                document.getElementById("idx_yy_fb_yq").focus();
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();

            } else if (result == "notel") {
                loaderr_msg("请填写联系方式！", 1500, 93);
                document.getElementById("idx_yy_fb_tel").focus();
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();

            } else if (result == "noyzm") {
                loaderr_msg("请填写验证码！", 1500, 55);
                document.getElementById("idx_yy_fb_yzm").focus();
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();

            } else if (result == "yzmerr") {
                loaderr_msg("验证码错误！", 1500, 55);
                document.getElementById("idx_yy_fb_yzm").focus();
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();

            } else if (result == "unlogin") {
                alert("请先登录！");
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();
            } else if (result == "adderr") {
                alert("提交需求失败！");
                $(".idx_yy_fb_actbtn").show();
                $(".idx_yy_fb_stop").show();
            } else {

            }

        });

}

function isEmail(email) {
    var rege = /^([a-zA-Z0-9\._-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (rege.test(email)) { return true; } else { return false; }
}

function fabu_bind_emailf(k) {//bindemail bindemailbtn
    $(".loadmsg").remove();
    var epwd_v = $("#epwd").val();
    if (epwd_v != "" && epwd_v.length > 5) {
    } else {
        alert("密码须6-16位！");return false;
    }
    var euname_v = $("#euname").val();
    if (euname_v != "" && euname_v.length > 1) {
    } else {
        alert("用户名须2-16位！");return false;
    }
    var email = $(".bindemail").val();
    if (isValEmpty(email)) {
        alert("请填写邮箱！");return false;
    } else {
        if (isEmail(email)) {
            $("#bindemailbtn").hide();
            $(".bind_fabu_next").hide();
            $("#bindemailbtn").after("<span class='loadmsg'>提交中...</span>");
            webAjax("/fabu/ajax_do/fabu_action.ashx", "type=bindemail&key=" + k + "&email=" + email + "&crv_epwd=" + escape(epwd_v) + "&crv_euname=" + escape(euname_v), function (data) {
                $(".loadmsg").html("");
                if (data == "ok") {
                    $(".idx_yy_fabu_un_info").html("<div class='saveidxyyuserinfo' style='padding:20px;padding-left:60px;font-size: 18px;color: #392;'>保存账号信息成功！</div>");

                } else if (data == "noun") {
                    alert("用户名须2-16位！");
                    $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "nopwd") {
                    alert("密码须6-16位！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "nouid") {
                    alert("暂不能绑定！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "noemail") {
                    alert("请填写邮箱！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "nocan") {
                    alert("暂不能绑定！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "has") {
                    alert("邮箱已存在！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else if (data == "hasun") {
                    alert("用户名已存在，请更换！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                } else {
                    alert("系统繁忙，请稍后再试！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
                }
            });
        } else {
            alert("请填写有效邮箱！"); $("#bindemailbtn").show(); $(".bind_fabu_next").show();
        }
    }
}

function setmoneytopayf(id, url) {
    $(".loadmsg_pay").remove();
    var idx_yy_fb_money_v=$("#idx_yy_fb_money").val();
    if (!isValEmpty(idx_yy_fb_money_v) && parseInt(idx_yy_fb_money_v) > 0) {
        if (parseInt(idx_yy_fb_money_v) >= 50) {
            $(".fasttopayidxysbtn").hide();
            $(".fasttopayidxysbtn").after("<span class='loadmsg_pay' style='display:block;height:30px;line-height: 30px;'>请求中...</span>");
            webAjax("/ashx/yuyue.ashx", "type=idxyyfabumoneyset&id=" + id + "&itemmoney=" + idx_yy_fb_money_v, function (result) {
                $(".loadmsg_pay").html("");
                if (result == "nodo") {
                    alert("无效操作！"); $(".fasttopayidxysbtn").show();
                } else if (result == "less50") {
                    alert("预算不能低于50元！"); $(".fasttopayidxysbtn").show();
                } else if (result == "ok") {
                    $(".loadmsg_pay").html("<font color=green>正在进入支付页面...</font>");
                    window.location.href = url;
                } else {
                    alert("系统繁忙，请稍后再试！"); $(".fasttopayidxysbtn").show();
                }

            });
        } else {
            alert("预算不能低于50元！");
        }
    }else{
        alert("请填写预算！");
    }
}
function loaderr_msg(msg, n,bottom) {
    $(".idx_yy_fb_err").css("bottom", bottom+"px");
    $(".idx_yy_fb_err").show();
    $(".idx_yy_fb_err").html(msg);
    setTimeout(function () { $(".idx_yy_fb_err").hide(); }, n);
}
function getgif() {
    $('#randomgif').attr('src', '/ashx/gif.ashx?' + Math.random());
}
function getmobileyzm_yy() {
    $(".sendloadidx").remove();
    var rg_yzm_v = $("#rg_yzm").val();
    if (rg_yzm_v != "") {
        var mobilev = $("#idx_yy_fb_tel").val();
        if (mobilev != "") {
            $(".sendmmsbtn").hide();
            $(".sendmmsbtn").after("<span class='sendloadidx'>正在发送...</span>");

            if ($(".idx_yy_fb_yzm_btn").html().indexOf("获取") != -1) {
                $(".idx_yy_fb_yzm_btn").attr("disabled", true);
                $(".idx_yy_fb_yzm_btn").html("发送中...");
                btmml = 120;
                webAjax("/ashx/yuyue.ashx", "type=idxyysendmobileyzm&tel=" + mobilev+"&pyzm="+rg_yzm_v, function (result) {
                    $(".sendloadidx").html("");
                    if (result.indexOf("ok") != -1) {
                        $("#idx_yy_fb_key").val(result.split('=')[1]);
                        usermyzmtime = setInterval("GoMTime()", 1000);
                        $(".idx_yy_fb_yzm_btn").html("已发送(120)");
                        $(".idx_yy_fb_yzm_note").html("<font color=green>手机验证码已经发送，注意查收！</font>");
                        setTimeout(function () { $(".idx_yy_fb_yzm_note").html(""); }, 3000);
                        $(".sendmmsbtn").show();
                        $(".fbf_fst_user").hide();
                    } else if (result == "senderr") {
                        alert("系统繁忙，发送短信失败！");
                        $(".sendmmsbtn").show();
                        $(".fbf_fst_user").hide();
                        getsendbtnf_yy(); return false;
                    } else if (result == "telerr") {
                        alert("手机号无效！");
                        $(".sendmmsbtn").show();
                        $(".fbf_fst_user").hide();
                        getsendbtnf_yy(); return false;
                    } else if (result == "yzmerror") {
                        alert("图片验证码错误！");
                        $(".sendmmsbtn").show();
                        getsendbtnf_yy(); return false;
                    } else if (result == "noyzm") {
                        alert("请输入图片验证码！");
                        $(".sendmmsbtn").show();
                        getsendbtnf_yy(); return false;
                    }else {
                        alert('手机验证码发送失败！'); getsendbtnf_yy();
                        $(".sendmmsbtn").show();
                    }
                });
            } else {
                $(".fbf_fst_user").hide();
                $(".sendmmsbtn").show();
            }
        } else {
            loaderr_msg("请填写联系方式！", 1500, 93);
            document.getElementById("idx_yy_fb_tel").focus();
            return false;
        }
    } else {
        $(".fbf_fst_user").show();
        document.getElementById("rg_yzm").focus();
    }
}
function getsendbtnf_yy() {
    clearInterval(usermyzmtime);
    $(".idx_yy_fb_yzm_btn").attr("disabled", false);
    $(".idx_yy_fb_yzm_btn").html("获取短信验证码");
}
var btmml = 120; var usermyzmtime = "";
function GoMTime() {
    if (btmml >= 0) {
        $(".idx_yy_fb_yzm_btn").html("已发送(" + btmml + ")");
        btmml--;
    } else {
        clearInterval(usermyzmtime);
        $(".idx_yy_fb_yzm_btn").attr("disabled", false);
        $(".idx_yy_fb_yzm_btn").html("获取短信验证码");
    }
}




function close_idx_yy_fb() {
    $(".idx_load_yuyue_spacer").hide();
    $(".idx_load_yuyue_spacer_con").hide();
}
function closefloat() {
    var left = $(".footer_float").css("left");
    if (left == "0px") {
        left = "-100%";
        $(".bt_scrr_arrow_1").show();
    } else {
        left = "0px";
        $(".bt_scrr_arrow_1").hide();
    }
    $(".footer_float").animate({ left: left}, { easing: "linear" });
}
function fast_yuyue_tf() {
    $(".err_yy_msg").remove();
    $(".loading").remove();
    var fst_u_s_v = $("#idx_yy_sel_type").val();
    var fst_u_n_v = $("#idx_sel_yuyue_name").val();
    if (isValEmpty(fst_u_s_v)) {
        $("#idx_yy_sel_type").after("<span class='err_yy_msg'>请选择需要什么！</span>");
        setTimeout(function () { $(".err_yy_msg").remove(); }, 800);
        return false;
    }
    var fst_u_tel_v = $("#yy_mobile").val();
    if (isValEmpty(fst_u_tel_v)) {
        $("#yy_mobile").after("<span class='err_yy_msg' style='width: 126px;right: 103px;top: 0px;padding: 0;'>请填写手机号！</span>");
        setTimeout(function () { $(".err_yy_msg").remove(); }, 800);
        document.getElementById("yy_mobile").focus(); return false;
    } else {
        if (fst_u_tel_v.length > 10) {
            if (fst_u_tel_v.substring(0, 1) != "1") {
                $("#yy_mobile").after("<span class='err_yy_msg' style='width: 126px;right: 103px;top: 0px;padding: 0;'>手机号无效！</span>");
                setTimeout(function () { $(".err_yy_msg").remove(); }, 800);
                document.getElementById("yy_mobile").focus(); return false;
            }
        } else {
            $("#yy_mobile").after("<span class='err_yy_msg' style='width: 126px;right: 103px;top: 0px;padding: 0;'>手机号无效！</span>");
            setTimeout(function () { $(".err_yy_msg").remove(); }, 800);
            document.getElementById("yy_mobile").focus(); return false;
        }
    }

    $(".ract_qyqqdj").hide();
    $(".ract_qyqqdj").after("<span class='loading' style='color:rgb(255, 204, 0);padding: 9px;display: block;' >正在提交....</span>");

    webAjax("/ashx/yuyue.ashx", "type=idxyuyue&seltypeid=" + fst_u_s_v + "&seltypen=" + escape(fst_u_n_v) + "&tel=" + escape(fst_u_tel_v), function (data) {
        $(".loading").html("");
        if (data == "nosel") {
            $("#idx_yy_sel_type").after("<span class='err_yy_msg'>请选择需要什么！</span>");
            setTimeout(function () { $(".err_yy_msg").remove(); }, 1000);
            $(".ract_qyqqdj").show();
            return false;
        } else if (data == "notel") {
            $("#yy_mobile").after("<span class='err_yy_msg' style='width: 126px;right: 103px;top: 0px;padding: 0;'>请填写手机号！</span>");
            setTimeout(function () { $(".err_yy_msg").remove(); }, 1000);
            document.getElementById("yy_mobile").focus();
            $(".ract_qyqqdj").show();
            return false;
        } else if (data == "ok") {
            $("#yy_mobile").val("");
            $(".btn_1_bt").html("");
            $(".btn_1_bt").html("<span style='color: #f7c228;font-size: 22px;display: block;padding-top: 35px;'>√ 提交预约信息成功！</span>");
            load_idx_yuyue_fabu(fst_u_tel_v, fst_u_s_v);
        } else {
            alert("系统繁忙，请稍后再试！"); $(".ract_qyqqdj").show();
        }
    });
}


function search_top_fun() {
    var n = $(".sssel").html();
    if (n.indexOf("项") != -1) {
        window.location.href = "/task.html?key=" + encodeURIComponent($(".inputss_s").val());
    } else if (n.indexOf("商") != -1) {
        window.location.href = "/shop.html?key=" + encodeURIComponent($(".inputss_s").val());
    } else {
        window.location.href = "/fuwu.html?key=" + encodeURIComponent($(".inputss_s").val());
    } return false;
}

function gettui680items() {
    $.get("/ashx/task/getitems.ashx", function (data) {
        $(".tui680_item_list").html(data);
    });
}
function browserRedirect() {
    var sUserAgent= navigator.userAgent.toLowerCase();
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid= sUserAgent.match(/android/i) == "android";
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        if(location.href!="" && !+[1,] && window.event){
            window.event.returnValue=false;
        }
        location="http://m.680.com";
    }
}
if(window.location.href.indexOf("t=m")>0){

}else{
    browserRedirect();
}




function login_pc_weixin(t) {
    if (t == 1) {
        $(".no_weixin_pc_login").hide();
        $(".yes_weixin_pc_login").show();
        if (weixin_login_tm > 0 && weixin_login_tm < 13) {

        } else {
            $(".login_pc_weixin").html("<div style='padding-top:33px;padding-left:24px;color:#999'>正在加载...</div>");
            webAjax("/ashx/weixin/login_img.ashx", "type=weixinlogin&PID=" + Math.random(), function (result) {
                if (result.indexOf("login_pc_weixin") != -1) {
                    window.clearInterval(weixin_login_st);
                    weixin_login_tm = 1;
                    $(".login_pc_weixin").html("<div class='weixin_login_l on_weixin_help'>" + result + "<div class='it_weixin_help' style='display:none'><img src='/images/2016/login_weixin.png' /></div></div><div class='weixin_login_r' style='float:right'>微信扫码登录，<br>安全快捷！<br><a href='javascript:void(0);' onclick='login_pc_weixin(1)' class='login_pc_wx_btn'></a></div><div class='clear'></div>");
                    weixin_login_st = window.setInterval(get_weixin_login_result, 5000);
                    $(".on_weixin_help").hover(function () { $(this).addClass("on_weixin_help_over"); $(".it_weixin_help").show(); }, function () { $(this).removeClass("on_weixin_help_over"); $(".it_weixin_help").hide(); });
                } else {
                    $(".login_pc_weixin").html("<div class='weixin_login_lerr'>加载微信登录二维码失败，请点击：<br><a href='javascript:void(0);' class='login_pc_wx_btn'>[重新登录]</a></div>");
                }
            });
        }
    } else {
        $(".no_weixin_pc_login").show();
        $(".yes_weixin_pc_login").hide();
        window.clearInterval(weixin_login_st);
        weixin_login_tm = 0;
    }
}

function get_weixin_login_result() {
    var login_v = $(".login_pc_weixin_v").val();
    if (login_v != "") {
        if (weixin_login_tm < 130) {
            weixin_login_tm += 5;
            webAjax("/ashx/weixin/login_img.ashx", "type=getresultweixinlogin&loginkey=" + login_v + "&PID=" + Math.random(), function (data) {
                if (data.indexOf("ok=") != -1) {

                    webAjax("/inc_vk/login_weixin.asp", "type=weixinpclogin&id1=" + data.split('=')[1] + "&id2=" + data.split('=')[2] + "&id3=" + data.split('=')[3] + "&PID=" + Math.random(), function (wx_data) {
                        if (wx_data.indexOf("login_weixin_okback") != -1) {
                            $(".login_pc_weixin").html("<div class='weixin_login_lerr'><span style='color:green;font-size:14px;font-weight:700;'>登录成功！</span></div>");
                            window.clearInterval(weixin_login_st);
                            weixin_login_tm = 0;
                            // var ur = getparastr("tourl");
                            //if (ur == "") ur = "http://user.680.com/";
                            var reurl = window.location.href;
                            window.location.href = reurl;
                        }
                    });
                }
            });
        } else {
            $(".login_pc_weixin").html("<div class='weixin_login_lerr' style='font-size:14px'>登录失败！请点击：<br><a href='javascript:void(0);' class='login_pc_wx_btn re_weixin_loginbtn'>重新登录</a></div>");
            window.clearInterval(weixin_login_st);
            weixin_login_tm = 0;
        }
    } else {
        window.clearInterval(weixin_login_st);
        weixin_login_tm = 0;
    }
}


function sendcodepre() {
    $(".sendloadidx").remove();
    var rg_yzm_v = $("#rg_yzm").val();
    if (rg_yzm_v != "") {
        getmobileyzm_yy();
    } else {
        document.getElementById("rg_yzm").focus();
    }
}

function getfastmobilecodef() {
    //getmobileyzm_yy
    var mobilev = $("#idx_yy_fb_tel").val();
    if (!isValEmpty(mobilev)) {
        $(".fbf_fst_user").show();

        //var html = "<div class='fbf_fst_user'><div class='fstf_fb_l' style='height: 30px;line-height: 30px;font-size: 14px;'>请输入图片验证码：</div><div class='fstf_fb_r'><input type='text' id='rg_yzm' class='fsthp_text' placeholder='图片验证码' style='height: 33px;width:85px;line-height: 33px;border: solid 1px #C3C1C1;padding-left:3px' maxlength='10' /><img id='randomgif' onclick='getgif()' src='/ashx/gif.ashx?" + Math.random() + "' style='vertical-align: middle;padding-left: 10px;' /></div><div class='getpicyzm_act' style='padding:15px 0;height: 30px;'><a href='javascript:void(0);' style='height: 30px;line-height: 30px;background: #FF7907;color: #fff;display:block;width:140px;border-radius:3px;text-align:center;text-decoration:none;' class='sendmmsbtn' onclick='sendcodepre();'>立即获取短信验证码</a></div><div class='clear'></div></div>";
//        $.dialog({ id: "sendimgcheck",
//            max: false, title: false, min: false,
//            width: '392px',
//            height: '203px',
//            lock: true,
//            drag: false, resize: false, background: '#eee',
//            opacity: 0.7,
//            content: html, cancelVal: '关闭',
//            cancel: true
//        });



    } else {
        document.getElementById("idx_yy_fb_tel").focus(); return false;
    }
}/**
 * Created by Administrator on 2017/2/6.
 */
