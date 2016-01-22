#!/usr/bin/env node

var cli = require('cli');
var extend = require('extend');
var defaults = require('../options-default')

var exec = {
  suggest: require('../suggest'),
  create: require('../create'),
  tag: require('../tag'), // a.k.a. postversion
  verbs: require('../verbs')
};

cli.parse({
  optfile: [ 'o', 'Custom options file, needed if not ./.ddc.config.js', 'file' ]
}, Object.keys(exec));

var ddcOptions = defaults;
if (cli.options.optfile) {
  var custom = require(cli.options.optfile);
  console.log('Using custom options', cli.options.optfile, Object.keys(custom));
  extend(ddcOptions, custom);
}

if (!exec[cli.command]) throw new Error('Declared command does not exist: ' + cli.command);

var stream = process.stdout;

var result = exec[cli.command].call(undefined, cli.args, ddcOptions);
stream.write(result);
stream.write("\n");
