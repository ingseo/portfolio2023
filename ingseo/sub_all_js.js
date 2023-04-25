//스크롤바
$('html').niceScroll({
    cursorcolor:"black",
    cursorwidth:"7px",
});

//탑버튼
$('.top_btn').click(function(){
    $('html, body').stop().animate({scrollTop:0});
});
$(document).ready(function(){
        scroll_top=$(window).scrollTop();
        if(scroll_top<=100){
            $('.top_btn').hide();
        }else{
            $('.top_btn').show();
        }
    });
$(window).scroll(function(){
        scroll_top=$(window).scrollTop();
        if(scroll_top<=100){
            $('.top_btn').fadeOut();
        }else{
            $('.top_btn').fadeIn();
        }
    });
