"use strict";

export default angular.module('dispatcher', [])
  .service('dispatcher', function ($rootScope) {
    return $rootScope.$new();
  })
