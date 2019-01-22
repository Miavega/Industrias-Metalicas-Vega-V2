// NAV ACTIVE
$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});

// NAVEGATE PAGE
$('a[href*=\\#]:not([href=\\#carouselExampleIndicators])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 30
            }, 1000);
            return false;
        }
    }
});

// LIGHTBOX 2
//lightbox
lightbox.option({
    albumLabel: "Imagen %1 de %2",
    resizeDuration: 200,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true,
    fitImagesInViewport: true,
});

