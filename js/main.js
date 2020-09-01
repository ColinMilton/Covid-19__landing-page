// Header Background
(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 15) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    }
}());

// Header Smooth Scroll
jQuery(document).ready(function(){

    $(".header__link").mPageScroll2id({
        offset: 140,
    });

});

//Footer Smooth Scroll
jQuery(document).ready(function(){

    $(".footer__link").mPageScroll2id({
        offset: 155,
    });

});

//Slick.js
jQuery(document).ready(function(){

    $('.live-reports__slides').slick({
        infinite: false,
    });

});

//Search Box animation
jQuery(document).ready(function(){
  
    $(".search-ico").click(function(){
      $(".world-stat__search-box, .world-stat__search-field").toggleClass("active");
    });
    
});