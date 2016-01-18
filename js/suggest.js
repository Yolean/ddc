
var moment = require('moment');

// Note that I and O is excluded
var charset = "ABCDEFGHJKLMNPQRSTUVXYZ";

var randomReadableLetter = function() {
  return charset.charAt(Math.floor(Math.random() * charset.length));
};

var namegen = require('./namegen');

module.exports = function(args, options) {

  var clock = moment().format('YYWW'),
    n1 = randomReadableLetter(),
    n2 = randomReadableLetter();

  var name = namegen(n1, n2);

  return clock + name;

};
