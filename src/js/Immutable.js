"use strict";

//import Immutable from '../bower_components/immutable/dist/Immutable';

export default angular.module('Immutable', [])
  .service('Immutable', function ($window) {
    return $window.Immutable;
  })
