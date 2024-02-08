$(document).ready(function() {
    // change images on resizing breaks the slider.
    $(window).resize(function() {
        mobileFooterToogle();
        if ($(window).width() <= 767) {
            $("#slider .iis-slide").each(function() {
                $(this).css("background-image", 'url(' + $(this).attr("data-src").replace("website", "mobile") + ')');
                $(this).attr("data-src", $(this).attr("data-src").replace("website", "mobile"));
                console.log('777');
            })
        } else if ($(window).width() >= 768) {
            $("#slider .iis-slide").each(function() {
                // $(this).css("background-image", $(this).css("background-image").replace("mobile", "website"));
                $(this).css("background-image", 'url(' + $(this).attr("data-src").replace("mobile", "website") + ')');
                $(this).attr("data-src", $(this).attr("data-src").replace("mobile", "website"));
                console.log(888);
            })
        }
    });

    mobileFooterToogle();
    // Footer Event Binding
    function mobileFooterToogle(){
        if ($(window).width() <= 780){
            $('.footer .links-wrapper').addClass('collapse');
            $(".footer .title").unbind("click").on('click', function(){
                $(this).next('.links-wrapper').toggleClass('collapse')
            })
        }else{
            $('.footer .links-wrapper').removeClass('collapse');
            $(".footer .title").off("click");
        }    
    }
    

});
