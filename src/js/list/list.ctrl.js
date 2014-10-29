"use strict";

import moviesStore from '../movies2/movies.store';

class ListCtrl {
  constructor($scope, moviesStore) {

    this.$scope = $scope;
    this.moviesStore = moviesStore;

    this.$scope.model = {
      list: undefined
    };

    this.moviesStore.on('change', this.onChange.bind(this));

    this.onChange();
  }

  onChange() {
    this.$scope.model.list = this.moviesStore.getAll();
  }
}

export default angular.module('list.ctrl', [
    moviesStore.name
  ])
  .controller('ListCtrl', ListCtrl);
