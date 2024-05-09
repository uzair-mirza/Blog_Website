
    /*=============================
         Header appear
     ==============================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

/* ===================================
      Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}


$("#add_cart_box").click(function () {
    $(".cart-box-overlay").addClass("fixed-box");
});

$("#close-window1").click(function(){
    $(".cart-box-overlay").addClass("remove-fixed-box");
    setTimeout(function(){
        $(".cart-box-overlay").removeClass("fixed-box");
        $(".cart-box-overlay").removeClass("remove-fixed-box");
    }, 800);


});