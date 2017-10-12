setInterval(function(){
    var date=new Date()
    var yuji=new Date(2017,9,23,0,0,0);
    var cha=yuji.getTime()-date.getTime()
    var tian=Math.floor(cha/(1000*60*60*24))
    $(".tt").html(tian<10?"0"+tian:tian)
    var shi=Math.floor(cha/(1000*60*60*24)%24)
    $(".hh").html(shi<10?"0"+shi:shi)
    var fen=Math.floor((cha/(1000*60))%60)
    $(".ff").html(fen<10?"0"+fen:fen)
    var miao=Math.floor((cha/1000)%60)
    $(".mm").html(miao<10?"0"+miao:miao)
},1000)
