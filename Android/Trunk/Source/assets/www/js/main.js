var errors = 0;
var BASE_URL = 'http://www.zonagratis.com.br/';
var BASE_API = BASE_URL + 'api/';

var androidModeOn = (window.android ? true : false);
var userSessionId = undefined;

var util = {
    makeNumberBeautiful: function(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    },
    cut: function(text, limit) {
	return (text.length <= limit ? text : text.substring(0, (limit-3)) + '...');
    },
    number: function(number) {
        var newNumber = '';
        number = number.toString();

        var c = 0;
        for (var i = number.length - 1; i >= 0; i--) {
            c++;

            if (c > 3) {
                c = 1;
                newNumber = '.' + newNumber;
            }

            newNumber = number[i] + newNumber;
        }

        return newNumber;
    },
    /**
     * Take care: this function in Android is assync!
     * 
     * @param message The message to show
     */
    showMessage: function(message) {
        util.callOnAndroid(function() {
            window.android.showDialog(message);
        }, function() {
            window.alert(message);
        });
    },
    getLanguage: function() {
        var language;

        if (navigator.appName == 'Netscape') {
            language = navigator.language;
        } else {
            language = navigator.browserLanguage;
        }

        var code = '';

        if (language) {
            code = language.substring(0, 2);
        }

        return code;
    },
    setUserSessionId: function(newSessionId) {
        if (newSessionId) {
            userSessionId = newSessionId;
        }
    },
    setLanguage: function(newLanguage) {
        if (newLanguage && newLanguage != 'pt') {
            language = newLanguage;
            
            if (dic) {
                var currentDic = dic[newLanguage];

                if (!currentDic) {
                    currentDic = dic.en;
                }

                for (var k in currentDic) {
                    if (currentDic.hasOwnProperty(k)) {
                        $('.' + k).html(currentDic[k]);
                    }
                }

                $('#search').attr('placeholder', currentDic['placeholder']);
                document.title = currentDic['title'];

                // Changing images based on an specific language.
                for (var key in currentDic) {
                    if (currentDic.hasOwnProperty(key)) {
                        $('#' + key).css('background-image', currentDic[key]);
                    }
                }

            }
        }
    },
    callOnAndroid: function(functionToCallIfAndroidModeIsOn, functionToCallIfAndroidModeIsOff) {
        if (androidModeOn && functionToCallIfAndroidModeIsOn) {
            functionToCallIfAndroidModeIsOn();
        } else if (!androidModeOn) {
            if (!functionToCallIfAndroidModeIsOff) {
                util.showMessage(dic[language]['not-supported-on-android']);
            } else {
                functionToCallIfAndroidModeIsOff();
            }
        }
    },
};

var hello = function(win, fail) {
	if (window['PluginFm'] == undefined)
		PluginManager.addService("PluginFm","net.freifunk.plugin.PluginFm");
	PhoneGap.execAsync(win, fail, "PluginFm", "sayHello", []);
};

function internalError() {
    // ignores for instance
}

function errorMessage(err) {
    errors++;
    err = (!err ? 'network error' : err);

    if (errors == 3) {
        window.alert('Error: ' + err + '. Too many errors. The next ones will be ignored.');
    } else if (errors < 3) {
        window.alert('Error: (' + err + ') Please try again!');
    }
}

function Server() {
    var thatServer = this;
    thatServer.askAgain = true;

    Server.prototype.lostSession = function() {
        if (!thatServer.askAgain) {
            return true;
        } else {
            thatServer.askAgain = false; // could do something here
            return true;
        }
    };

    /**
     * the parameter is a JSON with url, data, error and success
     */
    Server.prototype.call = function(callJSON) {
        $.ajax({
            cache: false,
            dataType: 'json',
            type: 'GET',
            url: callJSON.url,
            data: callJSON.data,
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                var errorDescription = 'Error';

                if (XMLHttpRequest) {
                    errorDescription += ' :: textStatus=' + textStatus;
                    errorDescription += ' :: responseText=' + XMLHttpRequest.responseText;

                    if (errorThrown) {
                        errorDescription += ' :: ' + errorThrown.description;
                    }

                    internalError(errorDescription);
                }

                callJSON.error();
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (data) {
                if (!data) {
                    callJSON.error();
                } else if (data && data.success) {
                    callJSON.success(data);
                } else if (data && !data.success) {
                    if (data.error == 'INVALID_SESSION') {
                        thatServer.lostSession();
                    } else {
                        internalError('Error code: ' + data.error);
                    }

                    callJSON.error(data.error);
                }
            }
        });
    }
}

