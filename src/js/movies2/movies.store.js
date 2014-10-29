"use strict";

import Immutable from '../immutable';
import moviesDispatcher from './movies.dispatcher';

export default angular.module('movies.store', [Immutable.name, moviesDispatcher.name])
  .service('moviesStore', function (Immutable, moviesDispatcher) {



  });
