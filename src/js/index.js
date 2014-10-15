"use strict";

import movies from './movies/movies';

export default angular.module('movies.app', [movies.name])
  .run(function () {
    console.log('movies.app running');
  });
