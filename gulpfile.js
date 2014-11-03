"use strict";

var gulp = require('gulp');
var traceur = require('./tasks/traceur');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var through = require('through2');
var source = require('vinyl-source-stream');
var traceurify = require('./tasks/traceurify');
var derequire = require('gulp-derequire');
var ngAnnotate = require('gulp-ng-annotate');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build:prod:js', function () {
  return browserify()
    .add(traceur.RUNTIME_PATH)
    .add('./src/js/index.js')
    .transform(traceurify())
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify({
      compress: {
        dead_code: true,
        properties: true,
        sequences: true,
        drop_debugger: true,
        conditionals: true,
        unused: true,
        join_vars: true,
        drop_console: true
      }
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('build:dev:js', function () {
  gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({
      experimental: true,
      modules: 'amd'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/tmp'))
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.*', ['build:dev:js'])
});
