
function ZGInfoWindow() {
  google.maps.OverlayView.call(this);
}

ZGInfoWindow.prototype = new google.maps.OverlayView();

ZGInfoWindow.prototype.open = function(map) {
    try {
      this.div_ = document.getElementById("zginfowindow");
      //alert('ZGInfoWindow open:'+this.div_);

      setTimeout(function(thisObj) {
        //alert('timeout called:'+thisObj.div_);
          try {
            thisObj.setMap(map);
          } catch (err) {}
      }, 300, this);

      this.div_.style.display = 'none';
      this.setMap(null);
    } catch (err) {}
};

ZGInfoWindow.prototype.setPosition = function(latlng) {
  this.latlng_ = latlng;
};

ZGInfoWindow.prototype.setContent = function(content) {
  try {
      var contentdiv = document.getElementById("zginfowindow-content");
      contentdiv.innerHTML = content;
  } catch (err) {}
};

ZGInfoWindow.prototype.hide = function() {
  try {
      this.div_.style.display = 'none';
      this.setMap(null);
  } catch (err) {}
};

/* Redraw the Bar based on the current projection and zoom level
 */
ZGInfoWindow.prototype.draw = function() {
    try {
      //alert('draw called');
      var panes = this.getPanes();
      var div = this.div_;

      // Calculate the DIV coordinates of two opposite corners of our bounds to
      // get the size and position of our Bar
      var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
      //alert('ZGInfoWindow draw: x:'+pixPosition.x+':y:'+pixPosition.y);
      // Now position our DIV based on the DIV coordinates of our bounds
      div.style.position = "absolute";
      div.style.left = pixPosition.x + "px";
      div.style.top = pixPosition.y + "px";

      div.style.display = 'block';

      div.parentNode.removeChild(div);
      panes.floatPane.appendChild(div);
    } catch (err) {}
};