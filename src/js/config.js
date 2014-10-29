"use strict";

import list from './list/list';
import edit from './edit/edit';
import movies from './movies2/movies';
import uiRouter from '../bower_components/ui-router/release/angular-ui-router';

export default angular.module('movies.app.config', [
  uiRouter,
  movies.name,
  edit.name,
  list.name
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('movies', {
        url: '/movies',
        abstract: true,
        template: '<ui-view></ui-view>'
      })
      .state('movies.list', {
        url: '/list',
        templateUrl: 'js/list/list.html',
        controller: 'ListCtrl'
      })
      .state('movies.edit', {
        url: '/:id/edit',
        templateUrl: 'js/edit/edit.html',
        controller: 'EditCtrl'
      })

    $urlRouterProvider.otherwise('/movies/list');

  });
