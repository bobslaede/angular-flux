"use strict";

import movies from './movies/movies';
import imRepeat from './im-repeat/im-repeat.directive';

export default angular.module('movies.app', [movies.name,imRepeat.name])
  .run(function () {
    console.log('movies.app running');
  });

