
//document.domain='b.com';
//默认执行 当页面ready的时候，执行回调:
Zepto(function($){
    if(typeof apiready == "function"){
        //修改界面style
        //var style = privateConfigData().UIStyle;
        //if( style == 2){
        //    //weui风格B
        //    $("#style_A").css("display","none");
        //    $("#style_B").css("display","block");
        //}
        //else {
        //    //aui2风格A
        //    $("#style_A").css("display","block");
        //    $("#style_B").css("display","none");
        //}

        apiready();

        var pathname = window.location.href;
        if(/_h/.test(pathname)){
            //头部文件_h.php 则修改Keywords等
            configWebInfo();
        }
    }
});


function chk_dev() {
    return true;
}

function open_win(name, group) {
    openWin({
        name: name,
        url: aurl('html/' + group + '/' + name),
        slidBackEnabled:false,
        delay: 100
    });
}

function openWinWithParams(name, group, params) {
    openWin({
        name: name,
        url: aurl('html/' + group + '/' + name),
        slidBackEnabled:false,
        delay: 100,
        pageParam:params
    });
}

function nofind(){
    var img=event.srcElement;
    img.src="http://img.movesay.com/app/img/block.jpg";
    img.onerror = null;
}

function parseTapmode(){
}

function openTrade(title,name,img){
    //alert("title="+title+"\n"+"name="+name+"\n"+"img="+img);
    //如果未登录
    if(!chkLogin(1)){
        return;
    }

    var marketParams = {
        "title":title,
        "market_name":name,
        "img":img
    };

    //alert(JSON.stringify(marketParams));
    localStorage.setItem('market_param',JSON.stringify(marketParams));
    openWin({
        name: 'trade_h',
        url: aurl('html/trade/trade_h'),
        slidBackEnabled: false,
        delay: 100,
        pageParam:{
            "title":title,
            "market_name":name,
            "img":img
        }
    });
}

//获取get参数
function iv(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function click_play(){
    if(mem("sys_sound") == 2){
        return;
    }
    if(typeof $("#click_voice")[0] == "undefined"){
        $(document.body).append('<audio id="click_voice"> <source src="http://img.movesay.com/app/img/click.wav" type="audio/wav"> </audio>');
        //$("#click_voice")[0].play();
    }else{
        $("#click_voice")[0].play();
    }
}


function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}



function art(msg) {
        if($(".move_dialog")){
            $(".move_dialog").remove();
        }
        $(document.body).append('<div class="move_dialog" style="position:fixed !important;margin:auto;top:50%;z-index:999999;background: #0e0e0e;height: 2.5rem;width: auto;color: #9a9a9a;left: 40%;line-height: 2.5rem;padding: 0 1rem;filter: alpha(opacity=80);-moz-opacity: 0.8;opacity: 0.8;">'+msg+'</div>');
        var height =  screen.height > $(window).height() ? $(window).height() : screen.height;
        $('.move_dialog').css("top",(height - $('.move_dialog').height())/2);
        $('.move_dialog').css("left",($(window).width() - $('.move_dialog').width())/2);

        if (Debug)
        {
            setTimeout('$(".move_dialog").remove();',10000);
        }else {
            setTimeout('$(".move_dialog").remove();',3000);
        }
}

function loading(msg){
    alog("toast-loading信息:");
    alog(msg);
    if( typeof toast == 'undefined' ){
        window.toast = new auiToast();
    }
    else {
        toast.hide();
    }

    if (typeof msg == 'undefined' || msg.length == 0)
        msg = '请稍后...';

    toast.loading({
        title: msg,
        duration:5000
    },function(ret){
        alog(ret);
        setTimeout(function(){
            toast.hide();
        }, 5000);
    });

}

function alog(log, type) {
    return;
    put_log(log,type);
    return;
}

function put_log(log){

    if(typeof log=="object"){
        log =  JSON.stringify(log);
    }
    var url = 'http://logs.a.com/index.php';
    console.log(url);

    $.ajax({
        url: url,
        method: 'post',
        cache : false,
        timeout: 5,
        dataType:'json',
        data: { 'content':log}
    }, function (ret, err) {
    });
}


/**请求
 * 通用 (不需要登录)
 * @param url
 * @param method
 * @param datas
 * @param callBack
 */
