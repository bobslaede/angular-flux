"use strict";

import movies from './movies/movies';
import uiRouter from '../bower_components/ui-router/release/angular-ui-router';

export default angular.module('movies.app.config', [
  uiRouter,
  movies.name
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('movies', {
        url: '/movies',
        abstract: true,
        template: '<div ui-view>FOO</div>'
      })
      .state('movies.list', {
        url: '/list',
        views: {
          '@': {
            templateUrl: 'js/movies/list.html',
            controller: 'MoviesListController'
          }
        }
      })
      .state('movies.view', {
        url: '/:id',
        views: {
          '@': {
            templateUrl: 'js/movies/view.html',
            controller: 'MoviesViewController'
          }
        }
      })
      .state('movies.view.edit', {
        url: '/edit',
        views: {
          '@': {
            templateUrl: 'js/movies/edit.html',
            controller: 'MoviesEditController'
          }
        }
      })

    $urlRouterProvider.otherwise('/movies/list');

  });
