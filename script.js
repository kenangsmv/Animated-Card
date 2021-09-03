$(document).ready(function() {

    $(".read-more").mouseover(function () {
        $(this).addClass("read-more-full");
        $(this).siblings(".content").addClass("content-visible");
        $(this).find("p").css("visibility", "hidden");

        
    })
    $(".read-more").mouseleave(function () {
        $(this).removeClass("read-more-full");
        $(this).siblings(".content").removeClass("content-visible");
        $(this).find("p").css("visibility", "visible");



        
    })

});