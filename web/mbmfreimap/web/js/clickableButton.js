function ClickableButton() {
    this.elementId = null;
    this.elementClass = null;
    this.clickFunction = null;
    
    /**
     * Initialize objects inputEvent.
     */
    ClickableButton.prototype.privateInit = function() {
        if ((this.elementId !== null) && (this.elementClass !== null)) {
            this.element = document.getElementById(this.elementId);
            if (this.element !== null) {
                this.element.addEventListener('touchstart', this, false);
                this.element.addEventListener('click', this, false);
            }
        }
    };
    // The basename ID is the same as the basename Class.
    ClickableButton.prototype.initId = function(elementId) {
        this.elementId = elementId;
        this.elementClass = elementId;
        this.privateInit();
    };
    // The basename ID is the diferent from the basename Class.
    ClickableButton.prototype.initIdClass = function(elementId, elementClass) {
        this.elementId = elementId;
        this.elementClass = elementClass;
        this.privateInit();
    };

    /**
     * Handle input events.
     */
    ClickableButton.prototype.handleEvent = function(event) {
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
    ClickableButton.prototype.onTouchStart = function(event) {
        event.stopPropagation();

        if (this.element.getAttribute('class').indexOf('-on-') != -1) {
            this.element.setAttribute('class', this.elementClass + '-on-pressed');

            this.element.addEventListener('touchend', this, false);
            document.body.addEventListener('touchmove', this, false);

            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        }
    };

    /**
     * onTouchMove
     */
    ClickableButton.prototype.onTouchMove = function(event) {
        if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
            Math.abs(event.touches[0].clientY - this.startY) > 10) {
            this.reset();
        }
    };

    /**
     * OnClick
     */
    ClickableButton.prototype.onClick = function(event) {
        event.stopPropagation();

        if (event.type == 'touchend') {
            this.reset();
            clickbuster.preventGhostClick(this.startX, this.startY);
        }

        // If a function was set, it will be called when the button was released.
        if (this.element.getAttribute('class').indexOf('-on-') != -1) {
            if (this.clickFunction !== null) {
                this.clickFunction.execute();
            }
        }
    };

    /**
     * Reset listeners
     */
    ClickableButton.prototype.reset = function() {
        if (this.element.getAttribute('class').indexOf('-on-') != -1) {
            this.element.setAttribute('class', this.elementClass + '-on-released');
            
            this.element.removeEventListener('touchend', this, false);
            document.body.removeEventListener('touchmove', this, false);
        }
    };

    /**
     * Set Click Function (that has an execute method) that will be called when the button was released.
     */
    ClickableButton.prototype.setClickFunction = function(clickFunction) {
        this.clickFunction = clickFunction;
    };
}

function Clickbuster() {
    var coordinates = [];

    Clickbuster.prototype.preventGhostClick = function(x, y) {
        coordinates.push(x, y);
        window.setTimeout(this.pop, 2500);
    };

    Clickbuster.prototype.pop = function() {
        coordinates.splice(0, 2);
    };

    Clickbuster.prototype.onClick = function(event) {
        for (var i = 0; i < coordinates.length; i += 2) {
            var x = coordinates[i];
            var y = coordinates[i + 1];
            if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
}

var clickbuster = new Clickbuster();
document.addEventListener('click', clickbuster.onClick, true);