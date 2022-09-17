$(document).ready(function () {
    var pic = $("#img1");
    var images = [
        "images/first.jpg",
        "images/second.jpg",
        "images/therd.jpg",
        
    ];
    var i = 0;
    setInterval(function () {
        i = (i + 1) % images.length;
        pic.fadeOut(250, function () {

            $(this).attr("src", images[i]);

            $(this).fadeIn(1050);

        });

    }, 3000);

});
$(document).ready(function () {
    var pic = $("#img2");
    var images = [
        "images/first.jpg",
        "images/second.jpg",
        "images/therd.jpg",
        
    ];
    var i = 0;
    setInterval(function () {
        i = (i + 1) % images.length;
        pic.fadeOut(250, function () {

            $(this).attr("src", images[i]);

            $(this).fadeIn(1050);

        });

    }, 4000);

});
