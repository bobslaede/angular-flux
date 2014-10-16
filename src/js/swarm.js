"use strict";

export default angular.module('Swarm', [])
  .service('Immutable', function ($window) {
    return $window.Swarm;
  })
