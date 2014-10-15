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

export default angular.module('movies.store', [
  actions.name,
  dispatcher.name,
  Immutable.name
])
  .service('moviesStore', function (ACTIONS, dispatcher, Immutable, $rootScope) {

    var store = $rootScope.$new();
    store.movieItems = Immutable.Map();

    var addMovie = function (movie) {
      if (validMovie(movie)) {
        var id = movie.id = getId();
        var obj = {};
        obj[id] = movie;
        var map = Immutable.fromJS(obj);
        store.movieItems = store.movieItems.merge(map);
        store.movieItems[store.movieItems.length - 1] = true;
        store.$emit('change');
      }
    };

    addMovie({title: 'Rambo', year: 1982})
    addMovie({title: 'Titanic', year: 1997})

    var delMovie = function (movie) {
      store.movieItems = store.movieItems
        .filter(m => m.get('id') !== movie.id)
        .toVector();
      store.$emit('change');
    };

    var updateMovie = function (movie) {
      if (validMovie(movie)) {
        store.movieItems = store.movieItems
          .updateIn([movie.id.toString()], m => {
            console.log(m);
            return Immutable.fromJS(movie);
          });
        store.$emit('change');
      }
    };

    dispatcher.$on(ACTIONS.ADD_MOVIE, (_, d) => {
      addMovie(d);
    });

    dispatcher.$on(ACTIONS.DEL_MOVIE, (_, d) => {
      delMovie(d);
    });

    dispatcher.$on(ACTIONS.UPDATE_MOVIE, (_, d) => {
      updateMovie(d);
    });

    return store;
  })
