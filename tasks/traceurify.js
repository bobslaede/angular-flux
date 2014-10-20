"use strict";

var through = require('through');
var traceur = require('traceur');

module.exports.RUNTIME_PATH = traceur.RUNTIME_PATH;

module.exports = function () {

  var compiler = new traceur.NodeCompiler({
    experimental: true,
    modules: 'commonjs'
  });

  return function (file) {
    if (file === traceur.RUNTIME_PATH) {
      return through();
    }

    var data = '';
    console.log(file);
    return through(write, end);

    function write (buf) { data += buf }
    function end () {
      var compiled = compiler.compile(data);

      this.queue(compiled);
      this.queue(null);
    }
  }

};

