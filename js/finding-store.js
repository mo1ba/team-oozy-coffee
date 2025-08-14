document.addEventListener('DOMContentLoaded', () => {
  const grid    = document.querySelector('.store-grid');
  if (!grid) return;

  const cards   = Array.from(grid.querySelectorAll('.store-card'));
  const moreWrap = document.querySelector('.more-wrap');
  const moreBtn  = document.getElementById('moreBtn');

  // 화면 구간 정의
  const BP = { mobileMax: 720, tabletMax: 1024 };

  // 초기 표시 개수 / 더보기 증가량
  const initialVisible = { desktop: Infinity, tablet: 6, mobile: 3 };
  const loadStep       = { desktop: 0,        tablet: 6, mobile: 3 };

  let shownCount = 0;
  let lastMode   = getMode();

  function getMode(){
    const w = window.innerWidth;
    if (w <= BP.mobileMax) return 'mobile';
    if (w <= BP.tabletMax) return 'tablet';
    return 'desktop';
  }

  function applyVisibility(resetToModeDefault = true){
    const mode  = getMode();
    const limit = initialVisible[mode];

    if (resetToModeDefault) {
      // 모드 기본값으로 리셋
      cards.forEach((card, i) => {
        const hidden = (mode !== 'desktop') && (i >= limit);
        card.classList.toggle('is-hidden', hidden);
      });
      shownCount = Math.min(limit, cards.length);
    } else {
      // 이미 노출한 개수 유지
      cards.forEach((card, i) => {
        const hidden = (mode !== 'desktop') && (i >= shownCount);
        card.classList.toggle('is-hidden', hidden);
      });
    }

    // 더보기 버튼 표시/문구
    if (moreWrap && moreBtn){
      const needBtn = (mode !== 'desktop') && (shownCount < cards.length);
      moreWrap.style.display = needBtn ? 'flex' : 'none';
      if (needBtn){
        moreBtn.textContent = `더보기 (${shownCount}/${cards.length})`;
        moreBtn.setAttribute('aria-label', `더보기, 현재 ${shownCount}개 표시, 총 ${cards.length}개`);
      }
    }
  }

  function revealMore(){
    const mode = getMode();
    const step = loadStep[mode] || 0;
    const next = Math.min(shownCount + step, cards.length);

    for (let i = shownCount; i < next; i++) cards[i].classList.remove('is-hidden');
    shownCount = next;

    // 버튼 갱신
    if (moreWrap && moreBtn){
      if (shownCount >= cards.length) moreWrap.style.display = 'none';
      else {
        moreBtn.textContent = `더보기 (${shownCount}/${cards.length})`;
        moreBtn.setAttribute('aria-label', `더보기, 현재 ${shownCount}개 표시, 총 ${cards.length}개`);
      }
    }
  }

  const onResize = debounce(() => {
    const mode = getMode();
    if (mode !== lastMode){
      lastMode = mode;
      applyVisibility(true);   // 브레이크포인트 넘어갈 땐 리셋
    } else {
      applyVisibility(false);  // 같은 구간이면 유지
    }
  }, 200);

  if (moreBtn) moreBtn.addEventListener('click', revealMore);
  window.addEventListener('resize', onResize);

  // 초기 실행
  applyVisibility(true);
});

/* 유틸: 디바운스 */
function debounce(fn, wait=150){
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}