var DEFAULT_ZOOM = 16;
var DEFAULT_POSITION = {};
DEFAULT_POSITION.coords = {};
DEFAULT_POSITION.coords.latitude = -23.55;
DEFAULT_POSITION.coords.longitude = -46.633333;
DEFAULT_POSITION.coords.accuracy = 100000;
var map;
var markerclusterer;
var markers = [];
var infowindow = new ZGInfoWindow();
var youAreHereWindow = new ZGInfoWindow();
var mapIconImage = './img/map-flag-size2.png';
var mapIconAnchor = [21, 26];
var geocoder;
var clearCircles;
var thatMap = [];

thatMap.needUpdate = true;

thatMap.showMessage = function(message) {
    $('#popup-no-network-nearby').show();
    $('#popup-no-network-content').html(message);
    $('#popup-no-network-nearby').css('left', ($(window).width() / 2
            - ($('#popup-no-network-nearby').width() / 2)) + 'px');

    $('#popup-no-network-nearby').css('top', ($(window).height() / 2
            - ($('#popup-no-network-nearby').height() / 2)) + 'px');
};

thatMap.hideMessage = function() {
    $('#popup-no-network-nearby').hide();
};

thatMap.gotFocusSearch = function() {
    if (!thatMap.usingTextField) {
        setMapSize();
        thatMap.usingTextField = true;

        $('#map-beta-logo-img').fadeOut(500);
        $('#map-current-location-icon').fadeOut(500);

        $('#searchTextField').animate({
          left: '5px',
          width: (window.innerWidth - 20) + 'px'
        }, {
            duration: 600
        });
    }
};

thatMap.lostFocusSearch = function() {
    thatMap.usingTextField = false;
    setMapSize();
};

thatMap.createSearchMarker = function(objPlace) {
    stats.generalClickTrack('map > create-search-marker');

    var name = '';

    if (objPlace && objPlace.geometry && objPlace.geometry.location) {
        map.setCenter(objPlace.geometry.location);
    }

    if (objPlace && objPlace.address_components && objPlace.address_components.length > 0) {

        for (var c in objPlace.address_components) {
            var cc = objPlace.address_components[c];
            name += cc.long_name;

            if (c < objPlace.address_components.length - 1) {
                name += ', ';
            }
        }
    }

    if (thatMap.currentSearchMarker) {
        thatMap.currentSearchMarker.setMap(null);
    }

    markerclusterer.setMarkerPosition(map.getCenter());

    thatMap.currentSearchMarker = new google.maps.Marker({
        position: map.getCenter(),
        flat: false,
        map: map,
        animation: google.maps.Animation.DROP,
        zIndex: google.maps.Marker.MAX_ZINDEX,
        clickable: true
    });

    if (!objPlace.icon || objPlace.icon.indexOf('geocode-71.png') >= 0) {
        thatMap.currentSearchMarker.setIcon(null);
    } else {
        thatMap.currentSearchMarker.setIcon({ url: objPlace.icon });
    }

    if (name) {
        $('#searchTextField').val(name);
    }

    if (objPlace && objPlace.geometry && objPlace.geometry.viewport) {
        map.fitBounds(objPlace.geometry.viewport);
    } else {
        map.setZoom(DEFAULT_ZOOM);
    }

    thatMap.needUpdate = true;
    updateMap();
};

