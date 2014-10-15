"use strict";

import dispatcher from '../dispatcher';

export default angular.module('movies.actions', [dispatcher.name])
  .constant('ACTIONS', {
    ADD_MOVIE: 'ADD_MOVIE',
    DEL_MOVIE: 'DEL_MOVIE'
  })
  .service('movieActions', function (dispatcher, ACTIONS) {
    return {
      addMovie(movie) {
        dispatcher.$emit(ACTIONS.ADD_MOVIE, movie);
      },
      delMovie(movie) {
        dispatcher.$emit(ACTIONS.DEL_MOVIE, movie);
      }
    }
  });
