document.addEventListener('DOMContentLoaded', function() {
    // Fade up 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
            entry.target.classList.remove('show');
        }
        });
    }, observerOptions);

    // fade-up 클래스를 가진 요소들 관찰
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // 모달 기능
    const modalTriggers = document.querySelectorAll('.open-modal');
    const modals = document.querySelectorAll('.footer-modal');
    const closeButtons = document.querySelectorAll('.footer-modal-close');

    // 모달 열기
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            
            if (targetModal) {
                const content = targetModal.querySelector('.footer-modal-content');
                // 모달을 열기 전에 초기 위치 설정
                content.style.transform = 'translateX(-100%)';
                
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // 약간의 지연 후 슬라이드 인 애니메이션
                setTimeout(() => {
                    content.style.transform = 'translateX(0)';
                }, 10);
            }
        });
    });

    // 모달 닫기 함수
   function closeModal(modal) {
        const content = modal.querySelector('.footer-modal-content');
        
        // 닫기 애니메이션 시작
        content.style.transform = 'translateX(-100%)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // 모달이 완전히 닫힌 후 transform을 초기 상태로 리셋
            content.style.transform = 'translateX(-100%)';
            content.style.opacity = '';
        }, 200);
    }

    // X 버튼으로 모달 닫기
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.footer-modal');
            closeModal(modal);
        });
    });

    // 모달 바깥 클릭시 닫기
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.footer-modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });

    // Top 버튼 기능
    const topBtn = document.getElementById('topBtn');
    
    if (topBtn) {
        topBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 스크롤시 Top 버튼 표시/숨김 - 푸터가 보일 때만 + fade 효과
        window.addEventListener('scroll', function() {
            const footer = document.querySelector('.footer');
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // 푸터가 화면에 보이기 시작할 때 (푸터의 상단이 화면 하단에 닿을 때)
            if (footerRect.top <= windowHeight) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });

        // 초기 Top 버튼 숨김 (show 클래스 제거)
        topBtn.classList.remove('show');
    }
});