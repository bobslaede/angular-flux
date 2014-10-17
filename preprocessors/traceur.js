"use strict";

var path = require('path');
var traceur = require('traceur');

var createTraceurPreprocessor = function (args, config, logger, helper, basePath) {
  config = config || {};

  var log = logger.create('preprocessor.traceur');
  var defaultOptions = {
    sourceMaps: false,
    modules: 'amd'
  };
  var options = helper.merge(defaultOptions, args.options || {}, config.options || {});

  var transformPath = args.transformPath || config.transformPath || function (filepath) {
      return filepath.replace(/\.es6.js$/, '.js').replace(/\.es6$/, '.js');
    };

  var moduleName = function (file) {
    var base = path.join(basePath);
    var n = path.relative(base, file);
    n = n.replace(/\\/g, '/');
    n = n.replace('.js', '');
    console.log(n);
    return n;
  };

  return function (content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = transformPath(file.originalPath);
    options.moduleName = moduleName(file.originalPath);

    var compiler = new traceur.NodeCompiler(options);
    var compiled = compiler.compile(content, file.path, file.path);
    var sourceMap = compiler.getSourceMap();
    if (sourceMap) {
      file.sourceMap = compiler.getSourceMap();
    }

    return done(null, compiled);
  };
};

createTraceurPreprocessor.$inject = ['args', 'config.traceurPreprocessor', 'logger', 'helper', 'config.basePath'];


var initTraceurFramework = function (files) {
  files.unshift({pattern: traceur.RUNTIME_PATH, included: true, served: true, watched: false});
};

initTraceurFramework.$inject = ['config.files'];


// PUBLISH DI MODULE
module.exports = {
  'preprocessor:traceur': ['factory', createTraceurPreprocessor],
  'framework:traceur': ['factory', initTraceurFramework]
};