function UserInterface() {
    UserInterface.prototype.changeSsid = function(ssid) {
        $('#network-name').html(ssid);
    };

    UserInterface.prototype.changeStatus = function(status) {
        $('#network-status').html(status);
    };

    UserInterface.prototype.networkIsZG = function() {
        $('#network-type').html('<div id="open-network"></div>');
    };

    UserInterface.prototype.networkIsNotZG = function() {
        $('#network-type').html('<div id="closed-network"></div>');
    };

    UserInterface.prototype.networkIsUnknown = function() {
        $('#network-type').html('<div id="unknown-network"></div>');
    };

    UserInterface.prototype.internetButtonOnZg = function() {
        $('#internet-button').attr('class', 'internet-button-on-released');
        networkState.play('network-status-icon-connected-zg', 200);

        $('#main-connected-info').attr('class', 'main-connected-info-visible');
        $('#main-not-connected-info').attr('class', 'main-not-connected-info-invisible');
        
        $('#share-network-button-field').attr('class', 'share-network-button-field-invisible');
        
        $('#not-zg-notification-field').attr('class', 'not-zg-notification-field-invisible');
        $('#zg-notification-field').attr('class', 'zg-notification-field-visible');

        $('#header-share-icon').attr('class', 'header-share-icon-on-released');
    };

    UserInterface.prototype.internetButtonOnNotZg = function() {
        $('#internet-button').attr('class', 'internet-button-on-released');
        networkState.stop('network-status-icon-connected-not-zg');

        $('#main-connected-info').attr('class', 'main-connected-info-visible');
        $('#main-not-connected-info').attr('class', 'main-not-connected-info-invisible');

        $('#share-network-button-field').attr('class', 'share-network-button-field-visible');

        $('#not-zg-notification-field').attr('class', 'not-zg-notification-field-visible');
        $('#zg-notification-field').attr('class', 'zg-notification-field-invisible');

        $('#header-share-icon').attr('class', 'header-share-icon-off');
    };

    UserInterface.prototype.internetButtonSearching = function() {
        $('#internet-button').attr('class', 'internet-button-off');
        networkState.play('network-status-icon-searching', 500);

        $('#main-connected-info').attr('class', 'main-connected-info-invisible');
        $('#main-not-connected-info').attr('class', 'main-not-connected-info-visible');

        $('#share-network-button-field').attr('class', 'share-network-button-field-invisible');

        $('#not-zg-notification-field').attr('class', 'not-zg-notification-field-invisible');
        $('#zg-notification-field').attr('class', 'zg-notification-field-invisible');

        $('#header-share-icon').attr('class', 'header-share-icon-off');
    };

    UserInterface.prototype.internetButtonOff = function() {
        $('#internet-button').attr('class', 'internet-button-off');
        networkState.stop('network-status-icon-disconnected');

        $('#main-connected-info').attr('class', 'main-connected-info-invisible');
        $('#main-not-connected-info').attr('class', 'main-not-connected-info-visible');

        $('#share-network-button-field').attr('class', 'share-network-button-field-invisible');
        
        $('#not-zg-notification-field').attr('class', 'not-zg-notification-field-invisible');
        $('#zg-notification-field').attr('class', 'zg-notification-field-invisible');

        $('#header-share-icon').attr('class', 'header-share-icon-off');
    };
}

