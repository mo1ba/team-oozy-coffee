$(document).ready(function(){
    // 마우스 들어오면 서브 전체 보여주기
    $(".h_nav").on("mouseenter", function(){
        $(".h_sub_nav, .h_sub_bg").stop(true, true).slideDown(300);
    });

    // 마우스 벗어나면 서브 전체 닫기
    $(".h_nav").on("mouseleave", function(){
        $(".h_sub_nav, .h_sub_bg").stop(true, true).slideUp(300);
    });

    // 모바일 버전 메뉴버튼 클릭 후 열기/닫기
    $(".h_btn_menu").on("click",function(){
        $(".h_side_nav").animate({
            right: "0px"
        }, 500)
        $(".h_overlay").show()
    })
    $(".h_side_btn_sec, .h_overlay").on("click",function(){
        $(".h_side_nav").animate({
            right: "-400px"
        }, 500)
        $(".h_overlay").fadeOut(300)
        // esc버튼을 누르면 side_nav의 sub메뉴들이 모두 들어가게 ∨
        $(".h_side_nav_wrap_sub").stop(true, true).slideUp(500)
    })

    // 사이드 메뉴바 클릭시 호버
    $(".h_side_nav_wrap>li").on("click",function(){
        $(this).siblings().children(".h_side_nav_wrap_sub").stop(true, true).slideUp(500)
        $(this).children(".h_side_nav_wrap_sub").stop(true, true).slideToggle(500)
    })
}) // Jquery End