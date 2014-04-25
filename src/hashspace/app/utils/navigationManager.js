exports.setHash = function(newHashString) {
    if (getHash() != newHashString) {
        window.location.hash = newHashString;
    }
}

var getHash = exports.getHash = function() {
    var result = "";
    var href = window.location.href;
    var sharpIndex = href.indexOf("#");
    var slashIndex = href.indexOf("/", sharpIndex);
    if (sharpIndex != -1) {
        if (slashIndex == -1) {
            result = href.substring(sharpIndex + 1);    
        }
        else {
            result = href.substring(sharpIndex + 1, slashIndex);
        }
        
    }
    return result;
}

var getParameter = exports.getParameter = function() {
    var result = "";
    var href = window.location.href;
    var sharpIndex = href.indexOf("#");
    var slashIndex = href.indexOf("/", sharpIndex);
    if (sharpIndex != -1) {
        if (slashIndex != -1) {
            result = href.substring(slashIndex + 1);    
        }
    }
    return result;
}

var addListener = exports.addListener = function(cb) {
    if(window.addEventListener) {
        window.addEventListener('hashchange', cb);
    } else {
        window.attachEvent('onhashchange', cb);
    }
}

var navData = {
    hash: getHash(),
    parameter: getParameter()
}
function onHashChange() {
    navData.hash = getHash();
    navData.parameter = getParameter();
}
addListener(onHashChange);
exports.navData = navData;