$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow right">',
        // responsive: [
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false
        //         }
        //     }
        // ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});