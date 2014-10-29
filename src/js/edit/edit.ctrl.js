"use strict";

import moviesStore from '../movies2/movies.store';

class EditCtrl {
  constructor($scope, moviesStore) {
    console.log('edit ctrl');
  }

}

export default angular.module('edit.ctrl', [
  moviesStore.name
])
  .controller('EditCtrl', EditCtrl);
