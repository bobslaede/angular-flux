"use strict";

import store from './movies.store';

describe('Store', function () {

  beforeEach(module(store.name));

  var sut;

  beforeEach(inject(function(_moviesStore_) {
    sut = _moviesStore_;
  }))

  describe('tests', function () {

    it('should do stuff', function () {
      expect(sut.movieItems).not.toBe(undefined);
    })

  })

})