$(document).ready(function() {
    window.onresize = function(event) {
        setMapSize();
    };

    $('#bigcloud').click(function(e) {
        map.setZoom(map.getZoom() + 1);
    });

    $('#popup-no-network-nearby').click(function() {
        map.setZoom(map.getZoom() - 1);
    });

    var myOptions = {
        zoom: DEFAULT_ZOOM,
        center: new google.maps.LatLng(DEFAULT_POSITION.coords.latitude, DEFAULT_POSITION.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE },
        overviewMapControl: false,
        streetViewControl: false,
        styles: [
            {
                stylers: [
                    { saturation: -40 },
                    { hue: "#77a10e" }
                ]
            }
        ] };

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    google.maps.event.addListener(map, 'click', function() {
        infowindow.hide();

        if (clearCircles) {
            clearCircles();
        }
    });

    geocoder = new google.maps.Geocoder();

    markerclusterer = new MarkerClusterer(map, null, {
        gridSize: 50, minimumClusterSize: 3, zoomOnClick: true, maxZoom: 15});

    google.maps.event.addListener(map, 'mouseup', function() {
        thatMap.needUpdate = true;
        thatMap.lostFocusSearch();
    });

    google.maps.event.addListener(map, 'bounds_changed', function() {
        window.setTimeout(function() {
            updateMap();
        }, 500);
    });

    google.maps.event.addListener(map, 'zoom_changed', function() {
        thatMap.needUpdate = true;

        var zginfowindowbg = document.getElementById("zginfowindow-bg");

        if (map.getZoom() > 17) {
            mapIconImage = './img/map-flag-size1.png';
            mapIconAnchor[0] = 44;
            mapIconAnchor[1] = 34;
            zginfowindowbg.style.marginLeft = '-68px';
            zginfowindowbg.style.marginTop = '-75px';
        } else if (map.getZoom() === 17) {
            mapIconImage = './img/map-flag-size2.png';
            mapIconAnchor[0] = 21;
            mapIconAnchor[1] = 26;
            zginfowindowbg.style.marginLeft = '-68px';
            zginfowindowbg.style.marginTop = '-63px';
        } else if (map.getZoom() === 16) {
            mapIconImage = './img/map-flag-size3.png';
            mapIconAnchor[0] = 5;
            mapIconAnchor[1] = 16;
            zginfowindowbg.style.marginLeft = '-68px';
            zginfowindowbg.style.marginTop = '-53px';
        } else{
            mapIconImage = './img/map-flag-size3.png';
            mapIconAnchor[0] = 3;
            mapIconAnchor[1] = 2;
            zginfowindowbg.style.marginLeft = '-68px';
            zginfowindowbg.style.marginTop = '-39px';
        }
    });

    //search
    $('#searchTextField').keypress(function (event) {
        if (event.which == 13) {    // make enter key just search map and stop it from submitting form
            event.preventDefault();
            geocoder.geocode( { 'address': $('#searchTextField').val()}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK && results.length > 0
                    && results && results[0] && results[0].geometry && results[0].geometry.location)
                {
                    map.setCenter(results[0].geometry.location);
                    thatMap.createSearchMarker(results[0]);
                } else {
                    alert(dic[language]['no-results']);

                    if (thatMap.currentSearchMarker) {
                        thatMap.currentSearchMarker.setMap(null);
                    }
                }
            });
        } 
    });

    var input = document.getElementById('searchTextField');

    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.bindTo('bounds', map);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        thatMap.createSearchMarker(place);
    });

    zgMain();
    setMapSize();
    goToUserPosition(false);

    window.setInterval(function() {
        setMapSize();
    }, 3000);
});

