"use strict";

var gulp = require('gulp');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');

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
