import $ from 'jquery';
import 'slick-slider';

window.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('#header'),
        scrollOffset = window.pageYOffset;

    // Fixed header
    checkScroll(scrollOffset);

    window.addEventListener('scroll', function () {
        scrollOffset = this.pageYOffset;

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= header.clientHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

        $("[data-scroll]").removeClass('active');
        $(this).addClass('active');

        toggleBurgerMenu();
    });


    // accordion
    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(item => {
        item.addEventListener('click', (e) => {
            e.target.parentElement.classList.toggle('active');
        });
    });

    // slider
    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // burger-menu
    const navToggle = document.querySelector('.nav-toggle'),
        nav = document.querySelector('.nav');
        
    function toggleBurgerMenu() {
        navToggle.classList.toggle('active');
        header.classList.toggle('active');
        nav.classList.toggle('active');
    }
    navToggle.addEventListener('click', (e) => {
        e.preventDefault();

        toggleBurgerMenu();
    });
});