var goToUserPosition = function(showMessageOnError) {
    thatMap.showMessage(dic[language]['getting-your-position']);

    navigator.geolocation.getCurrentPosition(function(position) {
        thatMap.hideMessage();
        map.setZoom(DEFAULT_ZOOM);
        thatMap.needUpdate = true;
        updateMap(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        updateUserPosition(position);
    }, function() {
        thatMap.hideMessage();
        map.setZoom(3);
        thatMap.needUpdate = true;
        updateMap();
        if (showMessageOnError) {
            util.showMessage(dic[language]['map-not-found-text']);
        }
    });
};

var updateUserPosition = function(position) {
    var googlePosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    if (thatMap.userMarker) {
        thatMap.userMarker.setMap(null);
    }

    if (thatMap.userCircle) {
        thatMap.userCircle.setMap(null);
    }

    thatMap.userMarker = new google.maps.Marker({
        position: googlePosition,
        flat: true,
        icon: { url: 'img/b2.png', anchor: {x: 15, y: 15 } },
        map: map,
        zIndex: google.maps.Marker.MAX_ZINDEX
    });

    if (position.coords.accuracy) {
        thatMap.userCircle = new google.maps.Circle({
            center: googlePosition,
            fillOpacity: .1,
            fillColor: '#0000aa',
            strokeColor: '#0000aa',
            strokeOpacity: .2,
            strokeWeight: 2,
            map: map,
            radius: position.coords.accuracy,
            zIndex: google.maps.Marker.MAX_ZINDEX
        });

        if (position.coords.accuracy > 600) {
            map.fitBounds(thatMap.userCircle.getBounds());
        }
    }

    youAreHereWindow.setContent(dic[language]['you-are-here']);
    youAreHereWindow.setPosition(googlePosition);
    youAreHereWindow.open(map);

    window.setTimeout(function() {
        youAreHereWindow.hide();
        thatMap.needUpdate = true;
        updateMap();
    }, 4000);
};

var updateMap = function(position) {
    if (thatMap.needUpdate) {
        thatMap.needUpdate = false;

        var that = this;

        var bounds = map.getBounds();

        if (!bounds && that.scheduled) { // HACK because sometimes bounds is undefined. I'm not sure why yet
            return;
        }

        if (!bounds) {
            that.scheduled = true;

            window.setTimeout(function() {
                thatMap.needUpdate = true;
                updateMap(position);
                that.scheduled = false;
            }, 1000);
            return;
        }

        if (position) {
            map.setCenter(position);
        }

        zg.findNearby(function(networks) {
            var newMarkers = [];
            var that = this;

            clearCircles = function() {
                if (that.circles) {
                    for (var c in that.circles) {
                        var cc = that.circles[c];
                        cc.setMap(null);
                    }
                }

                that.circles = [];
            };

            if (!(networks && networks.networks && networks.networks.length > 0)) {
                if ((networks.total_networks + '') === '0') {
                    $('#bigcloud').hide();
                    thatMap.showMessage(dic[language]['no-network-nearby']);
                } else {
                    thatMap.hideMessage();
                    $('#bigcloud').show();
                    $('#bigcloud-content').html(util.makeNumberBeautiful(networks.total_networks + ''));
                    $('#bigcloud').css('left', ($(window).width() / 2 - 59) + 'px');
                    $('#bigcloud').css('top', ($(window).height() / 2 - 68) + 'px');
                }

            } else {
                $('#bigcloud').hide();
                thatMap.hideMessage();
                $('#bigcloud-content').html('');

                for (var i in networks.networks) {
                    var wifi = networks.networks[i];

                    if (wifi.latitude && wifi.longitude && wifi.ssid) {
                        var point = new google.maps.LatLng(parseFloat(wifi.latitude), parseFloat(wifi.longitude));
                        var marker;

                        marker = new google.maps.Marker({
                            position: point, flat: true,
                            radius: Math.round(parseFloat(wifi.avg_accuracy)),
                            name: wifi.ssid,
                            icon: { url: mapIconImage, anchor: { x:mapIconAnchor[0],y:mapIconAnchor[1] }}
                        });

                        google.maps.event.addListener(marker, 'click', function() {
                            var thatListener = this;

                            if (map.getZoom() > 15) {
                                clearCircles();

                                var circle = new google.maps.Circle({
                                    center: thatListener.position,
                                    fillOpacity: .2,
                                    fillColor: '#00aa00',
                                    strokeColor: '#00aa00',
                                    strokeOpacity: .5,
                                    strokeWeight: 2,
                                    map: map,
                                    radius: thatListener.radius,
                                    zIndex: google.maps.Marker.MAX_ZINDEX
                                });

                                that.circles.push(circle);
                            }

                            infowindow.setContent(thatListener.name);
                            infowindow.setPosition(thatListener.position);
                            infowindow.open(map);
                        });

                        newMarkers.push(marker);
                    }
                }
            }

            for (var m in markers) {
                var mm = markers[m];
                mm.setMap(null);
            }

            markers = newMarkers;

            markerclusterer.clearMarkersExcept(markers);
            markerclusterer.addMarkers(markers, false);

        }, function() {
        }, bounds.getNorthEast().lat(), bounds.getNorthEast().lng(),
           bounds.getSouthWest().lat(), bounds.getSouthWest().lng(),
                true, true);
    }
};

function setMapSize() {
    var mapCanvas = document.getElementById('map_canvas');
    var heightFix = 0;

    if (!thatMap.scrollWasMade && window.screenTop) {
        heightFix = window.screenTop;
    }

    mapCanvas.style.height = ((window.innerHeight - 43) + heightFix) + 'px';

    window.setTimeout(function() {
        window.scrollTo(0, 1);
        thatMap.scrollWasMade = true;
        setMapSize();
    }, 500);

    if (!thatMap.usingTextField) {
        $('#searchTextField').css('left', '170px');
        $('#map-beta-logo-img').fadeIn(2000);
        $('#map-current-location-icon').fadeIn(2000);

        var searchTextField = document.getElementById('searchTextField');
        searchTextField.style.width = (window.innerWidth - 201) + 'px';
    }
}

//Buttons
var mapLogoButton = new ClickableButton();
var mapCurrentLocationButton = new ClickableButton();