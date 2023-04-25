var page=0
var win_heigth = $(window).height();
var this_height= win_heigth/5;


move_0(page);


function move_0(page){
    win_height=$(window).height();
    active1=$('.card_group1 .card1').eq(page)
    active2=$('.card_group2 .card2').eq(page)
    active3=$('.card_group3 .card3').eq(page)
    active1.addClass('current1');
    active2.addClass('current2');
    active3.addClass('current1');
    $('.card1').not(active1).attr('class','card card1');
    $('.card2').not(active2).attr('class','card card2');
    $('.card3').not(active3).attr('class','card card3');
    active1.stop().animate({top:win_height*0.5},500);
    active2.stop().animate({top:win_height*0.5},500);
    active3.stop().animate({top:win_height*0.5},500);
}
function move_down(page, callback){
    current=$('.current1');
    win_height=$(window).height();
    current.stop().animate({top:win_height+200},500,function(){
        $('.card1, .card3').css({top:-200})
        if(typeof callback=="function"){
            setTimeout(move_0,10,page)
            return page;
        }
    });
    current=$('.current2');
    win_height=$(window).height();
    current.stop().animate({top:-win_height+200},500,function(){
        $('.card2').css({top:win_height+200})
        if(typeof callback=="function"){
            setTimeout(move_0,10,page)
            return page;
        }
    });
}
function move_up(page, callback){
    current=$('.current1');
    win_height=$(window).height();
    current.stop().animate({top:-win_height+200},500,function(){
        $('.card1, .card3').css({top:win_height+200})
        if(typeof callback=="function"){
            setTimeout(move_0,10,page)
            return page;
        }
    });
    current=$('.current2');
    win_height=$(window).height();
    current.stop().animate({top:win_height+200},500,function(){
        $('.card2').css({top:-200})
        if(typeof callback=="function"){
            setTimeout(move_0,10,page)
            return page;
        }
    });
}


$('.indi').each(function(i){
    $(this).css({top:(this_height*i)})
})
function nav_down(){
    $('.indi').first().appendTo(".nav_group")
    win_height=$(window).height();
    $('.indi').each(function(i){
        $(this).css({top:(this_height*i)})
    })
}
function nav_up(){
    $('.indi').last().prependTo(".nav_group")
    win_height=$(window).height();
    console.log(page)
    $('.indi').each(function(i){
        $(this).css({top:(this_height*i)})
    })
}
function indi_top(){
    $('.indi').each(function(i){
        $(this).css({top:(this_height*i)})
    })
}

function text_move(){
    page=page%5
    $('.text_group .item').stop().animate({top:'50px', opacity:0})
    $('.text_group').not($('.text_group').eq(page)).hide()
    $('.text_group').eq(page).show()
    $('.text_group').eq(page).find('.item').each(function(index, item){
        $(this).stop().delay(250*index).animate({top:'0', opacity:1})
    })
}
function page_move(){
    if(page==0){
        $('.page').text(1)
    }else if(page==1 || page==-4){
        $('.page').text(2)
    }else if(page==2 || page==-3){
        $('.page').text(3)
    }else if(page==3 || page==-2){
        $('.page').text(4)
    }else if(page==4 || page==-1){
        $('.page').text(5)
    }
}

$('html').on('scroll mousewheel', function(event){
    delta=event.originalEvent.wheelDelta;
    has_animate=$('.card').is(':animated')
    if(delta<0 && !has_animate){
        page++
        page=page%5;
        move_down(page,move_0);
        nav_down()
        text_move()
        page_move()
    }else if(delta>0 && !has_animate){
        page--
        page=page%5
        move_up(page,move_0);
        nav_up()
        text_move()
        page_move()
    }
})

$('.nav_group li').click(function(){
    page=$(this).data("num")
    click = $(this).index();
    up_down=click-5;

    if (up_down > 0) {
        direction = Math.abs(click-5);
        console.log("direction"+direction)
        for (j = 0; j < direction; j++) {
            $('.indi').first().appendTo(".nav_group")
        }
        move_down(page,move_0);
        text_move()
    } else if (up_down <0) {
        direction = Math.abs(up_down);
        for (j = 0; j < direction; j++) {
            $('.indi').last().prependTo(".nav_group")
        }
        move_up(page,move_0);
    }
    indi_top()
    text_move()
    page_move()

})


$(document).ready(function(){
    text_move()
})
$(window).resize(function(){
    document.location.reload();
})