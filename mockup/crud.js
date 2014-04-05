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

function mongolabRead (user, password) {
    var request = "https://api.mongolab.com/api/1/databases/js-xperiment/collections/grocerylist?q={user: {name: \"Test\", password: " 
        + createHash(password) + "}}&apiKey=" + MONGOLAB_API_KEY;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", request, false);
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

/*
 * Data sets
 */

LIST1 = {
    name: "Supermarket",
    shop: "Tesco in Houston",
    urgency: "H",
    items: [
        {name: "Corn flakes", quantity: 2, unit: "kg"},
        {name: "Soda", quantity: 3, unit: "l"},
        {name: "Charcoal", quantity: 3, unit: "kg"},
        {name: "Shampoo", quantity: 1, unit: "p"},
        {name: "JS book !!!", quantity: 1, unit: "p"}
    ]
};
LIST2 = {
    name: "Bio shop",
    shop: "",
    urgency: "M",
    items: [
        {name: "Tomatoes", quantity: 1, unit: "kg"},
        {name: "Avocado", quantity: 6, unit: "p"},
        {name: "Milk", quantity: 2, unit: "l"}
    ]
};
//mongolabCreate("Test", "Test", LIST1);
//mongolabCreate("Test", "Test", LIST2);
//mongolabUpdate("Test", "Test", "53402ba2e4b098054f466f8a", LIST2);
//mongolabDelete("53402ba2e4b098054f466f8a");
mongolabRead("Test", "Test");