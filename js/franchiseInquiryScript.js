$(document).ready(function () {
  // $(".inquiryProcedures1").mouseenter(function(){
  //   $(this).stop(true, true).slideUp(300)
  //   $(this).stop(true, true).slideDown(300)

  // })
  $(window).scroll(function () {


    let scrollTop = $(document).scrollTop();
    let imgScrollEvent = $(".inquiryProceduresImg").offset().top;

    // console.log(scrollTop)
    // console.log(imgScrollEvent)
    
    $(".inquiryProceduresImg").each(function(index, item){
    if (imgScrollEvent - 500 < scrollTop) {
        let delay = index*100
        setTimeout(function(){
          $(item).removeClass("flip-box-inner")  
        },delay)           
    } else {
      $(".inquiryProceduresImg").stop(true, true).addClass("flip-box-inner")
    }
  }) })
})
// $(".inquiryProceduresImg").mouseenter(function () {
//   $(".inquiryProceduresImg").stop(true, true).addClass("flip-box-inner")
// })
// $(".inquiryProceduresImg").mouseleave(function () {
//   $(".inquiryProceduresImg").stop(true, true).removeClass("flip-box-inner")
// })

var swiper = new Swiper(".inquirySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
})
