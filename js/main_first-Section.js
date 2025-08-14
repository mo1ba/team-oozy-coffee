(function(){
  // 메인 배너
  const bannerSwiper = new Swiper(".home .mySwiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".home .swiper-pagination", clickable: true },
  });

  // 메뉴 슬라이더
  const menuSwiper = new Swiper(".home .menuSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".home .swiper-button-next",
      prevEl: ".home .swiper-button-prev",
    },
    breakpoints: {
      0:    { slidesPerView: 2.3, spaceBetween: 12 },
      720:  { slidesPerView: 2.5, spaceBetween: 14 },
      1024: { slidesPerView: 4,   spaceBetween: 30 },
    }
  });

  // 데이터
  const slideData = {
    new: [
      { imgSrc: "./img/main_first-Section_img/light_VanillaCream_coldbrew(1).png", title: "라이트 바닐라크림 콜드브루", description: "부드럽고 달콤한 맛, 당류 30%↓" },
      { imgSrc: "./img/main_first-Section_img/Peanut_proteinDrink(2).png",         title: "피넛 프로틴 드링크",     description: "영양 가득한 고단백 드링크" },
      { imgSrc: "./img/main_first-Section_img/zero_peachTea(3).png",                title: "제로 복숭아 아이스티",   description: "제로 칼로리, 당류 제로!" },
      { imgSrc: "./img/main_first-Section_img/brown_sugarLatte(4).png",             title: "브라운 슈가라떼",       description: "흑당의 달콤함을 더한 커피" },
      { imgSrc: "./img/main_first-Section_img/light_VanillaLatte(5).png",           title: "라이트 바닐라 라떼",     description: "맛은 그대로, 칼로리 DOWN" },
      { imgSrc: "./img/main_first-Section_img/Citron_crushColdbrew(6).png",         title: "유자 크러쉬 콜드브루",   description: "상큼달콤 유자 + 콜드브루" },
      { imgSrc: "./img/main_first-Section_img/Screws_StrawberrySmoothie(7).png",    title: "스크류 스트로베리 스무디", description: "사과+딸기 달콤 상큼" },
      { imgSrc: "./img/main_first-Section_img/real_watermelon(8).png",              title: "리얼 수박주스",           description: "100% 수박 주스" }
    ],
    best: [
      { imgSrc: "./img/main_first-Section_img/Peanut cream latte(1).png",           title: "피넛 크림라떼",           description: "에스프레소와 땅콩크림의 조화" },
      { imgSrc: "./img/main_first-Section_img/condensed milk cube latte(2).png",    title: "연유 큐브라떼",           description: "연유 큐브와 진한 라떼" },
      { imgSrc: "./img/main_first-Section_img/Cafe Mocha(3).png",                   title: "카페 모카",               description: "초콜릿과 에스프레소" },
      { imgSrc: "./img/main_first-Section_img/Green tea frappe(4).png",             title: "녹차 프라페",             description: "녹차의 깊은 풍미" },
      { imgSrc: "./img/main_first-Section_img/Plain yogurt smoothie(5).png",        title: "플레인 요거트 스무디",   description: "담백상큼 요거트" },
      { imgSrc: "./img/main_first-Section_img/Grapefruit ade(6).png",               title: "자몽 에이드",             description: "톡 쏘는 상큼함" },
      { imgSrc: "./img/main_first-Section_img/Deep Hazelnut Double Shot(7).png",    title: "딥 헤이즐넛 더블 샷",     description: "진한 헤이즐넛" },
      { imgSrc: "./img/main_first-Section_img/light_VanillaLatte(8).png",           title: "라이트 바닐라 라떼",      description: "가볍게 즐기는 바닐라" }
    ],
    coldbrew: [
      { imgSrc: "./img/main_first-Section_img/Deep Hazelnut Double Shot(7).png",    title: "딥 헤이즐넛 더블 샷",     description: "진한 콜드브루" },
      { imgSrc: "./img/main_first-Section_img/Green tea frappe(4).png",             title: "그린티 프라페",           description: "시원한 녹차 프라페" }
    ],
    dessert: [
      { imgSrc: "./img/main_first-Section_img/Peanut cream latte(1).png",           title: "피넛 크림 라떼",          description: "달콤 고소" },
      { imgSrc: "./img/main_first-Section_img/Green tea frappe(4).png",             title: "그린티 프라페",           description: "디저트처럼 달콤" }
    ]
  };

  // 슬라이드 교체
  const changeMenu = (category) => {
    const slides = slideData[category] || [];
    menuSwiper.removeAllSlides();
    const html = slides.map(item => `
      <div class="swiper-slide">
        <div class="menu-card">
          <img src="${item.imgSrc}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `);
    menuSwiper.appendSlide(html);
    menuSwiper.update();
  };

  // 카테고리 클릭 (위로 튀는 기본동작 방지 + active 토글)
  document.querySelectorAll('.home .menu-category li').forEach(li => {
    li.addEventListener('click', (e) => {
      e.preventDefault(); // a/href가 있든 없든 스크롤 방지
      document.querySelectorAll('.home .menu-category li').forEach(x => x.classList.remove('active'));
      li.classList.add('active');
      const category = li.dataset.category || li.textContent.trim().toLowerCase();
      changeMenu(category);
    });
  });

  // 초기 로드
  changeMenu('new');
})();