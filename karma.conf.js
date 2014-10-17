// Karma configuration
// Generated on Fri Oct 17 2014 14:27:57 GMT+0200 (Central European Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-phantomjs-launcher',
      require('./preprocessors/traceur')
    ],
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      {pattern: 'src/bower_components/immutable/dist/Immutable.js', included: false},
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'src/js/**/*.spec.js', included: false},
      'test-main.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/js/**/*.js' : ['traceur']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
