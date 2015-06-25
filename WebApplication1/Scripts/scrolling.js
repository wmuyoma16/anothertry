$(function () {
    $(function () {
        $(window).on("load resize", function () {
            $(".fill-screen").css("height", window.innerHeight);
        });
    });
    //scroll spy
    $("body").scrollspy({
        target:".navbar",
        offset:160
    });
    $('nav a, .click-down a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $(window).stellar();
});