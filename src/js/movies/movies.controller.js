"use strict";

import store from './movies.store';
import actions from './movies.actions';

class MoviesCtrl {
  constructor (moviesStore, movieActions) {
    this.movieItems = moviesStore.movieItems;
    this.movieActions = movieActions;
  }

  addMovie(movie) {
    this.movieActions.addMovie(movie);
  }

  delMovie(movie) {
    this.movieActions.delMovie(movie);
  }
}

export default angular.module('movies.controller', [store.name, actions.name])
  .controller('MoviesCtrl', MoviesCtrl)
