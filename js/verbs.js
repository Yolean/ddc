
var verbs = {
  map:    ['log', '--oneline', '--decorate', '--all', '--graph'],
  start:  ['checkout', '-b'],
  resume: ['checkout'],
  undo:   ['checkout']
};

module.exports = function() {
  // the idea here is that we check .gitconfig and suggest changes
  // but let's just print for now
  var conf = '[alias]\n';
  for (var v in verbs) {
    conf += '  ';
    conf += v;
    conf += ' = ';
    conf += verbs[v].join(' ');
    conf += "\n";
  }
  return conf;
};
