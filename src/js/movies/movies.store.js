"use strict";

import Immutable from '../immutable';
import moviesDispatcher from './movies.dispatcher';
import Store from '../store';
import CONSTS from './constants';

export default angular.module('movies.store', [
  Immutable.name,
  moviesDispatcher.name,
  Store.name
])
  .service('moviesStore', function (Immutable, moviesDispatcher, Store) {

    class MoviesStore extends Store {
      constructor() {
        console.log('new moviesstore');
        super();

        this.store = this.store.push(Immutable.fromJS({id:'123fsdf-0123-4','name':'baz'}))

      }

      update(movie) {
        console.log('update', movie.toObject());
        this.store = this.store
          .map((i) => {
            if (i.get('id') === movie.get('id')) {
              return movie;
            }
          });
        this.emitChange();
      }

      getAll() {
        return this.store;
      }

      getOne(id) {
        return this.store
          .toVector()
          .filter(i => i.get('id') === id)
          .get(0);
      }
    }

    var moviesStore = new MoviesStore();

    moviesDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case CONSTS.MOVIES_UPDATE:
          moviesStore.update(payload.data);
          break;
      }

      moviesStore.emitChange();

      return true;
    });

    return moviesStore;

  });
