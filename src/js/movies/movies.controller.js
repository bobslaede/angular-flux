"use strict";

import store from './movies.store';
import actions from './movies.actions';

class MoviesCtrl {
  constructor (moviesStore, movieActions) {
    this.movieItems = moviesStore.movieItems.toJS();
    this.movieActions = movieActions;

    moviesStore.$on('change', () => {
      this.movieItems = moviesStore.movieItems.toJS();
    })
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
