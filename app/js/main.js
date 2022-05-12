$(document).ready(function(){
    $('.menu-toggle-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active')
    })

    const $sliderBanner = $('.banner--js-slider');

    if ($sliderBanner.length) {
        const $hasSliderChildren = $sliderBanner.find('.banner__item').length > 1;

        $sliderBanner.owlCarousel({
            ...baseSliderOptions($sliderBanner, $hasSliderChildren),
            dotsContainer: '#slider-dots',
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

function baseSliderOptions(slider, hasSliderChildren) {
    return {
        loop: true,
        items: 1,
        autoHeight:true,
        nav: false,
        touchDrag: hasSliderChildren,
        mouseDrag: hasSliderChildren,
        dots: hasSliderChildren,
    }
}
