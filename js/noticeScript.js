$(document).ready(function(){
    $(".noticeContent").hide();
    $(".notice").click(function(){
         var $currentContent = $(this).next(".noticeContent"); // 클릭한 notice의 다음 noticeContent를 선택

        // 형제 요소들 중 이미 열려있는 내용은 모두 숨기기
        $(this).siblings(".notice").next(".noticeContent").stop(true, true).slideUp(700);
    
        // 클릭한 요소의 내용만 토글 (열려있으면 닫고, 닫혀있으면 열고)
        $currentContent.stop(true, true).slideToggle(700);
        
    })
    $(".noticeArrowImg").hide();
    $(".notice").mouseenter(function(arrowShow){
        $(this).find(".noticeArrowImg").stop(true,true).show(400);
    })
   $(".notice").mouseleave(function(arrowHide){
        $(this).find(".noticeArrowImg").stop(true, true).hide(400);
       
    })
  
        
})//jquery end

AOS.init({
      disable: function() {
    var maxWidth = 720;
    return window.innerWidth < maxWidth;
  }
});