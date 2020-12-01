$(document).ready(function() {

    // sticky nav bar
    $(".sticky-service").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });



    // mixitup plugin
    var mixer = mixitup('.btn-item');

    // smooth scrool for

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}