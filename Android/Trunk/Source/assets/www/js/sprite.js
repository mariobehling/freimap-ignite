//HTML Sprite
function Sprite() {
    // Attributes
    var divId;

    // Intervals
    var playIntervalId = -1;

    /**
     * Initialize everything
     */
    Sprite.prototype.init = function(_divId) {
        divId = _divId;
    };
    
    /**
     * Play the sprite animation in loop
     */
    Sprite.prototype.play = function(divClass, intervalTimer) {
        var actualFrame = 0;
        if (playIntervalId !== -1) {
            clearInterval(playIntervalId);
        }

        if (divClass !== '') {
            actualFrame = (actualFrame + 1) % 4;
            document.getElementById(divId).setAttribute("class", divClass + " " + divClass + "-frame" + actualFrame);

            playIntervalId = setInterval(main_loop, intervalTimer);
            function main_loop() {
                actualFrame = (actualFrame + 1) % 4;
                document.getElementById(divId).setAttribute("class", divClass + " " + divClass + "-frame" + actualFrame);
            }
        }
    };

    /**
     * Stop the sprite animation and set one class
     */
    Sprite.prototype.stop = function(divClass) {
        if (playIntervalId !== -1) {
            clearInterval(playIntervalId);
        }
        document.getElementById(divId).setAttribute("class", divClass);
    };
}