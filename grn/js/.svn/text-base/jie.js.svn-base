/**
 * Created by he.mingze on 2017/2/28.
 */
$(".jie").on("click",function (){
    if(!$(this).hasClass("nowActive")){
        $(this).children(".img_border").removeClass("borderHid");
        $(".xie").children(".img_border").addClass("borderHid");
        $(this).children(".logoBg").children("img").removeClass("imgHid");
        $(".xie").children(".logoBg").children("img").addClass("imgHid");
        $(this).children(".logoBg").removeClass("logoBgHid");
        $(".xie").children(".logoBg").addClass("logoBgHid");
        $(this).children(".logoBg").children("p").addClass("fontHid");
        $(".xie").children(".logoBg").children("p").removeClass("fontHid");
        $(this).addClass("nowActive");
        $(".xie").removeClass("nowActive");
        $(".XIE").addClass("hid");
        $(".JIE").removeClass("hid");
    }
});
$(".xie").on("click",function (){
    if(!$(this).hasClass("nowActive")){
        $(this).children(".logoBg").removeClass("logoBgHid");
        $(".jie").children(".logoBg").addClass("logoBgHid");
        $(this).children(".img_border").removeClass("borderHid");
        $(".jie").children(".img_border").addClass("borderHid");
        $(this).children(".logoBg").children("img").removeClass("imgHid");
        $(".jie").children(".logoBg").children("img").addClass("imgHid");
        $(this).children(".logoBg").children("p").addClass("fontHid");
        $(".jie").children(".logoBg").children("p").removeClass("fontHid");
        $(this).addClass("nowActive");
        $(".jie").removeClass("nowActive");
        $(".JIE").addClass("hid");
        $(".XIE").removeClass("hid");
    }
});
$(".littleJie").on("click",function (){
    if(!$(this).hasClass("now")){
        $(this).addClass("now");
        $(".littleXie").removeClass("now");
        $(".jieM").removeClass("hid");
        $(".xieM").addClass("hid");
        $(".XIE").addClass("hid");
        $(".JIE").removeClass("hid");
    }
});
$(".littleXie").on("click",function (){
    if(!$(this).hasClass("now")){
        $(this).addClass("now");
        $(".littleJie").removeClass("now");
        $(".xieM").removeClass("hid");
        $(".jieM").addClass("hid");
        $(".JIE").addClass("hid");
        $(".XIE").removeClass("hid");
    }
});