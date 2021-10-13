$(document).ready(function() {
    $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
        $(".imgbtncrt").show();
    }
    $(".imgbtncrt").on("click", function(e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 3).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $(".imgbtncrt").fadeOut("slow");
        }
    });
});
$(document).ready(function() {
    $(".moreBoxvid").slice(0, 3).show();
    if ($(".blogBoxvid:hidden").length != 0) {
        $(".vidbtncrt").show();
    }
    $(".vidbtncrt").on("click", function(e) {
        e.preventDefault();
        $(".moreBoxvid:hidden").slice(0, 3).slideDown();
        if ($(".moreBoxvid:hidden").length == 0) {
            $(".vidbtncrt").fadeOut("slow");
        }
    });
});
(function($) {
    $(function() {});
})(jQuery);

$(".navTrigger").click(function() {
    $(this).toggleClass("active");
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
        console.log("OK");
    } else {
        $(".nav").removeClass("affix");
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}