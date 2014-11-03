"use strict";

import moviesDispatcher from './movies.dispatcher';
import moviesStore from './movies.store';
import list from './list.controller';
import edit from './edit.controller';
import view from './view.controller';

export default angular.module('movies', [
  moviesDispatcher.name,
  moviesStore.name,
  edit.name,
  view.name,
  list.name
]);