function Ajax(url, method, datas, callBack, dataType) {

    url = url.substr(0,1) == '/' ? url : '/'+ url;
    url = BASE_URL_ACTION + url + '?ajax=1&t=' + Math.random();
    alog('正在请求url,地址为:'+url);
    alog(url);
    $.ajax({
        type: method,
        url: url,
        data: datas,
        dataType: 'json',
        timeout: 30000,
        success: function (ret,err) {

            alog(JSON.stringify(ret));
            if (ret){
                if(ret.status == 1)
                {
                    callBack(ret,err);
                }
                else if( ret.status == -97)
                {
                    //进行到第一步,准备进入第二步
                    mem('ID',ret.info.ID);
                    mem('TOKEN',ret.info.TOKEN);
                    openWin({
                        name: 'reg2_h',
                        url: aurl('html/user/reg2_h'),
                        slidBackEnabled:false,
                        delay: 100,
                        pageParam:{
                            'title' : '完善交易信息',
                            'target':'reg2_h'
                        }
                    });

                }else if (ret.status == -98)
                {
                    //进行到第二步,准备进入第三部
                    alog("open reg3_h");
                    openWin({
                        name: 'reg3_h',
                        url: aurl('html/user/reg3_h'),
                        slidBackEnabled:false,
                        delay: 100,
                        pageParam:{
                            'title' : '完善个人信息',
                            'target':'reg3_h'
                        }
                    });
                }else {
                    //其他错误
                    art(ret.info);
                }
            }else {
                art('数据结构错误');
            }

            callBack(ret,err);
        },
        error: function (xhr, type) {
            //art('网络错误')
        }
    });
}

/**请求
 * 通用 (登录信息)
 * @param url
 * @param method
 * @param datas
 * @param callBack
 */
function UserAjax(url, method, datas, callBack, dataType) {

    url = url.substr(0,1) == '/' ? url : '/'+ url;
    if (!chkLogin()) {
        art("您目前未登录,请先登录");
        return false;
    }
    url = BASE_URL_ACTION + url + '?ajax=1&t='+Math.random();
    alog("正在进行http请求");
    alog(url);
    $.ajax({
        type: method,
        url: url,
        data: datas,
        dataType: 'json',
        timeout: 30000,
        headers:{
            'ID':mem('ID'),
            'TOKEN':mem('TOKEN'),
            'AUTHOR':'movesay.com'
        },
        success: function (data) {
            alog(data);
            callBack(data);
        },
        error: function (xhr, type) {
            //art('网络错误,错误类型:'+type);
        }
    });

}

/*
 * 登录状态判断
 */
function chkLogin(type) {
    if (!mem('ID') || !mem('TOKEN')) {
        if (typeof type == "undefined") {
            alog('chkLogin type undefined1');
            return false;
        } else {
            alog('chkLogin type undefined2');
            //如果未登录
            openWin({
                name: 'login_h',
                url: aurl('html/user/login_h'),
                slidBackEnabled: false,
                delay: 100
            });
            return false;
        }
    }
    alog(mem('ID') + '|' + mem('TOKEN'));
    alog('已登录');
    return true;
}

function loginOut(){
    mem('ID',null);
    mem('TOKEN',null);
    //清除tabid的缓存
    mem("TABID",null);
    art("退出成功");
    open_win("index",'index');
}

//API改写 START
function openWin(data) {

    if (chk_dev()) {
        alog("openWin html");
        alog(data);
        //传参
        if(typeof data.pageParam != "undefined"){
            data.url = data.url+"&"+$.param(data.pageParam)
        }
        window.top.location.href = data.url;
    }
}
function closeWin(){

}

//返回首页,web版暂时未写,重新加载功能未实现,原因可能和api.openWin方法有关
function backToHome(needReload) {
    parent.location.href = "/wap";
}

function getWinHight(){
    return $(window).height();
}

function getWinWidth(){
        return $(window).width();
}

