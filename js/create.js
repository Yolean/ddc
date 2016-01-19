
var suggest = require('./suggest');

var fs = require('fs');
var path = require('path');

module.exports = function(args, options) {
  console.assert(!!options.path, 'DDC foolder path is required');

  var template = path.join(__dirname, '../templates/branch-readme.md');

  var id = suggest(undefined, options);

  if (!fs.existsSync(options.path)) {
    throw new Error('Nonexistent branch readme folder ' + options.path);
  }

  var readme = path.join(options.path, id + '.md');

  var content = fs.readFileSync(template);
  fs.writeFileSync(readme, content);

  return readme;
};
