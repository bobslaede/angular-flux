"use strict";

import moviesStore from './movies.store';

class ViewCtrl {
  constructor($scope, moviesStore) {
    console.log('view ctrl');
  }

}

export default angular.module('movies.view.controller', [
  moviesStore.name
])
  .controller('MoviesViewController', ViewCtrl);
