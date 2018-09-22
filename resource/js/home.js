$(window).scroll(function(event){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 30) {
        $('.shop-nav').addClass('bg-white-light');
    } else {
        $('.shop-nav').removeClass('bg-white-light');
    }
});
