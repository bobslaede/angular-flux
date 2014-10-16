"use strict";

import movies from './movies/movies';
import imRepeat from './im-repeat/im-repeat.directive';
import imPath from './im-path/im-path.directive';

export default angular.module('movies.app', [
    movies.name,
    imRepeat.name,
    imPath.name
  ])
  .run(function () {
    console.log('movies.app running');
  });

