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

        this.store = this.store.merge(Immutable.fromJS({'123fsdf-0123-4': {id:'123fsdf-0123-4','name':'baz'}}))

        console.log(this.store.toArray());
      }

      update() {
        console.log('update');
      }

      getAll() {
        return this.store;
      }
    }

    var moviesStore = new MoviesStore();

    moviesDispatcher.register(function (payload) {
      var action = payload.action;

      switch (action.actionType) {
        case CONSTS.MOVIES_UPDATE:
          console.log('update');
          break;
      }

      moviesStore.emitChange();

      return true;
    });

    return moviesStore;

  });
