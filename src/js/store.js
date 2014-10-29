"use strict";

import Immutable from './immutable';

const CHANGE_EVENT = Symbol();

export default angular.module('store', [
    Immutable.name
  ])
.factory('Store', function ($rootScope, Immutable) {

    var storeScope = $rootScope.$new();

    class Store {
      constructor() {
        this.$scope = storeScope.$new();
        this.store = Immutable.Map();
        console.log('new store', this);
      }

      on(...args) {
        this.$scope.$on(...args);
      }

      emit(...args) {
        this.$scope.$emit(...args);
      }

      emitChange() {
        this.emit(CHANGE_EVENT);
      }
    }

    return Store;

  });