function FromAndroid() {
    FromAndroid.prototype.changeState = function(newState, ssid, numberOfNetworks) {
        switch (newState) {
            case 'CONNECTED_WEB':
                userInterface.networkIsZG();
                userInterface.changeStatus(dic[language]['connection-status-click-here']);
                userInterface.changeSsid(dic[language]['connection-status-see-the-map']);
                userInterface.internetButtonOnZg();
                break;

            case 'CONNECTED_ZG':
                userInterface.networkIsZG();
                userInterface.changeStatus(dic[language]['connection-status-conected-text']);
                userInterface.changeSsid(ssid);
                userInterface.internetButtonOnZg();
                break;

            case 'CONNECTED_NOT_ZG':
                userInterface.networkIsNotZG();
                userInterface.changeStatus(dic[language]['connection-status-conected-text']);
                userInterface.changeSsid(ssid);
                userInterface.internetButtonOnNotZg();
                break;

            case 'TRYING_TO_CONNECT':
                userInterface.networkIsUnknown();
                userInterface.changeStatus(dic[language]['connection-status-trying-text']);
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonSearching();
                break;

            case 'EXTERNAL_DISCONNECTED':
                userInterface.networkIsUnknown();
                userInterface.changeStatus(dic[language]['connection-status-noconnection-text']);
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonOff();
                break;

            case 'WIFI_UNKNOWN':
            case 'WIFI_OFF':
                userInterface.networkIsUnknown();
                userInterface.changeStatus(dic[language]['connection-status-wifioff-text']);
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonOff();
                break;

            case 'CONNECTED_UNKNOWN_YET':
            case 'VALIDATING':
                userInterface.networkIsUnknown();
                userInterface.changeStatus(dic[language]['connection-status-validating-text']);
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonSearching();
                break;

            case 'CONNECTED_BUT_WITHOUT_INTERNET':
                userInterface.networkIsUnknown();
                userInterface.changeStatus(dic[language]['connection-status-nointernet-text']);
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonOff();
                break;

            case 'WIFI_ON':
            case 'IDLE':
            case 'TESTING_EACH_WIFI':
                userInterface.networkIsUnknown();
                if (numberOfNetworks == 0) {
                    userInterface.changeStatus(dic[language]['connection-status-nonetwork-text']);
                } else if (numberOfNetworks === 1) {
                    userInterface.changeStatus(dic[language]['connection-status-onenetworknearby-text']);
                } else {
                    userInterface.changeStatus(numberOfNetworks + dic[language]['connection-status-networksnearby-text']);
                }
                userInterface.changeSsid(dic[language]['connection-status-offlinemode-text']);
                userInterface.internetButtonSearching();

                break;
        }
    };

    FromAndroid.prototype.showNetworks = function(networkList) {
        if (!networkList || networkList.length === 0) {
            $('#network-list').html('<div onclick="stats.generalClickTrack(\'network-list > nothing found yet\');"><div class="no-wifi"></div>' +
                    '<div class="network-not-found">Nenhuma rede encontrada ainda...</div></div>');
        } else {
            var html = '';

            for (var i = 0; i < networkList.length; i++) {
                if (i % 4 == 0) {
                    var wifiSignal = networkList[i];
                    var wifiName = networkList[i + 1];
                    var bssid = networkList[i + 2];
                    var isZg = networkList[i + 3];

                    html += '<a href="javascript: share.share(\'' + bssid + '\'); stats.generalClickTrack(\'network-list > zg='
                            + isZg + '\');">';

                    html += '<div class="w' + wifiSignal + '"></div>';

                    if (isZg) {
                        html += '<div class="zg"></div>';
                    } else {
                        html += '<div class="not-zg"></div>';
                    }

                    html += '<div class="wifi-name">' + wifiName + '</div>';
                    html += '</a>';

                    if (i < networkList.length - 4) {
                        html += '<div class="separator"></div>';
                    } else {
                        html += '<div class="last-space"></div>';
                    }
                }
            }

            $('#network-list').fadeOut(600, function() {
                $('#network-list').html(html);
                $('#network-list').fadeIn(300);
            });
        }
    };

    FromAndroid.prototype.updateAvailable = function() {
        //TODO - redo html update - it is not working anymore on new version - need to test.
        //$('#news-icon').html('<div id="update-icon"></div>');
        //$('#news-content').html('<a href="javascript:window.location.reload();">'
        //        + dic[language]['update-available'] + '</a>');
    };

    FromAndroid.prototype.openInternalNotification= function(text, action, analytics, timer, iconPath) {
        internalNotification.open(text, action, analytics, timer, iconPath)
    };

    FromAndroid.prototype.closeInternalNotification= function() {
        internalNotification.close();
    };

    FromAndroid.prototype.showHardcodeBanner= function() {
        $('#hardcode-banner-field').attr('class', 'hardcode-banner-field-visible');
        $('#footer').attr('class', 'footer-visible');
    };

    FromAndroid.prototype.hideHardcodeBanner= function() {
        $('#hardcode-banner-field').attr('class', 'hardcode-banner-field-invisible');
        $('#footer').attr('class', 'footer-invisible');
    };
}

