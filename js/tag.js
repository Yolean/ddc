
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var move = function(fro, to) {
  child_process.execSync('git mv "' + fro + '" "' + to + '"');
};

module.exports = function(args, options) {

  var version;
  if (args.length) {
    version = args[0];
  } else {
    // when used as postversion hook
    var pkgJson = './package.json';
    var pkg = fs.readFileSync(pkgJson);
    version = JSON.parse(pkg).version;
  }

  if (!fs.existsSync(options.path)) {
    throw new Error('Nonexistent branch readme folder ' + options.path);
  }

  var tags = path.join(options.path, 'tags');
  if (!fs.existsSync(tags)) {
    fs.mkdir(tags);
  }
  var tag = path.join(tags, version);
  if (!fs.existsSync(tag)) {
    fs.mkdir(tag);
  }
  var readmes = fs.readdirSync(options.path);
  for (var i = 0; i < readmes.length; i++) {
    var fro = path.join(options.path, readmes[i]);
    if (fs.lstatSync(fro).isFile()) {
      move(fro, path.join(tag, readmes[i]));
    }
  }

  return tag;
};
