var options = ["Request a Tour", "Request Information", "Other"];

if ($('#form_need').length > 0) {
    $(function () {
        var collect = "";
        for (var i = 0; i < options.length; i++) {
            collect += `<option value=${i}> ${options[i]}</option>`
        }
        document.getElementById("form_need").innerHTML = collect;
    });
}

var btn = $('#topButton');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});

$(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function (e) {
        if ($(window).width() <= 768) {
            $("#wrapper").removeClass("toggled");
        } else {
            $("#wrapper").addClass("toggled");
        }
    });
});

// CountDown Code
if ($('#countdown').length > 0) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("August 1, 2019").getTime();
    x = setInterval(function () {
        let now = new Date().getTime();
        distance = countDown - now;

        document.getElementById("days").textContent = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));

        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("#countH").innerText = "It's time for WELDING!"
        }

    }, second);
}


// Code for the pre-loader
// This establishes the variable for the loader
var loader;
// This function sets the variable to an order pair x being the showPage function and the time in milliseconds being the y.
function loadFunction() {
    loader = setTimeout(showPage, 2000);
}
// This function sets the display of loader to none and the display of content div to block.
function showPage() {
    $("#contentdiv").show();
    $(".loader").hide();
}