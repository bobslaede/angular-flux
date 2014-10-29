"use strict";

import config from './config';

var app =  angular.module('movies.app', [
    config.name
  ])
  .run(function () {
    console.log('movies.app running');
  });

angular.bootstrap(document, [app.name]);
