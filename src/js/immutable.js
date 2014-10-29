"use strict";

import Immutable from '../bower_components/immutable/dist/immutable';

export default angular.module('Immutable', [])
  .service('Immutable', function () {
    return Immutable;
  })
