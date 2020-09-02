$(document).ready( function () {
    // on page load...
    moveProgressBar();
// on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

// SIGNATURE PROGRESS
    function moveProgressBar() {
        console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;


        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function initDiagrams() {
        document.querySelectorAll('[data-circle]').forEach(elem => {
            let circle = new ProgressBar.Circle(elem, {
                color: '#19293E',
                strokeWidth: 25,
                trailWidth: 25,
                strokeColor: '#2ECC71',
                trailColor: 'rgba(46, 204, 113, 0.5)',
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {color: '#2ECC71', width: 25},
                to: {color: '#2ECC71', width: 25},
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    var value = Math.round(circle.value() * 100);
                    if (value === 100) {
                        circle.setText(`${value}%`);
                    } else {
                        circle.setText(`${value}%`);
                    }
                }
            })
            circle.animate(elem.dataset.circle / 100)

            elem.addEventListener('mouseenter', function (e) {
                circle.animate(0)
                // console.log(circle.animate(0))
            })
            elem.addEventListener('mouseleave', function (e) {
                circle.animate(elem.dataset.circle / 100)
            })
        })
        document.querySelectorAll('[data-line]').forEach(elem => {
            let line = new ProgressBar.Line(elem, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#19293E',
                trailColor: 'rgba(147, 156, 165, 0.2)',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'},
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        position: 'absolute',
                        right: '0',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: {color: '#2ECC71'},
                to: {color: '#2ECC71'},
                step: function (state, line) {
                    line.path.setAttribute('stroke', state.color);
                    line.path.setAttribute('stroke-width', state.width);
                    var value = Math.round(line.value() * 100);
                    if (value === 100) {
                        line.setText(`${value}%`);
                    } else {
                        line.setText(`${value}%`);
                    }
                }
            })
            line.animate(elem.dataset.line / 100)
        })
    }
    if($('[data-circle]')){
        initDiagrams()
    }
})