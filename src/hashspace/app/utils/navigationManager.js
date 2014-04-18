exports.setHash = function(newHashString) {
    if (getHash() != newHashString) {
        window.location.hash = newHashString;
    }
}

var getHash = exports.getHash = function() {
    var href = window.location.href;
    var sharpIndex = href.indexOf("#");
    if (sharpIndex != -1) {
        return href.substring(sharpIndex + 1);
    }
    return "";
}

var addListener = exports.addListener = function(cb) {
    if(window.addEventListener) {
        window.addEventListener('hashchange', cb);
    } else {
        window.attachEvent('onhashchange', cb);
    }
}

var navData = {
    hash: getHash()
}
function onHashChange() {
    navData.hash = getHash();
}
addListener(onHashChange);
exports.navData = navData;