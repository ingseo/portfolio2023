win_width=$(window).width()
cookiedate=document.cookie;


if(cookiedate.indexOf("port=done")<0 && win_width>1400){
    document.getElementById("bg").style.display="block";
    document.getElementById("warning").style.display="block";
}else if(uAgent.indexOf("edge")!=-1){
    document.getElementById("bg").style.display="none";
    document.getElementById("warning").style.display="none";  
}else{
    document.getElementById("bg").style.display="none";
    document.getElementById("warning").style.display="none";
}

function setCookie(name, value, expiredays){
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie=name+"="+escape(value)+"; path=/; expires=" + todayDate.toGMTString()+";"
}

function todayCloseWin(){
    setCookie("port", "done", 1)
    document.getElementById("bg").style.display="none";
    document.getElementById("warning").style.display="none";
}

function closeWin(){
    document.getElementById("bg").style.display="none";
    document.getElementById("warning").style.display="none";
}



setTimeout(function(){
  $('.bg').hide()
    $('.warning').fadeOut()
  },10000)