"use strict";

import moviesStore from './movies.store';
import moviesDispatcher from './movies.dispatcher';
import CONSTS from './constants';

class ListCtrl {
  constructor($scope, moviesStore, moviesDispatcher, $state) {

    this.$scope = $scope;
    this.moviesStore = moviesStore;
    this.moviesDispatcher = moviesDispatcher;
    this.$state = $state;

    this.$scope.model = {
      list: undefined
    };

    this.moviesStore.on('change', this.onChange.bind(this));
    this.moviesStore.on('create', (e, movie) => this.gotoNew(movie));

    this.onChange();
  }

  gotoNew(movie) {
    console.log('new movie', movie.get('id'));
    this.$state.go('app.movies.view.edit', { id : movie.get('id') });
  }

  create() {
    this.moviesDispatcher.dispatch({
      actionType: CONSTS.MOVIES_CREATE
    });
  }

  onChange() {
    console.log('on change')
    this.$scope.model.list = this.moviesStore.getAll();
  }
}

export default angular.module('movies.list.controller', [
  moviesStore.name,
  moviesDispatcher.name
])
  .controller('MoviesListController', ListCtrl);
