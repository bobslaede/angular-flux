"use strict";

import Immutable from '../immutable';
import moviesDispatcher from './movies.dispatcher';
import Store from '../store';
import CONSTS from './constants';

var GUID = function () {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  // then to call it, plus stitch in '4' in the third group
  var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
  return guid;
};

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

        this.model = {
          id: '',
          name: ''
        }
      }

      update(movie) {
        console.log('update', movie.toObject());
        var store = this.store
          .map((i) => {
            if (i.get('id') === movie.get('id')) {
              return movie;
            }
          });
        this.store = store;
        console.table(this.store.toJS());
      }

      add() {

      }

      create() {
        var movie = angular.copy(this.model);
        movie.id = GUID();
        var imMovie = Immutable.fromJS(movie);
        this.store = this.store.push(imMovie);
        console.table(this.store.toJS());
        this.emit('create', imMovie);
      }

      getAll() {
        return this.store;
      }

      getOne(id) {
        return this.store
          .toList()
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
        case CONSTS.MOVIES_UNDO:
          moviesStore.undo();
          break;
        case CONSTS.MOVIES_REDO:
          moviesStore.redo();
          break;
        case CONSTS.MOVIES_ADD:
          moviesStore.add();
          break;
        case CONSTS.MOVIES_CREATE:
          moviesStore.create();
          break;
      }

      moviesStore.emitChange();

      return true;
    });

    return moviesStore;

  });
