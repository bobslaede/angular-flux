"use strict";

import moviesStore from './movies.store';

class EditCtrl {
  constructor($scope, moviesStore) {
    console.log('edit ctrl');
  }

}

export default angular.module('movies.edit.controller', [
  moviesStore.name
])
  .controller('MoviesEditController', EditCtrl);
