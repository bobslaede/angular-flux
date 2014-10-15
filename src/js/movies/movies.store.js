"use strict";

import actions from './movies.actions';
import dispatcher from '../dispatcher';
import Immutable from '../Immutable';

var validMovie = function (movie) {
  let errs = 0;
  if (!movie.title) {
    console.error('No movie title');
    errs++;
  }
  if (!movie.year) {
    console.error('No movie year');
    errs++;
  }
  if (movie.year && movie.year <= 1900) {
    console.error('Movie way to old');
    errs++;
  }
  return errs == 0;
};

var _i = 0;
var getId = function () {
  return (++_i);
};

var _createItem = function (title, year) {
  return {
    title,
    year,
    id: getId()
  }
};

export default angular.module('movies.store', [
  actions.name,
  dispatcher.name,
  Immutable.name
])
  .service('moviesStore', function (ACTIONS, dispatcher, Immutable, $rootScope) {

    var store = $rootScope.$new();
    store.movieItems = Immutable.Vector(
      _createItem('First blood', 1982),
      _createItem('Rambo: First blood II', 1985)
    );

    var addMovie = function (movie) {
      if (validMovie(movie)) {
        movie.id = getId();
        store.movieItems = store.movieItems.push(movie);
        store.$emit('change');
      }
    };

    var delMovie = function (movie) {
      store.movieItems = store.movieItems
        .filter(m => m.id !== movie.id);
      store.$emit('change');
    };

    dispatcher.$on(ACTIONS.ADD_MOVIE, (_, d) => {
      addMovie(d);
    });

    dispatcher.$on(ACTIONS.DEL_MOVIE, (_, d) => {
      delMovie(d);
    });

    return store;
  })
