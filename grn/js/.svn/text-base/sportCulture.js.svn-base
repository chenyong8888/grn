/**
 * Created by he.mingze on 2017/2/23.
 */
/**
 * Created by he.mingze on 2017/2/21.
 */
$.ajax({
    type:"POST",
    url:"../source/list2.json",
    success:function (data){
        //里程碑
        var $elem=$(document.createDocumentFragment()),
            milestoneBoxes=[];
        for(var i=0,len=data.length;i<len;i++){
            var year=data[i].year;
            var content=data[i].content[0].article;
            milestoneBoxes[i]=$('<div class="milestone_box step_top"><b>'+year+'</b><p>'+content+'</p></div>').appendTo($elem);
        }
        $(".milestone_boxes").append($elem);
        // 蓝条
        for(var i=0,len=data.length;i<len;i++){
            var content=data[i].content;
            var milestoneBoxBlue=$('<div class="milestone_box_blue milestone_box_blue'+i+'"><div class="big_ball"></div><div class="line"></div></div>');
            milestoneBoxBlue.appendTo(".blue_bar");
            var whiteHeight=$(milestoneBoxes[i]).offset().top+parseFloat(milestoneBoxes[i].css("height"))-milestoneBoxBlue.children(".big_ball").offset().top;
            if(whiteHeight>0){
                milestoneBoxBlue.children(".line").css("height",whiteHeight+40+"px");
            }else{
                milestoneBoxBlue.children(".line").css("height","40px");
            }
        }
        $(".blue_bar").children(".milestone_box_blue").children(".line").last().remove();
        //resize
        $(window).resize(function (){
            for(var i=0,len=data.length;i<len;i++){
                var milestoneBoxBlue=$('.milestone_box_blue'+i);
                var whiteHeight=$(milestoneBoxes[i]).offset().top+parseFloat(milestoneBoxes[i].css("height"))-milestoneBoxBlue.children(".big_ball").offset().top;
                if(whiteHeight>0){
                    milestoneBoxBlue.children(".line").css("height",whiteHeight+40+"px");
                }else{
                    milestoneBoxBlue.children(".line").css("height","40px");
                }
            }
        })
    }
});