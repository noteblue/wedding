; (function($){

    $.fn.flower = function (options) {
        const $wrap = $('.cont_rainy');

        for(let i=0; i<12; i++){
            const size = Math.max(10, Math.ceil(Math.random() * 20));
            const imageNumber = Math.floor(Math.random() * (6 - 1) + 1);

            const fallDelay = Math.ceil(Math.random() * 12) + "s";
            const shakeDelay = Math.ceil(Math.random() * 3) + "s";

            const shakeDegree = Math.ceil(Math.random() * 360) + "deg";

            const leftPosition = Math.ceil(Math.random() * 100) + "%";
            const translateX = Math.ceil(Math.random() * 60) + 20 + "px";

            const fallDuration = Math.ceil(Math.random() * 7) + 9 + "s";
            const shakeDuration = Math.ceil(Math.random()) + 2 + "s";

            $wrap.append(`<img class="flower-leaf" width="${size}" height="${size}" src="images/leaf-${imageNumber}.png" style="--fall-delay: ${fallDelay}; --shake-delay: ${shakeDelay}; --shake-degree: ${shakeDegree}; --left-position: ${leftPosition}; --translate-x: ${translateX}; --fall-duration: ${fallDuration}; --shake-duration: ${shakeDuration};">`);
        }
    }

    let loadMap = function(){
        let w = $('.cont_location').width();
        w = Math.min(800, Math.max(290, w));
        h = Math.max(250, Math.round(w*3/4));
        new daum.roughmap.Lander({
            "timestamp" : "1690258655235",
            "key" : "2fmxn",
            "mapWidth" : String(w),
            "mapHeight" : String(h)
        }).render();
    }

    $('body').flower();
    loadMap();

})(jQuery);
