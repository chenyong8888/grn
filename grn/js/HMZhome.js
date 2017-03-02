/**
 * Created by he.mingze on 2017/1/5.
 */
//轮播控制
$(".swiper-button-prev").on("touchstart",function (){
    $(this).addClass("hover");
});
$(".swiper-button-prev").on("touchend",function (){
    $(this).removeClass("hover");
});
$(".swiper-button-next").on("touchstart",function (){
    $(this).addClass("hover");
});
$(".swiper-button-next").on("touchend",function (){
    $(this).removeClass("hover");
});
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 2000,//可选选项，自动滑动
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    loop : true,
    pagination : '.swiper-pagination',
    autoplayDisableOnInteraction : false,
    paginationClickable :true
});
function carouselHover(id){
    $(id+" span").on("mouseover",function (){
        $(this).click();
    })
}
carouselHover("#home-swiper-pagination");
carouselHover("#touzi-swiper-pagination");
//新闻中心
$(".maskA").on("mouseover",function (){
    $(this).next().children(".introduce").addClass("introduceUP");
    $(this).next().children(".introduce").children(".article").addClass("articleSHOW");
});
$(".maskA").on("mouseout",function (){
    $(this).next().children(".introduce").removeClass("introduceUP");
    $(this).next().children(".introduce").children(".article").removeClass("articleSHOW");
});
$(".us_yewu>div>div p").on("click",function (){
    if(!$(this).hasClass("act")){
        var i=$(this).attr("data-i");
        $(this).children(".noClicked").addClass("hid");
        $(this).children(".isClicked").removeClass("hid");
        $(".us_yewu>div>div p.act").children(".noClicked").removeClass("hid");
        $(".us_yewu>div>div p.act").children(".isClicked").addClass("hid");
        $(".us_yewu>div>div p.act").removeClass("act");
        $(this).addClass("act");
        $(".yewuImg_box.act").addClass("hidden");
        $(".yewuImg_box.act").removeClass("act");
        $(".yewuImg_box[data-i='"+i+"']").removeClass("hidden");
        $(".yewuImg_box[data-i='"+i+"']").addClass("act");
        $(".yewuArticle_box.act").addClass("hidden");
        $(".yewuArticle_box.act").removeClass("act");
        $(".yewuArticle_box[data-i='"+i+"']").removeClass("hidden");
        $(".yewuArticle_box[data-i='"+i+"']").addClass("act");
        $(".yewuRow>a[data-i='"+i+"']").removeClass("hidden");
        $(".yewuRow>a[data-i='"+i+"']").siblings("a").addClass("hidden");
    }
});
//股票部分控制
var img=new Image();
img.src="../images/homeBanner1HMZ.jpg";
img.onload=function (){
    var me=this;
    $(".gupiao canvas").css("height",parseFloat($(".tzdt").css("width"))*me.height/me.width-4+"px");
    $(window).resize(function (){
        $(".gupiao canvas").css("height",parseFloat($(".tzdt").css("width"))*me.height/me.width-4+"px");
    });
};



