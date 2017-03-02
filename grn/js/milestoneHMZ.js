/**
 * Created by he.mingze on 2017/2/21.
 */
$.ajax({
    type:"POST",
    url:"../source/list.json",
    success:function (data){
        //里程碑
        var $elem=$(document.createDocumentFragment()),
            $blue=$(document.createDocumentFragment()),
            milestoneBoxes=[];
        for(var i=0,len=data.length;i<len;i++){
            if(i==0){
                var year=data[i].year;
                var content=data[i].content;
                //判断是否有月份
                milestoneBoxes[i]=$('<div class="milestone_box milestone_box'+i+' step_top"><div class="title"><b>'+year+'</b><p class="underline"></p> </div></div>');
                for(var j=0,length=content.length;j<length;j++){
                    var mouth=content[j].mouth;
                    var article=content[j].article;
                    $('<div class="detail detail_step_top child'+j+'"><b>'+mouth+'</b><p class="article">'+article+'</p></div>').appendTo(milestoneBoxes[i]);
                }
                $elem.append(milestoneBoxes[i]);
            }else{
                var year=data[i].year;
                var content=data[i].content;
                //判断是否有月份
                milestoneBoxes[i]=$('<div class="milestone_box milestone_box'+i+' step_top"><div class="title"><b>'+year+'</b><p class="underline"></p></div></div>').fadeOut(0);
                for(var j=0,length=content.length;j<length;j++){
                    var mouth=content[j].mouth;
                    var article=content[j].article;
                    $('<div class="detail detail_step_top child'+j+'"><b>'+mouth+'</b><p class="article">'+article+'</p></div>').appendTo(milestoneBoxes[i]);
                }
                $elem.append(milestoneBoxes[i]);
            }

        }
        $(".milestone_boxes").append($elem);
        // 蓝条
        for(var i=0,len=data.length;i<len;i++){
            if(i==0){
                var content=data[i].content;
                var milestoneBoxBlue=$('<div data-i="'+i+'"class="milestone_box_blue milestone_box_blue'+i+' step_top"><div class="big_ball"></div></div>');
                for(var j=0,length=content.length;j<length;j++){
                    if(j==0){
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".title").offset().top;
                        $('<div class="line line0"></div>').css("height",height+"px").appendTo(milestoneBoxBlue);
                        $('<div class="small_ball"></div>').appendTo(milestoneBoxBlue);
                    }else{
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".child"+(j-1)).offset().top;
                        $('<div class="line line'+j+'"></div>').css("height",height+"px").appendTo(milestoneBoxBlue);
                        $('<div class="small_ball"></div>').appendTo(milestoneBoxBlue);
                    }
                }
                milestoneBoxBlue.appendTo(".blue_bar");
                var whiteHeight=$(milestoneBoxes[i]).children(".detail").last().offset().top+parseFloat($(milestoneBoxes[i]).children(".detail").last().css("height"))-milestoneBoxBlue.children(".small_ball").last().offset().top;
                if(whiteHeight>0){
                    var white=$('<div class="leave_white'+i+'"></div>').css("height",whiteHeight+"px");
                }else{
                    var white=$('<div class="leave_white'+i+'"></div>').css("height","0px");
                }
                white.appendTo(".blue_bar");
            }else{
                var content=data[i].content;
                var milestoneBoxBlue=$('<div data-i="'+i+'"class="opened milestone_box_blue milestone_box_blue'+i+' step_top"><div class="big_ball"></div></div>');
                for(var j=0,length=content.length;j<length;j++){
                    if(j==0){
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".title").offset().top;
                        $('<div class="line line0"></div>').css("height",height+"px").appendTo(milestoneBoxBlue);
                        $('<div class="small_ball"></div>').appendTo(milestoneBoxBlue);
                    }else{
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".child"+(j-1)).offset().top;
                        $('<div class="line line'+j+'"></div>').css("height",height+"px").appendTo(milestoneBoxBlue);
                        $('<div class="small_ball"></div>').appendTo(milestoneBoxBlue);
                    }
                }
                milestoneBoxBlue.appendTo(".blue_bar");
                var whiteHeight=$(milestoneBoxes[i]).children(".detail").last().offset().top+parseFloat($(milestoneBoxes[i]).children(".detail").last().css("height"))-milestoneBoxBlue.children(".small_ball").last().offset().top;
                if(whiteHeight>0){
                    var white=$('<div class="leave_white'+i+'"></div>').css("height",whiteHeight+"px");
                }else{
                    var white=$('<div class="leave_white'+i+'"></div>').css("height","0px");
                }
                white.appendTo(".blue_bar");
            }

        }
        // $(".blue_bar").append($blue);
        $(".blue_bar").children().last().remove();
        //resize
        $(window).resize(function (){
            for(var i=0,len=data.length;i<len;i++){
                var content=data[i].content;
                var milestoneBoxBlue=$('.milestone_box_blue'+i);
                for(var j=0,length=content.length;j<length;j++){
                    if(j==0){
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".title").offset().top;
                        milestoneBoxBlue.children(".line"+j).css("height",height+"px");
                    }else{
                        var height=$(milestoneBoxes[i]).children(".child"+j).offset().top-$(milestoneBoxes[i]).children(".child"+(j-1)).offset().top
                        milestoneBoxBlue.children(".line"+j).css("height",height+"px");
                    }
                }
                var whiteHeight=$(milestoneBoxes[i]).children(".detail").last().offset().top+parseFloat($(milestoneBoxes[i]).children(".detail").last().css("height"))-milestoneBoxBlue.children(".small_ball").last().offset().top
                if(whiteHeight>0){
                    $('.leave_white'+i).css("height",whiteHeight+"px");
                }else{
                    $('.leave_white'+i).css("height","0px");
                }
            }
        });
        $(".big_ball").on("click",function (){
            if(!$(this).hasClass("opened")){
                $(this).addClass("opened");
                $(this).parent().children(".line").fadeOut();
                $(this).parent().children(".small_ball").fadeOut();

                var i=$(this).parent().attr("data-i");
                $(".milestone_box"+i).children(".detail").fadeOut();
            }else{
                $(this).removeClass("opened");
                $(this).parent().children(".line").fadeIn();
                $(this).parent().children(".small_ball").fadeIn();

                var i=$(this).parent().attr("data-i");
                $(".milestone_box"+i).children(".detail").fadeIn();
            }
        })
    }
});