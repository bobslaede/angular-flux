"use strict";

var gulp = require('gulp');
var traceur = require('./tasks/traceur');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var through = require('through2');
var source = require('vinyl-source-stream');
var traceurify = require('./tasks/traceurify');
var derequire = require('gulp-derequire');

gulp.task('build:prod:js', function () {
  return browserify({
    standalone: 'foo'
  })
    .add(traceur.RUNTIME_PATH)
    .require('./src/js/index.js')
    .transform(traceurify())
    .bundle()
    .pipe(source('index.js'))
    //.pipe(derequire())
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
    .pipe(gulp.dest('src/tmp/js'))
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.*', ['build:dev:js'])
});