function openFrame(data){
        alog("openFrame html");
        alog(data);
        var show_str ="";
        var background_str = "";
        var scrolling_str = "";
        if(typeof data.hide != "undefined" && data.hide){
            show_str = "display:none;"
        }
        if(typeof data.background != "undefined" && data.background){
            background_str = "background-color:"+data.background+";"
        }
        if(typeof data.scrolling != "undefined" && !data.scrolling){
            scrolling_str = 'scrolling="no"';
        }else{
            scrolling_str = 'scrolling="yes"';
        }
        //传参
        if(typeof data.pageParam != "undefined"){
            data.url = data.url+"&"+$.param(data.pageParam)
        }
        alog(data);
        $(document.body).append(
            '<iframe name="'+data.name+'" id="'+data.name+'" '+scrolling_str+' src="'+
            data.url+'" style="border: none;position: absolute;'+
            background_str+show_str
            +'top: ' + +data.rect.y+
            'px;z-index: 2;left: ' +data.rect.x+
            'px;width: ' +data.rect.w+
            'px;height: ' + +data.rect.h+
            'px;"></iframe>');

}

function backWithFun(backFun){
         backFun();
}

//API改写END
function back(){
        window.history.back();
}


/*
 * 远程打开url
 */
function aurl(url, cache) {
    //兼容不带/的url
    if(url.substr(0,1) != '/'){
        url = '/' + url;
    }
    //兼容以html开头的url
    if(/^\/html/.test(url)){
        url = url.replace('/html','/wap');
    }

    if(url.substr(0,4) != '/wap'){
        url = '/wap'+url;
    }

    url = Host + url;
    if (isNull(cache)) {
        rand = Math.random() * 10;
        url  = url + '?t=' + rand;
    }
    alog('正在打开地址:' + url);
    return url;
}

/*
 * 本地缓存键值对
 */
function mem() {
    var key   = arguments[0] ? arguments[0] : '';
    var value = arguments[1];
    //如果键为空,退出
    if (!key) {
        alog('[缓存],key不存在异常');
        return;
    }

    //如果传入的值为null,那么清除缓存
    if (value === null) {
        alog('[缓存],清除缓存,key=' + key);
        return localStorage.removeItem(key);
    }
    //如果传入了值,那么写入缓存
    if (key && value) {
        alog('[缓存],写入缓存,key=' + key + '|value=' + value);
        return localStorage.setItem(key, value);
    }
    //如果没有传入值,那么获取缓存
    if (key && !value) {
        alog('[缓存],获取缓存,key=' + key + '|value=' + localStorage.getItem(key));
        return localStorage.getItem(key);
    }
}

/**
 * 缓存获取对象数组
 */
function memObj() {
    var key   = arguments[0] ? 'obj_' + arguments[0] : '';
    var value = arguments[1];
    //如果键为空,退出
    if (!key) {
        alog('[对象缓存],key不存在异常');
        return;
    }

    //如果传入的值为null,那么清除缓存
    if (value === null) {
        alog('[对象缓存],清除对象缓存,key=' + key);
        return localStorage.removeItem(key);
    }
    //如果传入了值,那么写入缓存
    if (key && value) {
        value = tostring(value);
        alog('[对象缓存],写入对象缓存,key=' + key + '|value=' + value);
        return localStorage.setItem(key, value);
    }
    //如果没有传入值,那么获取缓存
    if (key && !value) {
        var retv = localStorage.getItem(key);
        alog('[对象缓存],获取对象缓存,key=' + key + '|value=' + retv);
        retv = isNull(retv) ? '' : JSON.parse(retv);
        return retv;
    }
}

/**
 * 判断为空
 */
function isNull(str) {
    if (!str || str == '' || str == 'undefined' || typeof str == 'undefined' || str == null) {
        return true;
    } else {
        //检查空对象{}
        if (typeof str === "object" && !(str instanceof Array)) {
            var hasProp = false;
            for (var prop in str) {
                hasProp = true;
                break;
            }
            if (hasProp) {
                str = [str];
            } else {
                return true;
            }
        }
        return false;
    }
}

/*
 * 合并对象数组
 * */
function merge(obj1, obj2) {
    var c = extend({}, [obj1, obj2]);
    delete c['0'];
    delete c['1'];
    return c;
}
function extend(des, src, override) {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++)
            extend(des, src[i], override);
    }
    for (var i in src) {
        if (override || !(i in des)) {
            des[i] = src[i];
        }
    }
    return des;
}
/*
 * 转换为字符串
 * */
function tostring(str) {
    return JSON.stringify(str);
}

/*
 * json转为obj
 * */
function toobj(ret) {
    return eval('(' + ret + ')');
}

/*
 * Javascript base64_encode() base64加密函数用于生成字符串对应的base64加密字符串
 * @param string str 原始字符串
 * @return string 加密后的base64字符串
 */
