"use strict";

var gutil = require('gulp-util');
var through = require('through2');
var traceur = require('traceur');
var applySourceMap = require('vinyl-sourcemaps-apply');
var objectAssign = require('object-assign');

module.exports = function (options) {
  options = options || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-traceur', 'Streaming not supported'));
      return;
    }

    var fileOptions = objectAssign({}, options);

    if (file.sourceMap) {
      fileOptions.sourceMaps = 'inline';
    }

    try {
      var contents = file.contents.toString();
      var compiler = new traceur.NodeCompiler(fileOptions);
      var compiled = compiler.compile(contents, file.relative, file.relative);

      if (file.sourceMap) {
        applySourceMap(file, compiler.getSourceMap());
      }

      if (compiled) {
        file.contents = new Buffer(compiled);
      }

      cb(null, file);
    } catch (err) {
      cb(new gutil.PluginError('gulp-traceur', err, {
        fileName: file.path
      }));
    }
  });
};

module.exports.RUNTIME_PATH = traceur.RUNTIME_PATH;
