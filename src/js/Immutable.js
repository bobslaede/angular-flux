"use strict";

export default angular.module('Immutable', [])
  .service('Immutable', function ($window) {
    return $window.Immutable;
  })
