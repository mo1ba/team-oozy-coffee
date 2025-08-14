$(document).ready(function() {
    let filterButtons = document.querySelectorAll('.filter-btn');
    let coffeeItems = document.querySelectorAll('.coffee-item');
    const $cards = $('.coffee-grid .oozy-flip-card');
    const $loadMoreBtn = $('#loadMoreBtn');
    
    const cardsPerPageTablet = 12;
    const cardsPerPageMobile = 8;
    let expanded = false;

    function updateLoadMoreBtnVisibility() {
        const windowWidth = $(window).width();
        const visibleCount = $cards.filter(':visible').length;
        
        if (windowWidth > 1024) {
            $loadMoreBtn.hide();
        } else {
            if (visibleCount > 6) {
                $loadMoreBtn.show();
            } else {
                $loadMoreBtn.hide();
            }
        }
    }

    function updateVisibility() {
        const windowWidth = $(window).width();

        if (windowWidth <= 720) {
            $cards.hide();
            $cards.slice(0, cardsPerPageMobile).show();
            updateLoadMoreBtnVisibility();
        } else if (windowWidth <= 1024) {
            $cards.hide();
            $cards.slice(0, cardsPerPageTablet).show();
            updateLoadMoreBtnVisibility();
        } else {
            $cards.show();
            $loadMoreBtn.hide();
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            if (isActive) {
                coffeeItems.forEach(item => {
                    item.style.display = 'block';
                });
                $cards.show();
            } else {
                button.classList.add('active');
                let filter = button.dataset.filter;
                
                if (!filter) {
                    coffeeItems.forEach(item => {
                        item.style.display = 'block';
                    });
                    $cards.show();
                } else {
                    coffeeItems.forEach(item => {
                        if (item.classList.contains(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    $cards.hide();
                    $cards.filter(`.${filter}`).show();
                }
            }
            updateLoadMoreBtnVisibility();
        });
    });

    document.querySelectorAll('.oozy-flip-card').forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('oozy-flipped');
        });
    });

    $loadMoreBtn.click(function() {
        if (!expanded) {
            $cards.show();
            $(this).text('접기');
            expanded = true;
        } else {
            updateVisibility();
            $(this).text('더보기');
            expanded = false;
        }
    });

    $(window).resize(function() {
        if (!expanded) {
            updateVisibility();
        }
    });

    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }

    updateVisibility();
});