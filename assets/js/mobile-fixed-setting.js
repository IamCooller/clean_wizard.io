$('.navbar-toggler').on('click', function () {
    $('.navbar').toggleClass('positionFixed');    
});


    $(function() {
    $(window).scroll(function() {
    var scroll = $(window).scrollTop() + 90;
    var currentArea = $("section").filter(function() {
    return scroll <= $(this).offset().top + $(this).height();
    });
    if ($(window).scrollTop() > 100) {
    $('.navbar').addClass("navScroll");

    } else if ($(window).scrollTop() < 100 ) {
    $('.navbar').removeClass("navScroll");

    }
    });
    });
