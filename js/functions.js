$(document).ready(function () {
    //$(function () {
    //    var sticky_navigation_offset_top = $('#stickysponsor').offset().top;
    //    var sticky_navigation = function () {
    //        var scroll_top = $(window).scrollTop();
    //        if (scroll_top > sticky_navigation_offset_top) {
    //            $('#stickysponsor').addClass("Fixedposition");
    //            $('#stickysponsor').css({
    //                'position': 'fixed',
    //                'top': 0,
    //                'z-index': '9999'
    //            });
    //        } else {
    //            $('#stickysponsor').removeClass("Fixedposition");
    //            $('#stickysponsor').css({
    //                'position': 'relative',
    //                'top': 0,
    //                'z-index': '0'
    //            });
    //        }
    //    };
    //    sticky_navigation();
    //    $(window).scroll(function () {
    //        sticky_navigation();
    //    });
    //    $('a[href="#"]').click(function (event) {
    //        event.preventDefault();
    //    });
    //});
    //$(window).scroll(function () {
    //    var scrollPos = $(document).scrollTop();
    //    if (scrollPos > 0) {
    //        $('.BottomFotter').css({
    //            'position': 'fixed',
    //            'bottom': 0,
    //            'z-index': '9999'
    //        });
    //    } else {
    //        $('.BottomFotter').css({
    //              'position': 'relative',
    //              'bottom': 0,
    //               'z-index': '0'
    //           });
    //    }
    //    console.log(scrollPos);
    //});

    //(function () {
    //    $('.BottomFotter').on("mousewheel", function () {
    //        alert($(document).scrollTop());
    //        console.log('ssssssssssssssss')
    //    });
    //})();


    var sticky_navigation_offset_top = $('.Fixedgutters').offset().top;
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > sticky_navigation_offset_top) {
            //$('.FixedHeadG').addClass("FixedHead");
            $('.Fixedgutters').css({
                'position': 'fixed',
                'top': 0,
                'z-index': '9999',
                'max-width': '970px',
                'width': '100%'
            });
        } else {
            //$('.FixedHeadG').removeClass("FixedHead");
            $('.Fixedgutters').css({
                'position': 'relative',
                'top': 0,
                'z-index': '0',
                'width': 'auto'
            });
        }
    };
    sticky_navigation();
    $(window).scroll(function () {
        sticky_navigation();
    });
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });



    //Bottom Fotter fadeIn
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('.BottomFotter').fadeIn(1500);
            $('.cc-revoke').addClass("NewPlacement");
        } else {
            $('.BottomFotter').fadeOut(1500);
            $('.cc-revoke').removeClass("NewPlacement");
        }
    });
    $(".RIFTOPFotter").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);

    });
    //Scroll TO Top


    $(".scrollToInput").click(function () {
        $('html, body').animate({
            scrollTop: $(".RightSide").offset().top
        }, 2500);
    });

    $(".nav-item").click(function () {
        $(".nav-item").removeClass("tablistActive");
        $(this).addClass("tablistActive");
    });
});

