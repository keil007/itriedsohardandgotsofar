$(document).on('mousemove', function (e) {
    if (window.pageYOffset >= 1800) {
        $('#your').offset({ left: e.pageX, top: e.pageY });
        $('body').css("cursor", "none");
    }
});

var caller = $("#smiley");

function foo() {
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    caller.stop().animate({ "left": randX + "px", "top": randY + "px" });
}

$(document).ready(function () {
    caller.on('mouseenter', foo);
});