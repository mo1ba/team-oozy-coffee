$(document).ready(function () {
    function initSwiper() {
        if (window.innerWidth <= 1024) {
            if (!window.mySwiper) {
                window.mySwiper = new Swiper(".sec3_slide_wrap", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            }
        }
    }

    $(window).on('load resize', initSwiper);

    $(window).scroll(function () {
        let scrollTop = $(document).scrollTop();
        let sec2Tit = $(".sec2_arti_txt_tit").offset().top;

        console.log(scrollTop)
        console.log(sec2Tit)

        if (sec2Tit - 500 < scrollTop) {
            $(".sec2_arti_txt_tit").addClass("active");
        } else if (sec2Tit - 500 > scrollTop) {
            $(".sec2_arti_txt_tit").removeClass("active");
        }
    })
})



