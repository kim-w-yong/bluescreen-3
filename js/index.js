$(document).ready(function () {



    for (var i = 0; i < 5; i++) {
        var ImgHtml = "<img src='img/img" + (i + 1) + ".png' style='width:100px;'>"
        $(".img-container").append(ImgHtml);
    }


})



