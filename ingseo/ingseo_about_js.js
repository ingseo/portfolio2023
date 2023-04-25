   var page=0
    var win_heigth = $(window).height();
    
    function scroll_top(){
        $('html').stop().animate({scrollTop:win_heigth*page}, 500, function(){
                $('.section').eq(page).find('.item').each(function(index, item){
                    console.log(index,item)
                    $(this).stop().delay(150*index).animate({opacity:1},500)
                })
            })
        $('.indi').text('0'+(page+1))
    }
    
    $('html, body, .main').on('mousewheel', function(event){
        event.preventDefault;
    })
    
    $('.page').on('mousewheel', function(event){
        delta=event.originalEvent.wheelDelta;
        has_animate=$('html').is(':animated')
        if(delta<0 && page==0 && !has_animate){
            page++;
            scroll_top();
        }else if(delta>0 && page==1 && !has_animate){
            page--;
            scroll_top();
        }
    })
    
$(document).ready(function(){
    scroll_top()
})
$(window).resize(function(){
    scroll_top()
})



  //Place this script at the end of the body tag

  window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
  form.reset();
  button.style = "display: none ";
  $("#my-form").css({display:"none"})
  $("<h1 style='color:#f0f0f0; position:absolute; top:calc(50% - 50px);' id=thanks>문의해주셔서 감사합니다.</h1>").appendTo(".contact")
  
  setTimeout(function(){
  $("#my-form").css({display:"block"})
  $("#my-form-button").css({display:"block"})
  $("#thanks").css({display:"none"})

  },5000)

  }

  function error() {
  status.innerHTML = "전송에 실패하였습니다. 새로고침해주세요.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
  });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
  success(xhr.response, xhr.responseType);
  } else {
  error(xhr.status, xhr.response, xhr.responseType);
  }
  };
  xhr.send(data);
  }
