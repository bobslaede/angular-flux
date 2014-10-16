"use strict";

import store from './movies.store';
import actions from './movies.actions';

class MoviesCtrl {
  constructor (moviesStore, movieActions) {
    this.movieItems = moviesStore.movieItems;
    this.movieActions = movieActions;

    moviesStore.$on('change', () => {
      this.movieItems = moviesStore.movieItems;
    })
  }

  addMovie(movie) {
    this.movieActions.addMovie(movie);
  }

  delMovie(movie) {
    this.movieActions.delMovie(movie);
  }

  updateMovie(movie) {
    this.movieActions.updateMovie(movie);
  }
}

export default angular.module('movies.controller', [store.name, actions.name])
  .controller('MoviesCtrl', MoviesCtrl)
