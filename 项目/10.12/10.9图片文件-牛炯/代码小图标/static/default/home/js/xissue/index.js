/**
 * Created by Administrator on 2017/2/13.
 */
/* @update: 2016-7-4 11:33:33 */
function hoverScale() {
    var a = $(".bancomid").find("li");
    a.hover(function () {
        $(this).addClass("ban-hover")
    }, function () {
        $(this).removeClass("ban-hover")
    })
}
function chooseMon() {
}
function pageInit() {
    $(".date-list").bind("click", function () {
        var a = $(this).index();
        $(this).addClass("font-white").siblings().removeClass("font-white"), $(".date-bg").animate({left: 180 * a}, 200)
    })
}
function close() {
    var a = ($(".cha"), $(".product-infor-main"));
    a.delegate(".wenhao", "mouseenter", function () {
        $(this).find(".wenhao-area").show()
    }), a.delegate(".cha", "click", function () {
        $(this).parents(".wenhao").find(".wenhao-area").hide()
    })
}
$(function () {
    var a, t = $(".btn-rl"), s = $(".btn-lf"), i = $(".bancomid ul"), e = i.find("li"), n = e.length, l = !1, c = 300, o = 500, r = {
        init: function () {
            this.initScroll(), this.setLeft(), this.setRight(), $(".licai-banner-area").hover(function () {
                clearInterval(a)
            }, function () {
            })
        }, initScroll: function () {
            i.css({width: (e.length + 1) * c}), e.each(function () {
                var a = $(this), t = a.index();
                t ? a.css({left: (t + 1) * c}) : a.css({left: 0})
               // console.log(a.css('left'))
            })
        }, setLeft: function () {
            t.on("click", function () {
                $(".runRemove").removeClass("runInRight2 runInRight3 runInRight4 runInRight5"), l || (l = !0, i.find("li").eq(1).clone().insertAfter(i.find("li").eq(0)).css("left", c), i.find("li").each(function () {
                    var a = $(this), t = a.index();
                    t != n ? a.animate({left: (t - 1) * c}, o) : a.animate({left: (t - 1) * c}, o, function () {
                        i.find("li").eq(0).css("left", n * c).appendTo(i), i.find("li").eq(1).remove(), l = !1
                    })
                }))
            })
        }, setRight: function () {
            s.on("click", function () {
                $(".runRemove").removeClass("runInRight2 runInRight3 runInRight4 runInRight5"), l || (l = !0, i.find("li").eq(0).clone().insertAfter(i.find("li").eq(0)), i.find("li").eq(n).prependTo(i), i.find("li").each(function () {
                    var a = $(this), t = a.index();
                    a.css({left: (t - 1) * c}), t != n ? a.animate({left: t * c}, o) : a.animate({left: t * c}, o, function () {
                        i.find("li").eq(1).remove(), l = !1
                    })
                }))
            })
        }
    };
    r.init(), document.all && ($(".runRemove").removeClass("runInRight2 runInRight3 runInRight4 runInRight5"), $(".day-bao").removeClass("runInRight1"))
}), chooseMon();
var xiaoxinIndex = {};
xiaoxinIndex.animation = function () {
    function a() {
        var a = {top: $(window).scrollTop(), bottom: $(window).scrollTop() + $(window).height()};
        t.each(function () {
            var t = $(this).attr("data-animationType"), s = $(this).attr("data-animationOffset") || 100;
            a.top <= $(this).offset().top + $(this).height() && a.bottom >= $(this).offset().top + s && !$(this).data("start") && ($(this).data("start", !0), $(this).css("visibility", "visible"), $(this).addClass(t))
        })
    }

    var t = $(".animation");
    a(), $(window).bind("scroll", function () {
        a()
    })
}, xiaoxinIndex.init = function () {
    this.animation()
}, $(function () {
    xiaoxinIndex.init()
}), pageInit(), close();
var parallelPro = function () {
    var a = this;
    this.$selectOpt = $(".limit-date-main"), this.$selectItem = this.$selectOpt.find(".date-list"), a.$selectParam = {}, this.$selectOpt.each(function () {
        a.$selectParam[$(this).data("opt")] = $(this).find(".font-white").data("val")
    }), this.$selectParam.order = "default", this.$selectParam.pageSize = 12, this.$selectParam.pageNo = 1, this.$selectParam.label = 0, this.$selectParam.termNo = 0, this.$selectParam.amountNo = 0, this.$selectParam.channel = "pc", this.$noResult = $('<div class="no-result">\u4ea7\u54c1\u5df2\u88ab\u62a2\u5149\u5566~~\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u65b0\u54c1\u9646\u7eed\u53d1\u5e03\u4e2d\uff01</div>'), this.init()
};
parallelPro.prototype = {
    init: function () {
        this.bindEvent(), this.reqData();
        var a = this;
        $.ajax({
            url: "//dalicai.jd.com/total", type: "get", dataType: "jsonp", data: a.$selectParam, success: function (t) {
                t && t.total_income ? ($("#showAllDatas").html(a.allDatas(t)), $(".no-result").remove()) : ($(".no-result").remove(), $("#showAllDatas").html(a.allDatasNaN()))
            }, error: function () {
                $(".no-result").remove(), $("#showAllDatas").html(a.allDatasNaN())
            }
        })
    }, bindEvent: function () {
        var a = this;
        this.$selectItem.click(function () {
            $(this).hasClass("font-white") || (a.$selectParam[$(this).parents("ul").data("opt")] = $(this).data("val"), a.$selectParam.pageNo = 1), $(this).parents(".limit-date-main").find(".date-list").removeClass("font-white"), $(this).addClass("font-white"), a.$selectParam.termNo != $(this).index() && (a.$selectParam.termNo = $(this).index(), a.$selectParam.pageNo = 1, a.reqData())
        }), this.$sortBtn = $(".years-income");
        var t = 0;
        this.$sortBtn.click(function () {
            a.$selectParam.order = $(this).data("val"), $(this).parent().index() != t ? (a.$selectParam.desc = 0, a.$sortBtn.attr("class", "t-click years-income"), $(this).addClass("choose-one")) : 0 == a.$selectParam.desc ? (a.$selectParam.desc = 1, a.$sortBtn.attr("class", "t-click years-income"), $(this).addClass("choose-two")) : (a.$selectParam.desc = 0, a.$sortBtn.attr("class", "t-click years-income"), $(this).addClass("choose-one")), a.$selectParam.pageNo = 1, t = $(this).parent().index(), a.reqData()
        }), $("#pageWrap").delegate("a", "click", function () {
            $(this).hasClass("curr") || (a.$selectParam.pageNo = $(this).data("target"), a.reqData())
        }), $("#proListWrap").delegate(".have-chance", "click", function () {
            alert("\u6709\u7528\u6237\u4e0b\u5355\u4f46\u6682\u672a\u4ed8\u6b3e\uff0c\u8bf7\u60a8\u591a\u5237\u65b0\u51e0\u6b21\u9875\u9762\n\u8fd8\u6709\u673a\u4f1a\u8d2d\u4e70\u5230\u54e6\u3002")
        });
        var s = $(".all-product"), i = $(".product-choose-area"), e = $(".choose-list"), n = $(".list-tital");
        n.click(function (a) {
            a || a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0, i.hide()
        }), s.click(function (a) {
            a || a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0, i.show(), $(document).on("click", function () {
                i.hide()
            })
        }), e.click(function (t) {
            a.$selectParam.label != $(this).data("label") && (a.$selectParam.label = $(this).data("label"), a.$selectParam.pageNo = 1, a.reqData()), t || t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0;
            var s = $(this).text();
            $(this).parents().find(".tital-text").html(s), i.hide()
        });
        var l = $(".start-buy-mon"), c = $(".start-buy-area"), o = $(".choose-list2"), r = $(".list-tital2");
        l.click(function (a) {
            a || a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0, c.show(), $(document).on("click", function () {
                c.hide()
            })
        }), o.click(function (t) {
            a.$selectParam.amountNo != $(this).data("amountno") && (a.$selectParam.amountNo = $(this).data("amountno"), a.$selectParam.pageNo = 1, a.reqData()), t || t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0;
            var s = $(this).text();
            $(this).parents().find(".tital-text2").html(s), c.hide()
        }), r.click(function (a) {
            a || a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0, c.hide()
        })
    }, reqData: function () {
        var a = this, t = $('<div class="loading"></div>');
        $.ajax({
            url: "//dalicai.jd.com/dalicai",
            type: "get",
            dataType: "jsonp",
            data: a.$selectParam,
            success: function (s) {
                s.list && s.list.length > 0 ? ($("#proListWrap").html(a.renderData(s.list)), $("#pageWrap").html(a.setPage(s)), $(".no-result").remove()) : ($(".no-result").remove(), $("#proListWrap").html(""), $("#pageWrap").html(""), $(".product-infor-main").append(a.$noResult)), t.fadeOut(function () {
                    t.remove()
                }), $("#proListWrap tr").each(function (a) {
                    $(this).addClass("animation-delay-" + a)
                }), $("#proListWrap tr").hover(function () {
                    $(this).attr("class", ""), $(this).find(".wenhao").addClass("wen-z")
                }, function () {
                    $(this).find(".wenhao").removeClass("wen-z")
                })
            }
        })
    }, formatNumber: function (a, t) {
        var s = (a + "").split("."), i = [], e = [];
        i = s[0].split(""), i.reverse();
        for (var n = 0; n < i.length; n++)n % 3 || !n || e.push(","), e.push(i[n]);
        e.reverse();
        var l = "";
        return t && (s[1] ? s[1] += "000000001" : s[1] = "000000001", l = s[1] ? "." + s[1].substr(0, t) : ""), e.join("") + l
    }, renderData: function (a) {
        for (var t = "", s = ($(".product-name"), 0); s < a.length; s++) {
            {
                a[s].url
            }
            "jklc" == a[s].type && $.ajax({
                url: "//trade.jr.jd.com/myxjk/checkUserXJKStatus.action",
                type: "get",
                dataType: "jsonp",
                success: function (a) {
                    a && $("#proListWrap tr").each(function () {
                        "jklc" == $(this).data("type") && $(this).find("a").attr("href", a.xjkUrl)
                    })
                }
            }), t += "<tr data-type=" + a[s].type + ' class="animation" data-animationType="fadeInRight">', t += '<td class="percent-red"><em>' + a[s].item_yield + '</em>%<p class="percent-text">' + a[s].rateDesc + "</p></td>", "xblc" == a[s].type ? (t += '<td class="limit-days"><i class="fs-16">' + a[s].invest_period + '</i><div class="wenhao"><div class="wenhao-area"><i class="explain-sj"></i><div class="explain-box"></div><div class="explain-con"><div class="explain-main"><p>' + a[s].tips + '</p></div><i class="cha"><i class="cha-con"></i></i></div></div></div></td><td class="product-name"><a href="' + a[s].url + '"target="_blank" clstag="jr|keycount|jr_dalicai|lclb_gm_' + a[s].item_id + '">' + a[s].item_name + "</a>", 1 == a[s].isBank && (t += "<span class='tips yin'>\u94f6 <em class='yin-em'>\u94f6\u884c\u627f\u5151</em><i></i></span>"), 1 == a[s].isNew && (t += "<span class='tips xin'>\u65b0 <em class='xin-em'>\u65b0\u624b\u4e13\u4eab</em><i></i></span>"), 1 == a[s].isCash && (t += "<span class='tips xian'>\u73b0 <em class='xian-em'>\u53ef\u53d8\u73b0</em><i></i></span>"), 1 == a[s].isXjk && (t += "<span class='tips jin'>\u91d1 <em class='jin-em'>\u5c0f\u91d1\u5e93\u4e13\u4eab</em><i></i></span>"), t += '</td><td class="start-buy">' + a[s].mininvest_amount + "\u5143</td>", t += "1000\u4e07\u5143\u4ee5\u4e0a" == a[s].purchase_amount ? '<td class="surplus">' + a[s].purchase_amount + "</td>" : '<td class="surplus">' + a[s].purchase_amount + "\u5143</td>") : "jklc" == a[s].type ? (t += '<td class="limit-days"><i class="fs-16">' + a[s].invest_period + '</i><div class="wenhao"><div class="wenhao-area"><i class="explain-sj"></i><div class="explain-box"></div><div class="explain-con"><div class="explain-main"><p>' + a[s].tips + '</p></div><i class="cha"><i class="cha-con"></i></i></div></div></div></td><td class="product-name"><a href="' + a[s].url + '"target="_blank" clstag="jr|keycount|jr_dalicai|lclb_gm_' + a[s].item_id + '">' + a[s].item_name + "</a>", 1 == a[s].isBank && (t += "<span class='tips yin'>\u94f6 <em class='yin-em'>\u94f6\u884c\u627f\u5151</em><i></i></span>"), 1 == a[s].isNew && (t += "<span class='tips xin'>\u65b0 <em class='xin-em'>\u65b0\u624b\u4e13\u4eab</em><i></i></span>"), 1 == a[s].isCash && (t += "<span class='tips xian'>\u73b0 <em class='xian-em'>\u53ef\u53d8\u73b0</em><i></i></span>"), 1 == a[s].isXjk && (t += "<span class='tips jin'>\u91d1 <em class='jin-em'>\u5c0f\u91d1\u5e93\u4e13\u4eab</em><i></i></span>"), t += '</td><td class="start-buy">' + a[s].mininvest_amount + "\u5143</td>", t += "1000\u4e07\u5143\u4ee5\u4e0a" == a[s].purchase_amount ? '<td class="surplus">' + a[s].purchase_amount + "</td>" : '<td class="surplus">' + a[s].purchase_amount + "\u5143</td>") : "bxlc" == a[s].type ? (t += '<td class="limit-days"><em>' + a[s].invest_period + '</em>\u5929<div class="wenhao"><div class="wenhao-area"><i class="explain-sj"></i><div class="explain-box"></div><div class="explain-con"><div class="explain-main"><p>' + a[s].tips + '</p></div><i class="cha"><i class="cha-con"></i></i></div></div></div></td><td class="product-name"><a href="' + a[s].url + '"target="_blank" clstag="jr|keycount|jr_dalicai|lclb_gm_' + a[s].item_id + '">' + a[s].item_name + "</a>", 1 == a[s].isBank && (t += "<span class='tips yin'>\u94f6 <em class='yin-em'>\u94f6\u884c\u627f\u5151</em><i></i></span>"), 1 == a[s].isNew && (t += "<span class='tips xin'>\u65b0 <em class='xin-em'>\u65b0\u624b\u4e13\u4eab</em><i></i></span>"), 1 == a[s].isCash && (t += "<span class='tips xian'>\u73b0 <em class='xian-em'>\u53ef\u53d8\u73b0</em><i></i></span>"), 1 == a[s].isXjk && (t += "<span class='tips jin'>\u91d1 <em class='jin-em'>\u5c0f\u91d1\u5e93\u4e13\u4eab</em><i></i></span>"), t += '</td><td class="start-buy">' + a[s].mininvest_amount + "\u5143</td>", t += "1000\u4e07\u5143\u4ee5\u4e0a" == a[s].purchase_amount ? '<td class="surplus">' + a[s].purchase_amount + "</td>" : '<td class="surplus">' + a[s].purchase_amount + "\u5143</td>") : (t += '<td class="limit-days"><em>' + a[s].invest_period + '</em>\u5929</td><td class="product-name"><a href="' + a[s].url + '"target="_blank" clstag="jr|keycount|jr_dalicai|lclb_gm_' + a[s].item_id + '">' + a[s].item_name + "</a>", 1 == a[s].isBank && (t += "<span class='tips yin'>\u94f6 <em class='yin-em'>\u94f6\u884c\u627f\u5151</em><i></i></span>"), 1 == a[s].isNew && (t += "<span class='tips xin'>\u65b0 <em class='xin-em'>\u65b0\u624b\u4e13\u4eab</em><i></i></span>"), 1 == a[s].isCash && (t += "<span class='tips xian'>\u73b0 <em class='xian-em'>\u53ef\u53d8\u73b0</em><i></i></span>"), 1 == a[s].isXjk && (t += "<span class='tips jin'>\u91d1 <em class='jin-em'>\u5c0f\u91d1\u5e93\u4e13\u4eab</em><i></i></span>"), t += '</td><td class="start-buy">' + a[s].mininvest_amount + "\u5143</td>", t += "1000\u4e07\u5143\u4ee5\u4e0a" == a[s].purchase_amount ? '<td class="surplus">' + a[s].purchase_amount + "</td>" : '<td class="surplus">' + a[s].purchase_amount + "\u5143</td>"), t += '<td><a href="' + a[s].url + '"target="_blank" class="buy-now" clstag="jr|keycount|jr_dalicai|lclb_gm_' + a[s].item_id + '">\u7acb\u5373\u62a2\u8d2d</a></td></tr>'
        }
        return t
    }, allDatas: function (a) {
        var t = "", s = a.total_in_usr, i = new Number(a.total_in_ordr), e = new Number(a.total_income), n = (s / 1e4).toFixed(2), l = Math.round(i / 1e8 * 100) / 100, c = Math.round(e / 1e8 * 100) / 100;
        return t = "<ul><li><h3><em>" + n + "</em>\u4e07\u4eba</h3><span>\u53c2\u4e0e\u6295\u8d44\u7528\u6237</span></li><li><h3><em>" + l + "</em>\u4ebf\u7b14</h3><span>\u6295\u8d44\u6210\u4ea4\u603b\u7b14\u6570</span></li><li><h3><em>" + c + '</em>\u4ebf\u5143</h3><span>\u4e3a\u7528\u6237\u521b\u9020\u603b\u6536\u76ca</span></li><li class="right-none"><h3><em>100</em>%</h3><span>\u5386\u53f2\u5151\u4ed8\u7387</span></li></ul>'
    }, allDatasNaN: function () {
        var a = "";
        return a = '<ul><li><h3><em>--</em>\u4e07\u4eba</h3><span>\u53c2\u4e0e\u6295\u8d44\u7528\u6237</span></li><li><h3><em>--</em>\u4ebf\u7b14</h3><span>\u6295\u8d44\u6210\u4ea4\u603b\u7b14\u6570</span></li><li><h3><em>--</em>\u4ebf\u5143</h3><span>\u4e3a\u7528\u6237\u521b\u9020\u603b\u6536\u76ca</span></li><li class="right-none"><h3><em>100</em>%</h3><span>\u5386\u53f2\u5151\u4ed8\u7387</span></li></ul>'
    }, setPage: function (a) {
        var t = "";
        1 != a.pageNo && (t += '<a data-target="' + (a.pageNo - 1) + '" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY" class="up-page"><i class="prev-i">&lt;</i><em>\u4e0a\u4e00\u9875</em></a>', t += '<a data-target="1" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY">1</a>'), a.pageNo - 4 > 0 && (t += '<span class="apostrophe">...</span>');
        for (var s = a.pageNo - 3, i = 0; 2 > i; i++)s++, 2 > s || (t += '<a data-target="' + s + '" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY">' + s + "</a>");
        t += '<a data-target="' + a.pageNo + '" href="javascript:;" class="curr">' + a.pageNo + "</a>";
        for (var e = a.pageNo, n = 0; 2 > n; n++)e++, e >= a.totalPage || (t += '<a data-target="' + e + '" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY">' + e + "</a>");
        return a.totalPage - a.pageNo > 3 && (t += '<span class="apostrophe">...</span>'), a.pageNo != a.totalPage && (t += '<a data-target="' + a.totalPage + '" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY">' + a.totalPage + "</a>", t += '<a data-target="' + (a.pageNo + 1) + '" href="javascript:;" clstag="jr|keycount|jr_dalicai|lclb_FY" class="down-page"><em>\u4e0b\u4e00\u9875</em><i class="next-i">&gt;</i></a>'), t += '<span class="tol-pag">\u5171' + a.total + "\u6761\u8bb0\u5f55</span>"
    }
}, new parallelPro;