function Stats() {
    Stats.prototype.generalClickTrack = function(objName) {
        util.callOnAndroid(
                function() {
                    window.android.doActionOnAndroid('generalClickTrack', '{"objName":"' + objName + '"}', false);
                }, function() {
                    // TODO: how to track if it is not Android?
                });
    };

    Stats.prototype.iconClickTrack = function(name) {
        util.callOnAndroid(
                function() {
                    window.android.doActionOnAndroid('iconClickTrack', '{"name":"' + name + '"}', false);
                }, function() {
                    // TODO: how to track if it is not Android?
                });
    };
}

function Share() {
    Share.prototype.share = function(bssid) {
        util.callOnAndroid(
                function() {
                    window.android.doActionOnAndroid('share', '{"bssid":"' + bssid + '"}', true);
                }, function() {
                    // TODO: how to track if it is not Android?
                });
    };
}

function ZG() {
    var thatZG = this;
    if(androidModeOn)
    {
        thatZG.typeNetwork = 'ALL';
    }
    else
    {
        thatZG.typeNetwork = 'OPEN'; 
    }

    function makeErrorCallbackFunction(silent, callback) {
        return function(err) {
            if (!silent) {
                errorMessage(err);
            }

            if (callback) {
                callback(err);
            }
        };
    }

    ZG.prototype.findNearby = function(callbackWithJSON, callbackError, north_east_latitude, north_east_longitude,
            south_west_latitude, south_west_longitude, silent, forceNoCache) {
        
        var cache = this;

        if (cache.cache && !forceNoCache) {
            callbackWithJSON(cache.cache);
        } else {
            server.call({
                url: BASE_API + 'zg/wifi/find_nearby/',
                data: {
                    origin: 'WEB',
                    v: '2',
                    north_east_latitude: '' + north_east_latitude,
                    north_east_longitude: '' + north_east_longitude,
                    south_west_latitude: '' + south_west_latitude,
                    south_west_longitude: '' + south_west_longitude,
                    max_results: '500',
                    type: thatZG.typeNetwork
                },
                error: makeErrorCallbackFunction(silent, callbackError),
                success: function (data) {
                    if (!data) {
                        errorCallback('data is empty!');
                    } else {
                        cache.cache = data;
                        callbackWithJSON(cache.cache);
                    }
                }
            });
        }
    }
}

// MAIN

var server = new Server();
var zg = new ZG();
var fromAndroid = new FromAndroid();
var userInterface = new UserInterface();
var stats = new Stats();
var share = new Share();

//Buttons
var mainGoToInternetButton = new ClickableButton();
var mainShareNetworkButton = new ClickableButton();
var mainNetworksButton = new ClickableButton();
var mainMapButton = new ClickableButton();
var mainHelpButton = new ClickableButton();
var mainShareZgSuccessConnectionOnFacebookButton = new ClickableButton();

//Sprites
var networkState = new Sprite();

function zgMain() {
    if (!androidModeOn) {
        var language = util.getLanguage();

        if (language == 'en' || language == 'es') {
            util.setLanguage(language);
        }
    }
}
