"use strict";

import Flux from '../bower_components/flux/dist/Flux';

export default angular.module('dispatcher', [])
  .factory('Dispatcher', function () {
    return Flux.Dispatcher;
  })
