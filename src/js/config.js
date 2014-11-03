"use strict";

import movies from './movies/movies';
import uiRouter from '../bower_components/ui-router/release/angular-ui-router';

export default angular.module('movies.app.config', [
  uiRouter,
  movies.name
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view="list">l</div><hr/><div ui-view="main">m</div>'
      })
      .state('app.movies', {
        url: '/movies',
        views: {
          'list': {
            templateUrl: 'js/movies/list.html',
            controller: 'MoviesListController'
          },
          'main': {
            template: '<div ui-view="movies">please select</div>'
          }
        }
      })
      .state('app.movies.view', {
        url: '/:id',
        views: {
          'movies': {
            templateUrl: 'js/movies/view.html',
            controller: 'MoviesViewController'
          }
        }
      })
      .state('app.movies.view.edit', {
        url: '/edit',
        views: {
          'movies@app.movies': {
            templateUrl: 'js/movies/edit.html',
            controller: 'MoviesEditController as editCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/movies');

  });
