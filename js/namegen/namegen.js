
var indexItem = function() {
  var item = new Array();
  item.random = (function() {
    return this[Math.floor(Math.random() * this.length)];
  }).bind(item);
  return item;
};

var index = function(wordlist) {
  var x = {};
  for (var i = 0; i < wordlist.length; i++) {
    var c = wordlist[i].charAt(0).toLowerCase();
    if (!x[c]) {
      x[c] = indexItem();
    }
    x[c].push(wordlist[i]);
  };
  return x;
};

var wordlists = [
  index(require('./lists/adjectives')),
  index(require('./lists/birds'))
];

var separator = '_';

module.exports = function() {
  var name = '';
  for (var i = 0; i < arguments.length; i++) {
    var a = arguments[i].toLowerCase();
    if (!wordlists[i]) {
      throw new Error('No word list for position ' + i + ' value ' + a);
    }
    var match = wordlists[i][a];
    if (!match || !match.length) {
      throw new Error('No names available for position ' + i + ' value ' + a);
    }
    name += separator + match.random().toLowerCase();
  }
  return name;
};
