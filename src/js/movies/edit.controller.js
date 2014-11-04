"use strict";

import moviesStore from './movies.store';
import moviesDispatcher from './movies.dispatcher';
import CONSTS from './constants';

class EditCtrl {

  constructor($scope, moviesStore, $state, moviesDispatcher) {

    this.$scope = $scope;
    this.moviesStore = moviesStore;
    this.$state = $state;
    this.moviesDispatcher = moviesDispatcher;


    this.movie = this.moviesStore.getOne(this.$state.params.id);

    this.$scope.model = {
      movie: {
        name: (val) => {
          if (val) {
            this.movie = this.movie.set('name', val);
          }
          return this.movie.get('name');
        }
      }
    };

  }

  save() {
    console.log("SAVE");
    this.moviesDispatcher.dispatch({
      actionType: CONSTS.MOVIES_UPDATE,
      data: this.movie
    });
  }

}

export default angular.module('movies.edit.controller', [
  moviesStore.name,
  moviesDispatcher.name
])
  .controller('MoviesEditController', EditCtrl);