function base64_encode(str) {
    //转义单引号
    str = JSON.stringify(str);
    str = str.replace(new RegExp(/(')/g), "###dian###");
    return str;
}

/*
 * Javascript base64_decode() base64解密函数用于解密base64加密的字符串
 * @param string str base64加密字符串
 * @return string 解密后的字符串
 */
function base64_decode(str) {
    str = str.replace(new RegExp(/(###dian###)/g), "'");
    return JSON.parse(str);
}

/**
 * 异常捕获
 * fun 要执行的函数部分
 * 显示错误部分
 */
function trydo(fun, varmsg) {
    if (isNull(varmsg)) {
        art('trydo(fun,varmsg)参数个数不对!');
    }
    try {
        fun();
    } catch (e) {
        alog(varmsg + '#' + e.message + '|' + e.description + '|' + e.description + '|' + e.number + '|' + e.name, 1);
    }
}

//打开资讯列表
function open_art_list(){
    openWin({
        name: "newslist_h",
        url: aurl('html/art/newslist_h'),
        slidBackEnabled:false,
        delay: 100
    });
}

//打开资讯
function open_art(title,id){
    openWin({
        name: "art_h",
        url: aurl('html/art/art_h'),
        slidBackEnabled:false,
        delay: 100,
        pageParam: {
            id: id,
            title:title
        }
    });
}

//检查字符串是否包含汉字
function checkChinese(val){
    var conChinese = false;
    var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
    if(reg.test(val)){ conChinese = true; }

    return conChinese;
}


/*
=====================
验证码模块
=====================
 */
var random_32_String;
//阻止事件向上传递
function cancelSendEvent(event) {
    event.stopPropagation();
}

//隐藏验证码页面
function closeImgVerify() {
    $("#verify_mask").addClass("hide");
}

//显示验证码页面
function showVerifyView() {
    $("#verify_mask").removeClass("hide");
    refreshImg();
}

//生成32位随机码
function randomString() {
    len = 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i <len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//点击刷新图片
function refreshImg() {
    var random_32_Str = randomString();
    $("#verifyCode_img").attr("src","/app/index/verify?randstr="+random_32_Str);
    random_32_String = random_32_Str;
    return random_32_Str;
}

//点击发送短信验证码
function clickSendMsgCode(url) {

    console.log(random_32_String);
    var randcode = $("#inputRandcode").val();
    var moble = $("#mobile").val();
    if (typeof randcode == 'undefined' ||
        randcode.length == 0)
    {
        art("请输入验证码");
        return;
    }

    //eg. 'app/login/sendMoble'
    Ajax(url,'get',{
        'randstr' :random_32_String,
        'randcode':randcode,
        'moble':moble
    },function(ret) {
        alog(ret);

        if (ret.status == 1)
        {
            //关闭验证码窗口
            closeImgVerify();
            //清空验证码输入框
            $("#inputRandcode").val("");
        }

        art(ret.info);
    });
}

//点击发送语音验证码
function clickSendVoiceCode(url) {

}

/*
 url 验证码检验的接口地址
 */
function createRequestVerifyView(url) {

    var node = '<div id="verify_mask" class="verify_mask hide" onclick="closeImgVerify()">\
                <div class="verify_img_container" onclick="cancelSendEvent(event)">\
                <ul>\
                <div class="title aui-border-b">验证手机</div>\
                <li class="trblBor">\
                <input id="inputRandcode" type="text" tapmod="" onclick="_focus(this)" name="randcode" placeholder="输入验证码">\
                <img src="" id="verifyCode_img" onclick="refreshImg()">\
                </li>\
                <li style="border: none">\
                <span class="btn-white-color" tapmod="" onclick="clickSendMsgCode(\''+url+'\')">发送短信验证码</span>\
                <span class="btn-white-color" style="float: right" tapmod="" onclick="clickSendVoiceCode(\''+url+'\')">发送语音验证码</span>\
                </li>\
                </ul>\
                </div>\
                </div>';

    alog(node);

    //判断验证码的节点是否存在,为0时表示不存在
    if ( $('#verify_mask').length == 0 )
    {
        $('body').append(node);
        showVerifyView();

    }
    else {
        if ( $('#verify_mask').hasClass('hide') )
        {
            showVerifyView();
        }
        else {
            closeImgVerify();
        }
    }
}


/*
 =====================
  加载模块
 =====================
 */
//滚动条在Y轴上的滚动距离
function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
//文档的总高度
function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//浏览器视口的宽度
function getWindowWidth(){
    var windowWidth = 0;
    if(document.compatMode == "CSS1Compat"){
        windowWidth = document.documentElement.clientWidth;
    }else{
        windowWidth = document.body.clientWidth;
    }
    return windowWidth;
}

//滚动条是否到达底部 == 加载更多数据
function isScrollToBottom () {
    return ( getScrollTop() + getWindowHeight() == getScrollHeight() );
}


/*
 ======================================
 刷新模块
    采用aui2的框架,依赖于aui-toast.js
 ======================================
 */

/*
    二维码方法

 */


function fs_img(path,callback){
    alog('fs_img' + path);
    var trans = api.require('trans');
    trans.decodeImgToBase64({
        imgPath : path
    }, function (ret, err) {
        console.log(ret);
        if (ret.status) {
            alog('获取图片缓存base64路径:'+"data:image/jpg;base64," + ret.base64Str);
            callback("data:image/jpg;base64," + ret.base64Str);
        } else {
            alog('获取图片缓存绝对路径:'+path);
            callback(path);
        }
    });
}

/*
 * 聚焦
 */
function _focus(o){
    o.focus();
}

/*
 * 最小小数位
 */
function _min(n,o){
    var regex;
    switch(n){
        case 1:
            regex = /^\d+\.?\d{0,1}$/;break;
        case 2:
            regex = /^\d+\.?\d{0,2}$/;break;
        case 3:
            regex = /^\d+\.?\d{0,3}$/;break;
        case 4:
            regex = /^\d+\.?\d{0,4}$/;break;
        case 5:
            regex = /^\d+\.?\d{0,5}$/;break;
        case 6:
            regex = /^\d+\.?\d{0,6}$/;break;
        case 7:
            regex = /^\d+\.?\d{0,7}$/;break;
        case 8:
            regex = /^\d+\.?\d{0,8}$/;break;
        default:
            regex = /^\d+\.?\d{0,2}$/;break;
    }
    var v = parseFloat(o.value);
    if (!regex.test(o.value))
    {
        v = v.toFixed(n);
        o.value = isNaN(v) ? '' : v;
        o.focus();
    }
}
 //判断是否为正整数
function isInteger(num) {
    return (num%1 === 0 && num>0)
}

//对象是否是数组
function isArray(obj){

    if (typeof obj == 'undefined')
        return false;
    //return obj.constructor.name == 'Array';
    return Object.prototype.toString.call(obj) === '[object Array]';
}

/*
 ======================================
 弹出菜单
 依赖aui-popup.js
 ======================================
 */

var clickMenuCallBack;
function createRightMenu (titles,callback){

    clickMenuCallBack = callback;
    if( !isArray(titles) )
    {
        art('titles参数错误');
        return;
    }

    var opt = '<div class="aui-popup-arrow"></div>';
    opt += '<div class="aui-popup-content">\
                <ul class="aui-list aui-list-noborder">';

    for( var index in titles )
    {
        opt += '<li class="aui-list-item" onclick="clickRightMenuIndex('+index+')">\
                    <div class="aui-list-item-inner">';
        opt += titles[index];
        opt += '</div> </li>';
    }
    opt += '</ul> </div>';
    return opt;
}

function clickRightMenuIndex(index){
    if ( typeof clickMenuCallBack != 'function'){
        alog('未定义点击的回调方法');
        return;
    }
    clickMenuCallBack(index);
}

function equalOneString(){
    var obj = arguments[0];
    if( obj == null || obj == undefined) {
        return false
    }

    var index = 1;
    var isEqual = false;
    for(;;index++){
        var str = arguments[index];
        if( str != undefined && str != null){
            if( obj === str) return true;
        }
        else {
            break;
        }
    }
    return isEqual;
}


function configWebInfo(){
    var data = memObj('webInfo');
    try{
        //$('title').html(data.web_title.value);
        $('meta').filter(function(index){return this.name == 'Keywords'}).attr('content',data.web_keywords.value);
        $('meta').filter(function(index){return this.name == 'Description'}).attr('content',data.web_description.value);
    }
    catch (e){

    }

}

