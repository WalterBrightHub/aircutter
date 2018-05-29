$(function(){
    //第一个时钟LOGO可以切换广告显示和隐藏
    $egg=$(".glyphicon-time").eq(0);
    $egg.bind("click",function(){
        var $ads=$(".ads");
        if($ads.is(":visible")){
            $ads.hide(300);
            //滑动到顶端
            $('html').scrollTop(0);
            $.mobile.silentScroll(0);
        }
        else{
            $ads.show(600);
        }
    })

    //将所有黄色链接指向不良信息举报中心
    $sites=$(".ads a");
    $sites.attr("href","http://www.12377.cn/");
    //移除表格行高
    $tds=$(".ads td");
    $tds.removeAttr("height");
});