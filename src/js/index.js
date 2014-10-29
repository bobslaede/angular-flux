"use strict";


var app =  angular.module('movies.app', [])
  .run(function () {
    console.log('movies.app running');
  });

angular.bootstrap(document, [app.name]);
