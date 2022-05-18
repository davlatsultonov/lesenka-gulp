$(document).ready(function(){

    //new SimpleLightbox('.testimonial-gallery a', { /* options */ });

    $('[type="tel"]').mask('+7 (000) 000-0000');

    $('.menu-toggle-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active')
    })

    const $sliderBanner = $('.banner--js-slider');
    const $sliderGallery = $('.gallery--js-slider');

    if ($sliderGallery.length) {
        const hasSliderChildren = $sliderGallery.find('.gallery__item').length > 1;

        $sliderGallery.owlCarousel({
            ...baseSliderOptions({
                hasSliderChildren,
                configs: {
                    dots: false
                }
            }),
        })

        $('.gallery-hash-navigation').owlCarousel({
            ...baseSliderOptions({
                configs: {
                    loop: false,
                    dots: false,
                    items: 4
                }
            }),
        })
    }
    if ($sliderBanner.length) {
        const hasSliderChildren = $sliderBanner.find('.banner__item').length > 1;

        $sliderBanner.owlCarousel({
            ...baseSliderOptions({ hasSliderChildren }),
            dotsContainer: '#slider-dots',
        })
    }

    let selectDefaultItem = $('.select-block__default'),
        selectDropdownList =  $('.select-block__list'),
        selectDropdownItems =  $('.select-block__list li');

    selectDefaultItem.click(function () {
        $(this).parent().toggleClass('active');
    });

    selectDropdownList.css('width', selectDropdownList.parent().outerWidth() + 'px');

    selectDropdownItems.click(function () {
        let current = $(this).html();
        selectDefaultItem.find('li').html(current);
        $(this).parents('.select-block').removeClass('active');
    });

    // division-tab
    const $divisionTab = $('.tab_js');

    $divisionTab.find('.list__item').on('click', function () {
        $(this).parent().find('.list__item').each((index, item) => $(item).removeClass('active'));
        $(this).addClass('active')
    })

    // timetable tab
    if (window.innerWidth <= 1024) {
        $('.timetable-header').on('click', function (e) {
            if ($(e.target).hasClass('active')) {
                const type = $(e.target).data('timetable-section') === 'pm' ? 'am' : 'pm';
                $('section[data-timetable-section]').each((index, item) => $(item).removeClass('active'));
                $(`[data-timetable-section="${type}"]`).addClass('active')
            }
        })
    }
});

function setDynamicWidthToSliderNav() {
    const sliderDots = $('#slider-dots');
    const delta = $(window).width() < 480 ? 120 : 160;

    $('#slider-nav')
        .width(sliderDots.width() + delta)
        .height(sliderDots.height());
}

function baseSliderOptions({ hasSliderChildren = false, configs = {} } = {}) {
    return {
        loop: true,
        items: 1,
        autoHeight:true,
        nav: false,
        touchDrag: hasSliderChildren,
        mouseDrag: hasSliderChildren,
        dots: hasSliderChildren,
        ...configs
    }
}
