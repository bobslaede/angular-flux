"use strict";

import moviesStore from './movies.store';

class ViewCtrl {

  constructor($scope, moviesStore, $state) {
    this.$scope = $scope;
    this.store = moviesStore;
    this.$state = $state;

    this.$scope.model = {};

    this.$scope.model.movie = this.store.getOne(this.$state.params.id);
  }

}

export default angular.module('movies.view.controller', [
  moviesStore.name
])
  .controller('MoviesViewController', ViewCtrl);
