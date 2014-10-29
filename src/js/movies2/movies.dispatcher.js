"use strict";

import Dispatcher from '../dispatcher';

export default angular.module('movies.dispatcher', [Dispatcher.name])
  .service('moviesDispatcher', function (Dispatcher) {

    var moviesDispatcher = new Dispatcher();

    return moviesDispatcher;
  });
