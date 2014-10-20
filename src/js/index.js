"use strict";

import movies from './movies/movies';
import imRepeat from './im-repeat/im-repeat.directive';
import imPath from './im-path/im-path.directive';

var app =  angular.module('movies.app', [
    movies.name,
    imRepeat.name,
    imPath.name
  ])
  .run(function () {
    console.log('movies.app running');
  });

angular.bootstrap(document, [app.name]);
