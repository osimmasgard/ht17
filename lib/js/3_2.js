function run() {
    'use strict';

    $("h2").click(function (event) {
        alert("Vi hoppar tillbaka!");
    });

    $("header").mousedown(function () {
        $(this).removeClass("header");
    });
    $("header").mouseup(function () {
        $(this).addClass("header");
    });

    $("footer").dblclick(function () {
        $(this).remove();
    });

    $("footer").mousemove(function () {
        var msg = 'mousemove() position - x : ' + event.pageX + ', y : ' + event.pageY;
        $("section.contentmid").text(msg);
    });

    $("section.contentmid").click(function () {
        $(this).append(" <br> Nu har du klickat i mitten")
    });

    $("aside.contentleft").mouseover(function () {
        $(this).removeClass("contentleft");
        $(this).addClass("contentleft2");
    });

    $("aside.contentright").mouseout(function () {
        var content = $(this).html();
        $(this).append("<br>Här står: ", content, "<br>");
        $(this).addClass("contentleft2");
    });

    $("footer").hover(function () {
        $(this).css('cursor', 'crosshair');
    });

    $("#halloj").focus();


    $("#halloj").keypress(function () {
        $("header").fadeToggle();
    });

    $("form").submit(function (event) {
        $("footer").off();
        event.preventDefault();
    });
}

function ladd() {
    $("header").fadeTo("slow", 0.8);
}

function stopit() {
    event.preventDefault();
}

$(window).resize(ladd());
$(document).ready(run());