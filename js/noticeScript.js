$(document).ready(function(){
    $(".noticeContent").hide();
    $(".notice").click(function(){
        $(this).siblings(".noticeContent").hide(700);
        $(this).next(".noticeContent").slideDown(700);
        
    })
    $(".noticeArrowImg").hide();
    $(".notice").mouseenter(function(arrowShow){
        $(this).find(".noticeArrowImg").stop(true,true).show(400);
    })
    $(".notice").mouseout(function(arrowHide){
        $(this).find(".noticeArrowImg").stop(true,true).hide(400);
       
    })
  
        
})//jquery end

AOS.init({
      disable: function() {
    var maxWidth = 720;
    return window.innerWidth < maxWidth;
  }
});