"use strict";

import moviesDispatcher from './movies.dispatcher';
import moviesStore from './movies.store';

export default angular.module('movies', [
  moviesDispatcher.name,
  moviesStore.name
]);
