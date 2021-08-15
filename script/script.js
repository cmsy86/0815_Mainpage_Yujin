$(function(){

    // GNB
    $(".mainLi").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
        $("#gnbBG").stop().slideDown(800);
    });

    $("li.mainLi").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
        $("#gnbBG").stop().slideUp(300);
    });

    // Slide
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#slide a:first-child").fadeOut(
            1000,
            function(){
                $("#slide a:first-child")
                    .insertAfter("slide a:last-child")
            }
        );

        $("#slide a:nth-child(2)").fadeIn(3000);
    }

    //

});