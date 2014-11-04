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
        this.store = Immutable.List();
        this.history = [];
        this.future = [];
        console.log('new store', this);
      }

      undo() {
        var store = this.store;
        this.future.unshift(store);
        this.store = this.history.pop();
      }

      redo() {
        var store = this.store;
        this.history.push(store);
        this.store = this.future.shift();
      }

      on(...args) {
        this.$scope.$on(...args);
      }

      emit(...args) {
        console.log('emit', args[0]);
        this.$scope.$emit(...args);
      }

      emitChange() {
        this.emit('change');
      }
    }

    return Store;

  });
