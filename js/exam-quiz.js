$(document).ready(function() {
    var timer2 = "5:41";
    var interval = setInterval(function() {

        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.countdown').html(minutes + ':' + seconds);
        if (minutes < 0) clearInterval(interval);
        //check if both minutes and seconds are 0
        if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
        timer2 = minutes + ':' + seconds;
    }, 1000);



    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
        var getPercent = ($('.progress-wrap').data('progress-percent') / 50);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    $('.show-arrow').click( function () {
        $('.pagination__items').toggleClass('active');
        $('.pagination__quiz').toggleClass('active');
    });

    $('.show-arrow').click( function () {
        $(this).toggleClass('active');
    });

    // $('.pagination__items-list').click( function () {
    //     $('.pagination__items-list').removeClass('active-quest');
    //     $(this).addClass('active-quest');
    // });

});