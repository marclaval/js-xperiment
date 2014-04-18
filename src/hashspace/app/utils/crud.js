/*
 * Function to create a hash for passwords
 */
function createHash(s) {
  var hash = 0, i, chr, len;
  if (s.length == 0) return hash;
  for (i = 0, len = s.length; i < len; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

/*
 * Mongolab REST doc: http://docs.mongolab.com/restapi/
 * Below are samples of CRUD requests to mongolab.
 */

var MONGOLAB_API_KEY = "rgwHsILbUV1v5nfrtVTuqlooPcYAV-_h";

function mongolabCreate (user, password, doc) {
    doc.user = {};
    doc.user.name = user;
    doc.user.password = createHash(password);

    var request = "https://api.mongolab.com/api/1/databases/js-xperiment/collections/grocerylist?apiKey=" + MONGOLAB_API_KEY;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", request, false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(doc));
    return xhr.responseText;
}

function mongolabRead (user, password, cb) {
    var request = "https://api.mongolab.com/api/1/databases/js-xperiment/collections/grocerylist?q={user: {name: \"Test\", password: " 
        + createHash(password) + "}}&apiKey=" + MONGOLAB_API_KEY;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        var response = null;
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
        }
        cb(response);
    };
    xhr.open("GET", request);
    xhr.send();
    return xhr.responseText;
}

function mongolabUpdate (user, password, id, doc) {
    doc.user = {};
    doc.user.name = user;
    doc.user.password = createHash(password);

    var request = "https://api.mongolab.com/api/1/databases/js-xperiment/collections/grocerylist/" + id + "?apiKey=" + MONGOLAB_API_KEY;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", request, false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(doc));
    return xhr.responseText;
}

function mongolabDelete (id) {
    var request = "https://api.mongolab.com/api/1/databases/js-xperiment/collections/grocerylist/" + id + "?apiKey=" + MONGOLAB_API_KEY;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", request, true);
    xhr.send();
    return xhr.responseText;
}

var dbData = {lists: null};
exports.read = function(user, password, cb) {
    mongolabRead(user, password, function(response) {
        dbData.lists = response;
        cb(response !== null);
    });
}
exports.dbData = dbData;