//Internal Notification JS
function InternalNotification() {

    // DIV parts
    var divBody;
    var divBodyTopPart;
    var divBodyMiddlePart;
    var divBodyBottomPart;
    var divText;
    var divIcon;

    //Global States
    var CLOSED = 0;
    var CLOSING = 1;
    var OPENED = 2;
    var OPENING = 3;
    var state = CLOSED;

    // Height VALUES...
    var HEIGHT_MIN = 0;
    var HEIGHT_INCREMENT = 15;
    var HEIGHT_INTERVAL_TIME = 25;
    var heightMax = 0;

    // setInterval IDs
    var closingIntervalId = 0;
    var openingIntervalId = 0;
    var autoCloseIntervalId = 0;

    // Interruptions
    var interruption = false;
    var interruptionText = '';
    var interruptionAction = '';
    var interruptionAnalytics = '';
    var interruptionTimer = '';
    var interruptionIconPath = '';

    // InternalNotification Backgrounds and Icon.
    var imgDirPath = ""
    var imgBgTopPath = "";
    var imgBgMiddlePath = "";
    var imgBgBottomPath = "";
    var imgIconPath = "";

    // Internal Notification Action and Analytics
    var internalText = '';
    var internalNoteAction = '';
    var internalNoteAnalytics = '';
    var internalNoteTimer = '';

    /**
     * Initialize everything.
     */
    InternalNotification.prototype.init = function(imgDir) {
        // Getting div parts...
        divBody = document.getElementById("slideMessageBody");
        divBodyTopPart = document.getElementById("slideMessageBodyTopPart");
        divBodyMiddlePart = document.getElementById("slideMessageBodyMiddlePart");
        divBodyBottomPart = document.getElementById("slideMessageBodyBottomPart");
        divText = document.getElementById("slideMessageText");
        divIcon = document.getElementById("slideMessageIcon");

        if (internalNotification.canBeExecuted()) {
            divBody.addEventListener('touchstart', this, false);
            divBody.addEventListener('click', this, false);

            imgDirPath = imgDir;
            imgBgTopPath = imgDirPath + "internal-note-bg-top.png";
            imgBgMiddlePath = imgDirPath + "internal-note-bg-middle.png";
            imgBgBottomPath = imgDirPath + "internal-note-bg-bottom.png";
        }
    };

    /**
     * Used to check if we are GoToGo!
     */
    InternalNotification.prototype.canBeExecuted = function() {
        return ((divBody !== null) && (divBodyTopPart !== null) &&
                (divBodyMiddlePart !== null) && (divBodyBottomPart !== null) &&
                (divText !== null) && (divIcon !== null));
    };

    /**
     * DEBUG ANIMATION
     * Show and Close the internal notification during event 'onmouseup'.
     */
    InternalNotification.prototype.debugShow = function() {
        if (internalNotification.canBeExecuted()) {
            if (state == CLOSED) {
                internalNotification.open('Texto:<br/> - para<br/> - testar<br/> - a notificação<br/>interna no browser! =P',
                        '', '', '0', 'icon-info.png');
            } else if (state == OPENED) {
                internalNotification.close();
            }
        }
    };

    /**
     * Show internal notification.
     */
    InternalNotification.prototype.open = function(text, action, analytics, timer, iconPath) {
        if (internalNotification.canBeExecuted()) {
            if (state == CLOSED) {
                state = OPENING;
                internalText = text;
                internalNoteAction = action;
                internalNoteAnalytics = analytics;

                // Setting close timer
                if (timer === '0') {
                    internalNoteTimer = '10000'; // Default timer.
                } else {
                    internalNoteTimer = timer;
                }

                // Setting internal note Icon
                imgIconPath = imgDirPath + iconPath;

                // Calculating internal notification height. Minimal height is 50!
                heightMax = divBodyTopPart.clientHeight +
                        internalNotification.getHeightToFitText(divText, internalText) +
                        divBodyBottomPart.clientHeight;
                if (heightMax < 50) {
                    heightMax = 50;
                }
                
                openingIntervalId = setInterval(internalNotification.opening, HEIGHT_INTERVAL_TIME);
            } else {
                if (internalText != text) {
                    interruption = true;
                    interruptionText = text;
                    interruptionAction = action;
                    interruptionAnalytics = analytics;
                    interruptionTimer = timer;
                    interruptionIconPath = iconPath;
                }
            }
        }
    };

    /**
     * Close internal notification.
     */
    InternalNotification.prototype.close = function() {
        if (internalNotification.canBeExecuted()) {
            if (state == OPENED) {
                if (internalNoteAction != '') {
                    internalNotification.closeExecution();
                }
            }
        }
    },
    InternalNotification.prototype.autoClose = function() {
        if (internalNotification.canBeExecuted()) {
            if (state == OPENED) {
                internalNoteAction = '';
                internalNotification.closeExecution();
            }
        }
    },
    InternalNotification.prototype.closeExecution = function() {
        if (state == OPENED) {
            state = CLOSING;
            clearInterval(autoCloseIntervalId);
            closingIntervalId = setInterval(internalNotification.closing, HEIGHT_INTERVAL_TIME);
        }
    },

    /**
     * Opening action.
     */
    InternalNotification.prototype.opening = function() {
        if (divBody.clientHeight < heightMax) {
            internalNotification.incrementHeight(HEIGHT_INCREMENT);
            if (divBody.clientHeight > heightMax) {
                internalNotification.setHeight(heightMax);
            }
        }

        if (divBody.clientHeight == heightMax) {
            state = OPENED;
            clearInterval(openingIntervalId);

            // Excute analytics
            internalNotification.executeAnalytics();

            // Setting autoClose timer.
            autoCloseIntervalId = setInterval(internalNotification.autoClose, internalNoteTimer);
        }
        internalNotification.draw();
    },

    /**
     * Closing action.
     */
    InternalNotification.prototype.closing = function() {
        if (divBody.clientHeight > HEIGHT_MIN) {
            if (divBody.clientHeight - HEIGHT_INCREMENT > HEIGHT_MIN) {
                internalNotification.incrementHeight(-HEIGHT_INCREMENT);
            } else {
                internalNotification.setHeight(HEIGHT_MIN);
            }
        }

        if (divBody.clientHeight == HEIGHT_MIN) {
            state = CLOSED;
            clearInterval(closingIntervalId);

            if (interruption) {
                interruption = false;
                internalNotification.open(interruptionText, interruptionAction, interruptionAnalytics,
                        interruptionTimer, interruptionIconPath);
            } else {
                // Execute action if it is available.
                internalNotification.executeAction();
            }
        }
        internalNotification.draw();
    };

    /**
     * Execute the action set for this Internal Notification.
     */
    InternalNotification.prototype.executeAction = function() {
        if (internalNoteAction != '') {
            util.callOnAndroid(function() { window.android.doActionOnAndroid(internalNoteAction, '', false); });
            internalNoteAction = '';
        }
    };

    /**
     * Execute the analytics set for this Internal Notification.
     */
    InternalNotification.prototype.executeAnalytics = function() {
        if (internalNoteAnalytics != '') {
            stats.generalClickTrack(internalNoteAnalytics);
        }
    };

    /**
     * Draw InternalNotification items: BACKGROUND, ICON and TEXT.
     */
    InternalNotification.prototype.draw = function() {
        divBodyTopPart.style.backgroundImage = "url("+imgBgTopPath+")";
        divBodyMiddlePart.style.backgroundImage = "url("+imgBgMiddlePath+")";
        divBodyBottomPart.style.backgroundImage = "url("+imgBgBottomPath+")";
        divText.innerHTML = internalText;
        divIcon.style.backgroundImage = "url("+imgIconPath+")";
    };

    /**
     * Increment the actual InternalNote Height
     */
    InternalNotification.prototype.incrementHeight = function(increment) {
        divBody.style.height = internalNotification.setHeight(divBody.clientHeight + increment);
    }

    /**
     * Set InternalNote Height
     */
    InternalNotification.prototype.setHeight = function(height) {
        divBody.style.height = (height + "px");
        divBodyMiddlePart.style.height = ((divBody.clientHeight - divBodyTopPart.clientHeight - divBodyBottomPart.clientHeight - 2) + "px");
        divText.style.height = ((divBodyMiddlePart.clientHeight - 2) + "px");
        divIcon.style.height = ((divBodyMiddlePart.clientHeight - 2) + "px");
    }

    /**
     * Which height a DIV should have to fit all the text?
     */
    InternalNotification.prototype.getHeightToFitText = function(div, text) {
        var temp = document.createElement(div.nodeName);
        temp.setAttribute("style", "margin:0px;padding:0px;font-family:" + div.style.fontFamily + ";font-size:" + div.style.fontSize);
        temp.innerHTML = text;
        temp = div.appendChild(temp);
        var ret = temp.clientHeight;
        div.removeChild(temp);
        return ret + 5;
    }

    /**
     * Handle input events.
     */
    InternalNotification.prototype.handleEvent = function(event) {
        switch (event.type) {
            case 'touchstart': this.onTouchStart(event); break;
            case 'touchmove': this.onTouchMove(event); break;
            case 'touchend': this.onClick(event); break;
            case 'click': this.onClick(event); break;
        }
    };

    /**
     * onTouchStart
     */
    InternalNotification.prototype.onTouchStart = function(event) {
        event.stopPropagation();

        divBody.addEventListener('touchend', this, false);
        document.body.addEventListener('touchmove', this, false);

        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
    };

    /**
     * onTouchMove
     */
    InternalNotification.prototype.onTouchMove = function(event) {
        if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
            Math.abs(event.touches[0].clientY - this.startY) > 10) {
            this.reset();
        }
    };

    /**
     * OnClick
     */
    InternalNotification.prototype.onClick = function(event) {
        event.stopPropagation();

        if (event.type == 'touchend') {
            this.reset();
            clickbuster.preventGhostClick(this.startX, this.startY);
            internalNotification.close();

//            // Checking which action should be executed
//            var clickPosX = event.clientX - divBody.offsetLeft;
//            var clickPosY = event.clientY - divBody.offsetTop;
//            if ((clickPosX > 0) && (clickPosX < divBody.offsetWidth))
//            {
//                var executionHeightLimit = divBody.offsetHeight - imgBgBottom.height;
//                // Executing Notification.
//                if ((clickPosY > 0) && (clickPosY < executionHeightLimit))
//                {
//                    if (internalNoteAction != '') {
//                        internalNotification.close();
//                    }
//                // Closing Notification.
//                } else if ((clickPosY >= executionHeightLimit) && (clickPosY < divBody.offsetHeight)) {
//                    internalNotification.close();
//                }
//            }
        }
    };

    /**
     * Reset listeners
     */
    InternalNotification.prototype.reset = function() {
        divBody.removeEventListener('touchend', this, false);
        document.body.removeEventListener('touchmove', this, false);
    };
}
var internalNotification = new InternalNotification();