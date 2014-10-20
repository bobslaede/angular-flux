!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.foo=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/index.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__movies_47_movies__,
    $__im_45_repeat_47_im_45_repeat_46_directive__,
    $__im_45_path_47_im_45_path_46_directive__;
"use strict";
var movies = ($__movies_47_movies__ = require("./movies/movies"), $__movies_47_movies__ && $__movies_47_movies__.__esModule && $__movies_47_movies__ || {default: $__movies_47_movies__}).default;
var imRepeat = ($__im_45_repeat_47_im_45_repeat_46_directive__ = require("./im-repeat/im-repeat.directive"), $__im_45_repeat_47_im_45_repeat_46_directive__ && $__im_45_repeat_47_im_45_repeat_46_directive__.__esModule && $__im_45_repeat_47_im_45_repeat_46_directive__ || {default: $__im_45_repeat_47_im_45_repeat_46_directive__}).default;
var imPath = ($__im_45_path_47_im_45_path_46_directive__ = require("./im-path/im-path.directive"), $__im_45_path_47_im_45_path_46_directive__ && $__im_45_path_47_im_45_path_46_directive__.__esModule && $__im_45_path_47_im_45_path_46_directive__ || {default: $__im_45_path_47_im_45_path_46_directive__}).default;
var $__default = angular.module('movies.app', [movies.name, imRepeat.name, imPath.name]).run(function() {
  console.log('movies.app running');
});

},{"./im-path/im-path.directive":6,"./im-repeat/im-repeat.directive":7,"./movies/movies":10}],1:[function(require,module,exports){
(function (process,global){
(function(global) {
  'use strict';
  if (global.$traceurRuntime) {
    return;
  }
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $Object.defineProperties;
  var $defineProperty = $Object.defineProperty;
  var $freeze = $Object.freeze;
  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
  var $keys = $Object.keys;
  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
  var $toString = $Object.prototype.toString;
  var $preventExtensions = Object.preventExtensions;
  var $seal = Object.seal;
  var $isExtensible = Object.isExtensible;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var types = {
    void: function voidType() {},
    any: function any() {},
    string: function string() {},
    number: function number() {},
    boolean: function boolean() {}
  };
  var method = nonEnum;
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var symbolInternalProperty = newUniqueString();
  var symbolDescriptionProperty = newUniqueString();
  var symbolDataProperty = newUniqueString();
  var symbolValues = $create(null);
  var privateNames = $create(null);
  function isPrivateName(s) {
    return privateNames[s];
  }
  function createPrivateName() {
    var s = newUniqueString();
    privateNames[s] = true;
    return s;
  }
  function isShimSymbol(symbol) {
    return typeof symbol === 'object' && symbol instanceof SymbolValue;
  }
  function typeOf(v) {
    if (isShimSymbol(v))
      return 'symbol';
    return typeof v;
  }
  function Symbol(description) {
    var value = new SymbolValue(description);
    if (!(this instanceof Symbol))
      return value;
    throw new TypeError('Symbol cannot be new\'ed');
  }
  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(Symbol.prototype, 'toString', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    var desc = symbolValue[symbolDescriptionProperty];
    if (desc === undefined)
      desc = '';
    return 'Symbol(' + desc + ')';
  }));
  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    return symbolValue;
  }));
  function SymbolValue(description) {
    var key = newUniqueString();
    $defineProperty(this, symbolDataProperty, {value: this});
    $defineProperty(this, symbolInternalProperty, {value: key});
    $defineProperty(this, symbolDescriptionProperty, {value: description});
    freeze(this);
    symbolValues[key] = this;
  }
  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(SymbolValue.prototype, 'toString', {
    value: Symbol.prototype.toString,
    enumerable: false
  });
  $defineProperty(SymbolValue.prototype, 'valueOf', {
    value: Symbol.prototype.valueOf,
    enumerable: false
  });
  var hashProperty = createPrivateName();
  var hashPropertyDescriptor = {value: undefined};
  var hashObjectProperties = {
    hash: {value: undefined},
    self: {value: undefined}
  };
  var hashCounter = 0;
  function getOwnHashObject(object) {
    var hashObject = object[hashProperty];
    if (hashObject && hashObject.self === object)
      return hashObject;
    if ($isExtensible(object)) {
      hashObjectProperties.hash.value = hashCounter++;
      hashObjectProperties.self.value = object;
      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
      $defineProperty(object, hashProperty, hashPropertyDescriptor);
      return hashPropertyDescriptor.value;
    }
    return undefined;
  }
  function freeze(object) {
    getOwnHashObject(object);
    return $freeze.apply(this, arguments);
  }
  function preventExtensions(object) {
    getOwnHashObject(object);
    return $preventExtensions.apply(this, arguments);
  }
  function seal(object) {
    getOwnHashObject(object);
    return $seal.apply(this, arguments);
  }
  freeze(SymbolValue.prototype);
  function isSymbolString(s) {
    return symbolValues[s] || privateNames[s];
  }
  function toProperty(name) {
    if (isShimSymbol(name))
      return name[symbolInternalProperty];
    return name;
  }
  function removeSymbolKeys(array) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (!isSymbolString(array[i])) {
        rv.push(array[i]);
      }
    }
    return rv;
  }
  function getOwnPropertyNames(object) {
    return removeSymbolKeys($getOwnPropertyNames(object));
  }
  function keys(object) {
    return removeSymbolKeys($keys(object));
  }
  function getOwnPropertySymbols(object) {
    var rv = [];
    var names = $getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var symbol = symbolValues[names[i]];
      if (symbol) {
        rv.push(symbol);
      }
    }
    return rv;
  }
  function getOwnPropertyDescriptor(object, name) {
    return $getOwnPropertyDescriptor(object, toProperty(name));
  }
  function hasOwnProperty(name) {
    return $hasOwnProperty.call(this, toProperty(name));
  }
  function getOption(name) {
    return global.traceur && global.traceur.options[name];
  }
  function defineProperty(object, name, descriptor) {
    if (isShimSymbol(name)) {
      name = name[symbolInternalProperty];
    }
    $defineProperty(object, name, descriptor);
    return object;
  }
  function polyfillObject(Object) {
    $defineProperty(Object, 'defineProperty', {value: defineProperty});
    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
    $defineProperty(Object, 'freeze', {value: freeze});
    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
    $defineProperty(Object, 'seal', {value: seal});
    $defineProperty(Object, 'keys', {value: keys});
  }
  function exportStar(object) {
    for (var i = 1; i < arguments.length; i++) {
      var names = $getOwnPropertyNames(arguments[i]);
      for (var j = 0; j < names.length; j++) {
        var name = names[j];
        if (isSymbolString(name))
          continue;
        (function(mod, name) {
          $defineProperty(object, name, {
            get: function() {
              return mod[name];
            },
            enumerable: true
          });
        })(arguments[i], names[j]);
      }
    }
    return object;
  }
  function isObject(x) {
    return x != null && (typeof x === 'object' || typeof x === 'function');
  }
  function toObject(x) {
    if (x == null)
      throw $TypeError();
    return $Object(x);
  }
  function checkObjectCoercible(argument) {
    if (argument == null) {
      throw new TypeError('Value cannot be converted to an Object');
    }
    return argument;
  }
  function polyfillSymbol(global, Symbol) {
    if (!global.Symbol) {
      global.Symbol = Symbol;
      Object.getOwnPropertySymbols = getOwnPropertySymbols;
    }
    if (!global.Symbol.iterator) {
      global.Symbol.iterator = Symbol('Symbol.iterator');
    }
  }
  function setupGlobals(global) {
    polyfillSymbol(global, Symbol);
    global.Reflect = global.Reflect || {};
    global.Reflect.global = global.Reflect.global || global;
    polyfillObject(global.Object);
  }
  setupGlobals(global);
  global.$traceurRuntime = {
    checkObjectCoercible: checkObjectCoercible,
    createPrivateName: createPrivateName,
    defineProperties: $defineProperties,
    defineProperty: $defineProperty,
    exportStar: exportStar,
    getOwnHashObject: getOwnHashObject,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    isObject: isObject,
    isPrivateName: isPrivateName,
    isSymbolString: isSymbolString,
    keys: $keys,
    setupGlobals: setupGlobals,
    toObject: toObject,
    toProperty: toProperty,
    type: types,
    typeof: typeOf
  };
})(typeof global !== 'undefined' ? global : this);
(function() {
  'use strict';
  function spread() {
    var rv = [],
        j = 0,
        iterResult;
    for (var i = 0; i < arguments.length; i++) {
      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
        throw new TypeError('Cannot spread non-iterable object.');
      }
      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
      while (!(iterResult = iter.next()).done) {
        rv[j++] = iterResult.value;
      }
    }
    return rv;
  }
  $traceurRuntime.spread = spread;
})();
(function() {
  'use strict';
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $__0 = Object,
      getOwnPropertyNames = $__0.getOwnPropertyNames,
      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
  function superDescriptor(homeObject, name) {
    var proto = $getPrototypeOf(homeObject);
    do {
      var result = $getOwnPropertyDescriptor(proto, name);
      if (result)
        return result;
      proto = $getPrototypeOf(proto);
    } while (proto);
    return undefined;
  }
  function superCall(self, homeObject, name, args) {
    return superGet(self, homeObject, name).apply(self, args);
  }
  function superGet(self, homeObject, name) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor) {
      if (!descriptor.get)
        return descriptor.value;
      return descriptor.get.call(self);
    }
    return undefined;
  }
  function superSet(self, homeObject, name, value) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor && descriptor.set) {
      descriptor.set.call(self, value);
      return value;
    }
    throw $TypeError(("super has no setter '" + name + "'."));
  }
  function getDescriptors(object) {
    var descriptors = {};
    var names = getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      descriptors[name] = $getOwnPropertyDescriptor(object, name);
    }
    var symbols = getOwnPropertySymbols(object);
    for (var i = 0; i < symbols.length; i++) {
      var symbol = symbols[i];
      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
    }
    return descriptors;
  }
  function createClass(ctor, object, staticObject, superClass) {
    $defineProperty(object, 'constructor', {
      value: ctor,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (arguments.length > 3) {
      if (typeof superClass === 'function')
        ctor.__proto__ = superClass;
      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
    } else {
      ctor.prototype = object;
    }
    $defineProperty(ctor, 'prototype', {
      configurable: false,
      writable: false
    });
    return $defineProperties(ctor, getDescriptors(staticObject));
  }
  function getProtoParent(superClass) {
    if (typeof superClass === 'function') {
      var prototype = superClass.prototype;
      if ($Object(prototype) === prototype || prototype === null)
        return superClass.prototype;
      throw new $TypeError('super prototype must be an Object or null');
    }
    if (superClass === null)
      return null;
    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
  }
  function defaultSuperCall(self, homeObject, args) {
    if ($getPrototypeOf(homeObject) !== null)
      superCall(self, homeObject, 'constructor', args);
  }
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.superGet = superGet;
  $traceurRuntime.superSet = superSet;
})();
(function() {
  'use strict';
  var createPrivateName = $traceurRuntime.createPrivateName;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $create = Object.create;
  var $TypeError = TypeError;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var ST_NEWBORN = 0;
  var ST_EXECUTING = 1;
  var ST_SUSPENDED = 2;
  var ST_CLOSED = 3;
  var END_STATE = -2;
  var RETHROW_STATE = -3;
  function getInternalError(state) {
    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
  }
  function GeneratorContext() {
    this.state = 0;
    this.GState = ST_NEWBORN;
    this.storedException = undefined;
    this.finallyFallThrough = undefined;
    this.sent_ = undefined;
    this.returnValue = undefined;
    this.tryStack_ = [];
  }
  GeneratorContext.prototype = {
    pushTry: function(catchState, finallyState) {
      if (finallyState !== null) {
        var finallyFallThrough = null;
        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
          if (this.tryStack_[i].catch !== undefined) {
            finallyFallThrough = this.tryStack_[i].catch;
            break;
          }
        }
        if (finallyFallThrough === null)
          finallyFallThrough = RETHROW_STATE;
        this.tryStack_.push({
          finally: finallyState,
          finallyFallThrough: finallyFallThrough
        });
      }
      if (catchState !== null) {
        this.tryStack_.push({catch: catchState});
      }
    },
    popTry: function() {
      this.tryStack_.pop();
    },
    get sent() {
      this.maybeThrow();
      return this.sent_;
    },
    set sent(v) {
      this.sent_ = v;
    },
    get sentIgnoreThrow() {
      return this.sent_;
    },
    maybeThrow: function() {
      if (this.action === 'throw') {
        this.action = 'next';
        throw this.sent_;
      }
    },
    end: function() {
      switch (this.state) {
        case END_STATE:
          return this;
        case RETHROW_STATE:
          throw this.storedException;
        default:
          throw getInternalError(this.state);
      }
    },
    handleException: function(ex) {
      this.GState = ST_CLOSED;
      this.state = END_STATE;
      throw ex;
    }
  };
  function nextOrThrow(ctx, moveNext, action, x) {
    switch (ctx.GState) {
      case ST_EXECUTING:
        throw new Error(("\"" + action + "\" on executing generator"));
      case ST_CLOSED:
        if (action == 'next') {
          return {
            value: undefined,
            done: true
          };
        }
        throw x;
      case ST_NEWBORN:
        if (action === 'throw') {
          ctx.GState = ST_CLOSED;
          throw x;
        }
        if (x !== undefined)
          throw $TypeError('Sent value to newborn generator');
      case ST_SUSPENDED:
        ctx.GState = ST_EXECUTING;
        ctx.action = action;
        ctx.sent = x;
        var value = moveNext(ctx);
        var done = value === ctx;
        if (done)
          value = ctx.returnValue;
        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
        return {
          value: value,
          done: done
        };
    }
  }
  var ctxName = createPrivateName();
  var moveNextName = createPrivateName();
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
  GeneratorFunctionPrototype.prototype = {
    constructor: GeneratorFunctionPrototype,
    next: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
    },
    throw: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
    }
  };
  $defineProperties(GeneratorFunctionPrototype.prototype, {
    constructor: {enumerable: false},
    next: {enumerable: false},
    throw: {enumerable: false}
  });
  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
    return this;
  }));
  function createGeneratorInstance(innerFunction, functionObject, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new GeneratorContext();
    var object = $create(functionObject.prototype);
    object[ctxName] = ctx;
    object[moveNextName] = moveNext;
    return object;
  }
  function initGeneratorFunction(functionObject) {
    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
    functionObject.__proto__ = GeneratorFunctionPrototype;
    return functionObject;
  }
  function AsyncFunctionContext() {
    GeneratorContext.call(this);
    this.err = undefined;
    var ctx = this;
    ctx.result = new Promise(function(resolve, reject) {
      ctx.resolve = resolve;
      ctx.reject = reject;
    });
  }
  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
  AsyncFunctionContext.prototype.end = function() {
    switch (this.state) {
      case END_STATE:
        this.resolve(this.returnValue);
        break;
      case RETHROW_STATE:
        this.reject(this.storedException);
        break;
      default:
        this.reject(getInternalError(this.state));
    }
  };
  AsyncFunctionContext.prototype.handleException = function() {
    this.state = RETHROW_STATE;
  };
  function asyncWrap(innerFunction, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new AsyncFunctionContext();
    ctx.createCallback = function(newState) {
      return function(value) {
        ctx.state = newState;
        ctx.value = value;
        moveNext(ctx);
      };
    };
    ctx.errback = function(err) {
      handleCatch(ctx, err);
      moveNext(ctx);
    };
    moveNext(ctx);
    return ctx.result;
  }
  function getMoveNext(innerFunction, self) {
    return function(ctx) {
      while (true) {
        try {
          return innerFunction.call(self, ctx);
        } catch (ex) {
          handleCatch(ctx, ex);
        }
      }
    };
  }
  function handleCatch(ctx, ex) {
    ctx.storedException = ex;
    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
    if (!last) {
      ctx.handleException(ex);
      return;
    }
    ctx.state = last.catch !== undefined ? last.catch : last.finally;
    if (last.finallyFallThrough !== undefined)
      ctx.finallyFallThrough = last.finallyFallThrough;
  }
  $traceurRuntime.asyncWrap = asyncWrap;
  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
})();
(function() {
  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (opt_scheme) {
      out.push(opt_scheme, ':');
    }
    if (opt_domain) {
      out.push('//');
      if (opt_userInfo) {
        out.push(opt_userInfo, '@');
      }
      out.push(opt_domain);
      if (opt_port) {
        out.push(':', opt_port);
      }
    }
    if (opt_path) {
      out.push(opt_path);
    }
    if (opt_queryData) {
      out.push('?', opt_queryData);
    }
    if (opt_fragment) {
      out.push('#', opt_fragment);
    }
    return out.join('');
  }
  ;
  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var ComponentIndex = {
    SCHEME: 1,
    USER_INFO: 2,
    DOMAIN: 3,
    PORT: 4,
    PATH: 5,
    QUERY_DATA: 6,
    FRAGMENT: 7
  };
  function split(uri) {
    return (uri.match(splitRe));
  }
  function removeDotSegments(path) {
    if (path === '/')
      return '/';
    var leadingSlash = path[0] === '/' ? '/' : '';
    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length)
            out.pop();
          else
            up++;
          break;
        default:
          out.push(segment);
      }
    }
    if (!leadingSlash) {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function joinAndCanonicalizePath(parts) {
    var path = parts[ComponentIndex.PATH] || '';
    path = removeDotSegments(path);
    parts[ComponentIndex.PATH] = path;
    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
  }
  function canonicalizeUrl(url) {
    var parts = split(url);
    return joinAndCanonicalizePath(parts);
  }
  function resolveUrl(base, url) {
    var parts = split(url);
    var baseParts = split(base);
    if (parts[ComponentIndex.SCHEME]) {
      return joinAndCanonicalizePath(parts);
    } else {
      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
    }
    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
      if (!parts[i]) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[ComponentIndex.PATH][0] == '/') {
      return joinAndCanonicalizePath(parts);
    }
    var path = baseParts[ComponentIndex.PATH];
    var index = path.lastIndexOf('/');
    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
    parts[ComponentIndex.PATH] = path;
    return joinAndCanonicalizePath(parts);
  }
  function isAbsolute(name) {
    if (!name)
      return false;
    if (name[0] === '/')
      return true;
    var parts = split(name);
    if (parts[ComponentIndex.SCHEME])
      return true;
    return false;
  }
  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
  $traceurRuntime.isAbsolute = isAbsolute;
  $traceurRuntime.removeDotSegments = removeDotSegments;
  $traceurRuntime.resolveUrl = resolveUrl;
})();
(function(global) {
  'use strict';
  var $__2 = $traceurRuntime,
      canonicalizeUrl = $__2.canonicalizeUrl,
      resolveUrl = $__2.resolveUrl,
      isAbsolute = $__2.isAbsolute;
  var moduleInstantiators = Object.create(null);
  var baseURL;
  if (global.location && global.location.href)
    baseURL = resolveUrl(global.location.href, './');
  else
    baseURL = '';
  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
    this.url = url;
    this.value_ = uncoatedModule;
  };
  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
      this.stack = this.stripStack(cause.stack);
    else
      this.stack = '';
  };
  var $ModuleEvaluationError = ModuleEvaluationError;
  ($traceurRuntime.createClass)(ModuleEvaluationError, {
    stripError: function(message) {
      return message.replace(/.*Error:/, this.constructor.name + ':');
    },
    stripCause: function(cause) {
      if (!cause)
        return '';
      if (!cause.message)
        return cause + '';
      return this.stripError(cause.message);
    },
    loadedBy: function(moduleName) {
      this.stack += '\n loaded by ' + moduleName;
    },
    stripStack: function(causeStack) {
      var stack = [];
      causeStack.split('\n').some((function(frame) {
        if (/UncoatedModuleInstantiator/.test(frame))
          return true;
        stack.push(frame);
      }));
      stack[0] = this.stripError(stack[0]);
      return stack.join('\n');
    }
  }, {}, Error);
  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
    $traceurRuntime.superCall(this, $UncoatedModuleInstantiator.prototype, "constructor", [url, null]);
    this.func = func;
  };
  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
      if (this.value_)
        return this.value_;
      try {
        return this.value_ = this.func.call(global);
      } catch (ex) {
        if (ex instanceof ModuleEvaluationError) {
          ex.loadedBy(this.url);
          throw ex;
        }
        throw new ModuleEvaluationError(this.url, ex);
      }
    }}, {}, UncoatedModuleEntry);
  function getUncoatedModuleInstantiator(name) {
    if (!name)
      return;
    var url = ModuleStore.normalize(name);
    return moduleInstantiators[url];
  }
  ;
  var moduleInstances = Object.create(null);
  var liveModuleSentinel = {};
  function Module(uncoatedModule) {
    var isLive = arguments[1];
    var coatedModule = Object.create(null);
    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
      var getter,
          value;
      if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
          getter = descr.get;
      }
      if (!getter) {
        value = uncoatedModule[name];
        getter = function() {
          return value;
        };
      }
      Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
      });
    }));
    Object.preventExtensions(coatedModule);
    return coatedModule;
  }
  var ModuleStore = {
    normalize: function(name, refererName, refererAddress) {
      if (typeof name !== "string")
        throw new TypeError("module name must be a string, not " + typeof name);
      if (isAbsolute(name))
        return canonicalizeUrl(name);
      if (/[^\.]\/\.\.\//.test(name)) {
        throw new Error('module name embeds /../: ' + name);
      }
      if (name[0] === '.' && refererName)
        return resolveUrl(refererName, name);
      return canonicalizeUrl(name);
    },
    get: function(normalizedName) {
      var m = getUncoatedModuleInstantiator(normalizedName);
      if (!m)
        return undefined;
      var moduleInstance = moduleInstances[m.url];
      if (moduleInstance)
        return moduleInstance;
      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
      return moduleInstances[m.url] = moduleInstance;
    },
    set: function(normalizedName, module) {
      normalizedName = String(normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
        return module;
      }));
      moduleInstances[normalizedName] = module;
    },
    get baseURL() {
      return baseURL;
    },
    set baseURL(v) {
      baseURL = String(v);
    },
    registerModule: function(name, func) {
      var normalizedName = ModuleStore.normalize(name);
      if (moduleInstantiators[normalizedName])
        throw new Error('duplicate module named ' + normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
    },
    bundleStore: Object.create(null),
    register: function(name, deps, func) {
      if (!deps || !deps.length && !func.length) {
        this.registerModule(name, func);
      } else {
        this.bundleStore[name] = {
          deps: deps,
          execute: function() {
            var $__0 = arguments;
            var depMap = {};
            deps.forEach((function(dep, index) {
              return depMap[dep] = $__0[index];
            }));
            var registryEntry = func.call(this, depMap);
            registryEntry.execute.call(this);
            return registryEntry.exports;
          }
        };
      }
    },
    getAnonymousModule: function(func) {
      return new Module(func.call(global), liveModuleSentinel);
    },
    getForTesting: function(name) {
      var $__0 = this;
      if (!this.testingPrefix_) {
        Object.keys(moduleInstances).some((function(key) {
          var m = /(traceur@[^\/]*\/)/.exec(key);
          if (m) {
            $__0.testingPrefix_ = m[1];
            return true;
          }
        }));
      }
      return this.get(this.testingPrefix_ + name);
    }
  };
  ModuleStore.set('@traceur/src/runtime/ModuleStore', new Module({ModuleStore: ModuleStore}));
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
  };
  $traceurRuntime.ModuleStore = ModuleStore;
  global.System = {
    register: ModuleStore.register.bind(ModuleStore),
    get: ModuleStore.get,
    set: ModuleStore.set,
    normalize: ModuleStore.normalize
  };
  $traceurRuntime.getModuleImpl = function(name) {
    var instantiator = getUncoatedModuleInstantiator(name);
    return instantiator && instantiator.getUncoatedModule();
  };
})(typeof global !== 'undefined' ? global : this);
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/utils", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/utils";
  var $ceil = Math.ceil;
  var $floor = Math.floor;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var $pow = Math.pow;
  var $min = Math.min;
  var toObject = $traceurRuntime.toObject;
  function toUint32(x) {
    return x >>> 0;
  }
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function isCallable(x) {
    return typeof x === 'function';
  }
  function isNumber(x) {
    return typeof x === 'number';
  }
  function toInteger(x) {
    x = +x;
    if ($isNaN(x))
      return 0;
    if (x === 0 || !$isFinite(x))
      return x;
    return x > 0 ? $floor(x) : $ceil(x);
  }
  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
  function toLength(x) {
    var len = toInteger(x);
    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
  }
  function checkIterable(x) {
    return !isObject(x) ? undefined : x[Symbol.iterator];
  }
  function isConstructor(x) {
    return isCallable(x);
  }
  function createIteratorResultObject(value, done) {
    return {
      value: value,
      done: done
    };
  }
  function maybeDefine(object, name, descr) {
    if (!(name in object)) {
      Object.defineProperty(object, name, descr);
    }
  }
  function maybeDefineMethod(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  function maybeDefineConst(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
  function maybeAddFunctions(object, functions) {
    for (var i = 0; i < functions.length; i += 2) {
      var name = functions[i];
      var value = functions[i + 1];
      maybeDefineMethod(object, name, value);
    }
  }
  function maybeAddConsts(object, consts) {
    for (var i = 0; i < consts.length; i += 2) {
      var name = consts[i];
      var value = consts[i + 1];
      maybeDefineConst(object, name, value);
    }
  }
  function maybeAddIterator(object, func, Symbol) {
    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
      return;
    if (object['@@iterator'])
      func = object['@@iterator'];
    Object.defineProperty(object, Symbol.iterator, {
      value: func,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  var polyfills = [];
  function registerPolyfill(func) {
    polyfills.push(func);
  }
  function polyfillAll(global) {
    polyfills.forEach((function(f) {
      return f(global);
    }));
  }
  return {
    get toObject() {
      return toObject;
    },
    get toUint32() {
      return toUint32;
    },
    get isObject() {
      return isObject;
    },
    get isCallable() {
      return isCallable;
    },
    get isNumber() {
      return isNumber;
    },
    get toInteger() {
      return toInteger;
    },
    get toLength() {
      return toLength;
    },
    get checkIterable() {
      return checkIterable;
    },
    get isConstructor() {
      return isConstructor;
    },
    get createIteratorResultObject() {
      return createIteratorResultObject;
    },
    get maybeDefine() {
      return maybeDefine;
    },
    get maybeDefineMethod() {
      return maybeDefineMethod;
    },
    get maybeDefineConst() {
      return maybeDefineConst;
    },
    get maybeAddFunctions() {
      return maybeAddFunctions;
    },
    get maybeAddConsts() {
      return maybeAddConsts;
    },
    get maybeAddIterator() {
      return maybeAddIterator;
    },
    get registerPolyfill() {
      return registerPolyfill;
    },
    get polyfillAll() {
      return polyfillAll;
    }
  };
});
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Map", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Map";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  var deletedSentinel = {};
  function lookupIndex(map, key) {
    if (isObject(key)) {
      var hashObject = getOwnHashObject(key);
      return hashObject && map.objectIndex_[hashObject.hash];
    }
    if (typeof key === 'string')
      return map.stringIndex_[key];
    return map.primitiveIndex_[key];
  }
  function initMap(map) {
    map.entries_ = [];
    map.objectIndex_ = Object.create(null);
    map.stringIndex_ = Object.create(null);
    map.primitiveIndex_ = Object.create(null);
    map.deletedCount_ = 0;
  }
  var Map = function Map() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Map called on incompatible type');
    if ($hasOwnProperty.call(this, 'entries_')) {
      throw new TypeError('Map can not be reentrantly initialised');
    }
    initMap(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__2 = iterable[Symbol.iterator](),
          $__3; !($__3 = $__2.next()).done; ) {
        var $__4 = $__3.value,
            key = $__4[0],
            value = $__4[1];
        {
          this.set(key, value);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Map, {
    get size() {
      return this.entries_.length / 2 - this.deletedCount_;
    },
    get: function(key) {
      var index = lookupIndex(this, key);
      if (index !== undefined)
        return this.entries_[index + 1];
    },
    set: function(key, value) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index = lookupIndex(this, key);
      if (index !== undefined) {
        this.entries_[index + 1] = value;
      } else {
        index = this.entries_.length;
        this.entries_[index] = key;
        this.entries_[index + 1] = value;
        if (objectMode) {
          var hashObject = getOwnHashObject(key);
          var hash = hashObject.hash;
          this.objectIndex_[hash] = index;
        } else if (stringMode) {
          this.stringIndex_[key] = index;
        } else {
          this.primitiveIndex_[key] = index;
        }
      }
      return this;
    },
    has: function(key) {
      return lookupIndex(this, key) !== undefined;
    },
    delete: function(key) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index;
      var hash;
      if (objectMode) {
        var hashObject = getOwnHashObject(key);
        if (hashObject) {
          index = this.objectIndex_[hash = hashObject.hash];
          delete this.objectIndex_[hash];
        }
      } else if (stringMode) {
        index = this.stringIndex_[key];
        delete this.stringIndex_[key];
      } else {
        index = this.primitiveIndex_[key];
        delete this.primitiveIndex_[key];
      }
      if (index !== undefined) {
        this.entries_[index] = deletedSentinel;
        this.entries_[index + 1] = undefined;
        this.deletedCount_++;
        return true;
      }
      return false;
    },
    clear: function() {
      initMap(this);
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      for (var i = 0; i < this.entries_.length; i += 2) {
        var key = this.entries_[i];
        var value = this.entries_[i + 1];
        if (key === deletedSentinel)
          continue;
        callbackFn.call(thisArg, value, key, this);
      }
    },
    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return [key, value];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    }),
    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return key;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    }),
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return value;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })
  }, {});
  Object.defineProperty(Map.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Map.prototype.entries
  });
  function polyfillMap(global) {
    var $__4 = global,
        Object = $__4.Object,
        Symbol = $__4.Symbol;
    if (!global.Map)
      global.Map = Map;
    var mapPrototype = global.Map.prototype;
    if (mapPrototype.entries === undefined)
      global.Map = Map;
    if (mapPrototype.entries) {
      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillMap);
  return {
    get Map() {
      return Map;
    },
    get polyfillMap() {
      return polyfillMap;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Map" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Set", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Set";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var Map = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Map").Map;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function initSet(set) {
    set.map_ = new Map();
  }
  var Set = function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__4 = iterable[Symbol.iterator](),
          $__5; !($__5 = $__4.next()).done; ) {
        var item = $__5.value;
        {
          this.add(item);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach((function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      }));
    },
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = this.map_.keys()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
      var $__11,
          $__12;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__11 = this.map_.entries()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__12.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__12.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__12.value;
            default:
              return $ctx.end();
          }
      }, $__10, this);
    })
  }, {});
  Object.defineProperty(Set.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  Object.defineProperty(Set.prototype, 'keys', {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  function polyfillSet(global) {
    var $__6 = global,
        Object = $__6.Object,
        Symbol = $__6.Symbol;
    if (!global.Set)
      global.Set = Set;
    var setPrototype = global.Set.prototype;
    if (setPrototype.values) {
      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillSet);
  return {
    get Set() {
      return Set;
    },
    get polyfillSet() {
      return polyfillSet;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Set" + '');
System.register("traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap";
  var len = 0;
  function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      scheduleFlush();
    }
  }
  var $__default = asap;
  var browserGlobal = (typeof window !== 'undefined') ? window : {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
  function useNextTick() {
    return function() {
      process.nextTick(flush);
    };
  }
  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {characterData: true});
    return function() {
      node.data = (iterations = ++iterations % 2);
    };
  }
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function useSetTimeout() {
    return function() {
      setTimeout(flush, 1);
    };
  }
  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }
    len = 0;
  }
  var scheduleFlush;
  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else {
    scheduleFlush = useSetTimeout();
  }
  return {get default() {
      return $__default;
    }};
});
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Promise", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Promise";
  var async = System.get("traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap").default;
  var registerPolyfill = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils").registerPolyfill;
  var promiseRaw = {};
  function isPromise(x) {
    return x && typeof x === 'object' && x.status_ !== undefined;
  }
  function idResolveHandler(x) {
    return x;
  }
  function idRejectHandler(x) {
    throw x;
  }
  function chain(promise) {
    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
    var deferred = getDeferred(promise.constructor);
    switch (promise.status_) {
      case undefined:
        throw TypeError;
      case 0:
        promise.onResolve_.push(onResolve, deferred);
        promise.onReject_.push(onReject, deferred);
        break;
      case +1:
        promiseEnqueue(promise.value_, [onResolve, deferred]);
        break;
      case -1:
        promiseEnqueue(promise.value_, [onReject, deferred]);
        break;
    }
    return deferred.promise;
  }
  function getDeferred(C) {
    if (this === $Promise) {
      var promise = promiseInit(new $Promise(promiseRaw));
      return {
        promise: promise,
        resolve: (function(x) {
          promiseResolve(promise, x);
        }),
        reject: (function(r) {
          promiseReject(promise, r);
        })
      };
    } else {
      var result = {};
      result.promise = new C((function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      }));
      return result;
    }
  }
  function promiseSet(promise, status, value, onResolve, onReject) {
    promise.status_ = status;
    promise.value_ = value;
    promise.onResolve_ = onResolve;
    promise.onReject_ = onReject;
    return promise;
  }
  function promiseInit(promise) {
    return promiseSet(promise, 0, undefined, [], []);
  }
  var Promise = function Promise(resolver) {
    if (resolver === promiseRaw)
      return;
    if (typeof resolver !== 'function')
      throw new TypeError;
    var promise = promiseInit(this);
    try {
      resolver((function(x) {
        promiseResolve(promise, x);
      }), (function(r) {
        promiseReject(promise, r);
      }));
    } catch (e) {
      promiseReject(promise, e);
    }
  };
  ($traceurRuntime.createClass)(Promise, {
    catch: function(onReject) {
      return this.then(undefined, onReject);
    },
    then: function(onResolve, onReject) {
      if (typeof onResolve !== 'function')
        onResolve = idResolveHandler;
      if (typeof onReject !== 'function')
        onReject = idRejectHandler;
      var that = this;
      var constructor = this.constructor;
      return chain(this, function(x) {
        x = promiseCoerce(constructor, x);
        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
      }, onReject);
    }
  }, {
    resolve: function(x) {
      if (this === $Promise) {
        if (isPromise(x)) {
          return x;
        }
        return promiseSet(new $Promise(promiseRaw), +1, x);
      } else {
        return new this(function(resolve, reject) {
          resolve(x);
        });
      }
    },
    reject: function(r) {
      if (this === $Promise) {
        return promiseSet(new $Promise(promiseRaw), -1, r);
      } else {
        return new this((function(resolve, reject) {
          reject(r);
        }));
      }
    },
    all: function(values) {
      var deferred = getDeferred(this);
      var resolutions = [];
      try {
        var count = values.length;
        if (count === 0) {
          deferred.resolve(resolutions);
        } else {
          for (var i = 0; i < values.length; i++) {
            this.resolve(values[i]).then(function(i, x) {
              resolutions[i] = x;
              if (--count === 0)
                deferred.resolve(resolutions);
            }.bind(undefined, i), (function(r) {
              deferred.reject(r);
            }));
          }
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    },
    race: function(values) {
      var deferred = getDeferred(this);
      try {
        for (var i = 0; i < values.length; i++) {
          this.resolve(values[i]).then((function(x) {
            deferred.resolve(x);
          }), (function(r) {
            deferred.reject(r);
          }));
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }
  });
  var $Promise = Promise;
  var $PromiseReject = $Promise.reject;
  function promiseResolve(promise, x) {
    promiseDone(promise, +1, x, promise.onResolve_);
  }
  function promiseReject(promise, r) {
    promiseDone(promise, -1, r, promise.onReject_);
  }
  function promiseDone(promise, status, value, reactions) {
    if (promise.status_ !== 0)
      return;
    promiseEnqueue(value, reactions);
    promiseSet(promise, status, value);
  }
  function promiseEnqueue(value, tasks) {
    async((function() {
      for (var i = 0; i < tasks.length; i += 2) {
        promiseHandle(value, tasks[i], tasks[i + 1]);
      }
    }));
  }
  function promiseHandle(value, handler, deferred) {
    try {
      var result = handler(value);
      if (result === deferred.promise)
        throw new TypeError;
      else if (isPromise(result))
        chain(result, deferred.resolve, deferred.reject);
      else
        deferred.resolve(result);
    } catch (e) {
      try {
        deferred.reject(e);
      } catch (e) {}
    }
  }
  var thenableSymbol = '@@thenable';
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function promiseCoerce(constructor, x) {
    if (!isPromise(x) && isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (r) {
        var promise = $PromiseReject.call(constructor, r);
        x[thenableSymbol] = promise;
        return promise;
      }
      if (typeof then === 'function') {
        var p = x[thenableSymbol];
        if (p) {
          return p;
        } else {
          var deferred = getDeferred(constructor);
          x[thenableSymbol] = deferred.promise;
          try {
            then.call(x, deferred.resolve, deferred.reject);
          } catch (r) {
            deferred.reject(r);
          }
          return deferred.promise;
        }
      }
    }
    return x;
  }
  function polyfillPromise(global) {
    if (!global.Promise)
      global.Promise = Promise;
  }
  registerPolyfill(polyfillPromise);
  return {
    get Promise() {
      return Promise;
    },
    get polyfillPromise() {
      return polyfillPromise;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Promise" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      createIteratorResultObject = $__0.createIteratorResultObject,
      isObject = $__0.isObject;
  var toProperty = $traceurRuntime.toProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var iteratedString = Symbol('iteratedString');
  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
  var StringIterator = function StringIterator() {};
  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[toProperty(iteratedString)];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[toProperty(stringIteratorNextIndex)];
      var len = s.length;
      if (position >= len) {
        o[toProperty(iteratedString)] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createStringIterator(string) {
    var s = String(string);
    var iterator = Object.create(StringIterator.prototype);
    iterator[toProperty(iteratedString)] = s;
    iterator[toProperty(stringIteratorNextIndex)] = 0;
    return iterator;
  }
  return {get createStringIterator() {
      return createStringIterator;
    }};
});
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/String", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/String";
  var createStringIterator = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator").createStringIterator;
  var $__1 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill;
  var $toString = Object.prototype.toString;
  var $indexOf = String.prototype.indexOf;
  var $lastIndexOf = String.prototype.lastIndexOf;
  function startsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) == start;
  }
  function endsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var pos = stringLength;
    if (arguments.length > 1) {
      var position = arguments[1];
      if (position !== undefined) {
        pos = position ? Number(position) : 0;
        if (isNaN(pos)) {
          pos = 0;
        }
      }
    }
    var end = Math.min(Math.max(pos, 0), stringLength);
    var start = end - searchLength;
    if (start < 0) {
      return false;
    }
    return $lastIndexOf.call(string, searchString, start) == start;
  }
  function contains(search) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) != -1;
  }
  function repeat(count) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var n = count ? Number(count) : 0;
    if (isNaN(n)) {
      n = 0;
    }
    if (n < 0 || n == Infinity) {
      throw RangeError();
    }
    if (n == 0) {
      return '';
    }
    var result = '';
    while (n--) {
      result += string;
    }
    return result;
  }
  function codePointAt(position) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (isNaN(index)) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }
  function raw(callsite) {
    var raw = callsite.raw;
    var len = raw.length >>> 0;
    if (len === 0)
      return '';
    var s = '';
    var i = 0;
    while (true) {
      s += raw[i];
      if (i + 1 === len)
        return s;
      s += arguments[++i];
    }
  }
  function fromCodePoint() {
    var codeUnits = [];
    var floor = Math.floor;
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
    }
    return String.fromCharCode.apply(null, codeUnits);
  }
  function stringPrototypeIterator() {
    var o = $traceurRuntime.checkObjectCoercible(this);
    var s = String(o);
    return createStringIterator(s);
  }
  function polyfillString(global) {
    var String = global.String;
    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'contains', contains, 'endsWith', endsWith, 'startsWith', startsWith, 'repeat', repeat]);
    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
  }
  registerPolyfill(polyfillString);
  return {
    get startsWith() {
      return startsWith;
    },
    get endsWith() {
      return endsWith;
    },
    get contains() {
      return contains;
    },
    get repeat() {
      return repeat;
    },
    get codePointAt() {
      return codePointAt;
    },
    get raw() {
      return raw;
    },
    get fromCodePoint() {
      return fromCodePoint;
    },
    get stringPrototypeIterator() {
      return stringPrototypeIterator;
    },
    get polyfillString() {
      return polyfillString;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/String" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      toObject = $__0.toObject,
      toUint32 = $__0.toUint32,
      createIteratorResultObject = $__0.createIteratorResultObject;
  var ARRAY_ITERATOR_KIND_KEYS = 1;
  var ARRAY_ITERATOR_KIND_VALUES = 2;
  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
  var ArrayIterator = function ArrayIterator() {};
  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var iterator = toObject(this);
      var array = iterator.iteratorObject_;
      if (!array) {
        throw new TypeError('Object is not an ArrayIterator');
      }
      var index = iterator.arrayIteratorNextIndex_;
      var itemKind = iterator.arrayIterationKind_;
      var length = toUint32(array.length);
      if (index >= length) {
        iterator.arrayIteratorNextIndex_ = Infinity;
        return createIteratorResultObject(undefined, true);
      }
      iterator.arrayIteratorNextIndex_ = index + 1;
      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
        return createIteratorResultObject(array[index], false);
      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
        return createIteratorResultObject([index, array[index]], false);
      return createIteratorResultObject(index, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createArrayIterator(array, kind) {
    var object = toObject(array);
    var iterator = new ArrayIterator;
    iterator.iteratorObject_ = object;
    iterator.arrayIteratorNextIndex_ = 0;
    iterator.arrayIterationKind_ = kind;
    return iterator;
  }
  function entries() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
  }
  function keys() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
  }
  function values() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
  }
  return {
    get entries() {
      return entries;
    },
    get keys() {
      return keys;
    },
    get values() {
      return values;
    }
  };
});
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Array", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Array";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator"),
      entries = $__0.entries,
      keys = $__0.keys,
      values = $__0.values;
  var $__1 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      checkIterable = $__1.checkIterable,
      isCallable = $__1.isCallable,
      isConstructor = $__1.isConstructor,
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill,
      toInteger = $__1.toInteger,
      toLength = $__1.toLength,
      toObject = $__1.toObject;
  function from(arrLike) {
    var mapFn = arguments[1];
    var thisArg = arguments[2];
    var C = this;
    var items = toObject(arrLike);
    var mapping = mapFn !== undefined;
    var k = 0;
    var arr,
        len;
    if (mapping && !isCallable(mapFn)) {
      throw TypeError();
    }
    if (checkIterable(items)) {
      arr = isConstructor(C) ? new C() : [];
      for (var $__2 = items[Symbol.iterator](),
          $__3; !($__3 = $__2.next()).done; ) {
        var item = $__3.value;
        {
          if (mapping) {
            arr[k] = mapFn.call(thisArg, item, k);
          } else {
            arr[k] = item;
          }
          k++;
        }
      }
      arr.length = k;
      return arr;
    }
    len = toLength(items.length);
    arr = isConstructor(C) ? new C(len) : new Array(len);
    for (; k < len; k++) {
      if (mapping) {
        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
      } else {
        arr[k] = items[k];
      }
    }
    arr.length = len;
    return arr;
  }
  function of() {
    for (var items = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      items[$__4] = arguments[$__4];
    var C = this;
    var len = items.length;
    var arr = isConstructor(C) ? new C(len) : new Array(len);
    for (var k = 0; k < len; k++) {
      arr[k] = items[k];
    }
    arr.length = len;
    return arr;
  }
  function fill(value) {
    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
    var end = arguments[2];
    var object = toObject(this);
    var len = toLength(object.length);
    var fillStart = toInteger(start);
    var fillEnd = end !== undefined ? toInteger(end) : len;
    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
    while (fillStart < fillEnd) {
      object[fillStart] = value;
      fillStart++;
    }
    return object;
  }
  function find(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg);
  }
  function findIndex(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg, true);
  }
  function findHelper(self, predicate) {
    var thisArg = arguments[2];
    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
    var object = toObject(self);
    var len = toLength(object.length);
    if (!isCallable(predicate)) {
      throw TypeError();
    }
    for (var i = 0; i < len; i++) {
      var value = object[i];
      if (predicate.call(thisArg, value, i, object)) {
        return returnIndex ? i : value;
      }
    }
    return returnIndex ? -1 : undefined;
  }
  function polyfillArray(global) {
    var $__5 = global,
        Array = $__5.Array,
        Object = $__5.Object,
        Symbol = $__5.Symbol;
    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
    maybeAddFunctions(Array, ['from', from, 'of', of]);
    maybeAddIterator(Array.prototype, values, Symbol);
    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
      return this;
    }, Symbol);
  }
  registerPolyfill(polyfillArray);
  return {
    get from() {
      return from;
    },
    get of() {
      return of;
    },
    get fill() {
      return fill;
    },
    get find() {
      return find;
    },
    get findIndex() {
      return findIndex;
    },
    get polyfillArray() {
      return polyfillArray;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Array" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Object", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Object";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill;
  var $__1 = $traceurRuntime,
      defineProperty = $__1.defineProperty,
      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
      getOwnPropertyNames = $__1.getOwnPropertyNames,
      isPrivateName = $__1.isPrivateName,
      keys = $__1.keys;
  function is(left, right) {
    if (left === right)
      return left !== 0 || 1 / left === 1 / right;
    return left !== left && right !== right;
  }
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      var props = keys(source);
      var p,
          length = props.length;
      for (p = 0; p < length; p++) {
        var name = props[p];
        if (isPrivateName(name))
          continue;
        target[name] = source[name];
      }
    }
    return target;
  }
  function mixin(target, source) {
    var props = getOwnPropertyNames(source);
    var p,
        descriptor,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      descriptor = getOwnPropertyDescriptor(source, props[p]);
      defineProperty(target, props[p], descriptor);
    }
    return target;
  }
  function polyfillObject(global) {
    var Object = global.Object;
    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
  }
  registerPolyfill(polyfillObject);
  return {
    get is() {
      return is;
    },
    get assign() {
      return assign;
    },
    get mixin() {
      return mixin;
    },
    get polyfillObject() {
      return polyfillObject;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Object" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Number", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Number";
  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
      isNumber = $__0.isNumber,
      maybeAddConsts = $__0.maybeAddConsts,
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill,
      toInteger = $__0.toInteger;
  var $abs = Math.abs;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
  var EPSILON = Math.pow(2, -52);
  function NumberIsFinite(number) {
    return isNumber(number) && $isFinite(number);
  }
  ;
  function isInteger(number) {
    return NumberIsFinite(number) && toInteger(number) === number;
  }
  function NumberIsNaN(number) {
    return isNumber(number) && $isNaN(number);
  }
  ;
  function isSafeInteger(number) {
    if (NumberIsFinite(number)) {
      var integral = toInteger(number);
      if (integral === number)
        return $abs(integral) <= MAX_SAFE_INTEGER;
    }
    return false;
  }
  function polyfillNumber(global) {
    var Number = global.Number;
    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
  }
  registerPolyfill(polyfillNumber);
  return {
    get MAX_SAFE_INTEGER() {
      return MAX_SAFE_INTEGER;
    },
    get MIN_SAFE_INTEGER() {
      return MIN_SAFE_INTEGER;
    },
    get EPSILON() {
      return EPSILON;
    },
    get isFinite() {
      return NumberIsFinite;
    },
    get isInteger() {
      return isInteger;
    },
    get isNaN() {
      return NumberIsNaN;
    },
    get isSafeInteger() {
      return isSafeInteger;
    },
    get polyfillNumber() {
      return polyfillNumber;
    }
  };
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Number" + '');
System.register("traceur-runtime@0.0.72/src/runtime/polyfills/polyfills", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/polyfills";
  var polyfillAll = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils").polyfillAll;
  polyfillAll(this);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
    polyfillAll(global);
  };
  return {};
});
System.get("traceur-runtime@0.0.72/src/runtime/polyfills/polyfills" + '');

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":2}],2:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],3:[function(require,module,exports){
"use strict";
function universalModule() {
  var $Object = Object;
  function createClass(ctor, methods, staticMethods, superClass) {
    var proto;
    if (superClass) {
      var superProto = superClass.prototype;
      proto = $Object.create(superProto);
    } else {
      proto = ctor.prototype;
    }
    $Object.keys(methods).forEach(function(key) {
      proto[key] = methods[key];
    });
    $Object.keys(staticMethods).forEach(function(key) {
      ctor[key] = staticMethods[key];
    });
    proto.constructor = ctor;
    ctor.prototype = proto;
    return ctor;
  }
  function superCall(self, proto, name, args) {
    return $Object.getPrototypeOf(proto)[name].apply(self, args);
  }
  function defaultSuperCall(self, proto, args) {
    superCall(self, proto, 'constructor', args);
  }
  var $traceurRuntime = {};
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  "use strict";
  var DELETE = 'delete';
  var SHIFT = 5;
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;
  var NOT_SET = {};
  var CHANGE_LENGTH = {value: false};
  var DID_ALTER = {value: false};
  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }
  function SetRef(ref) {
    ref && (ref.value = true);
  }
  function OwnerID() {}
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }
  function invariant(condition, error) {
    if (!condition)
      throw new Error(error);
  }
  function hash(o) {
    if (!o) {
      return 0;
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if ((o | 0) === o) {
        return o & HASH_MAX_VAL;
      }
      o = '' + o;
      type = 'string';
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (o.hashCode) {
      return hash(typeof o.hashCode === 'function' ? o.hashCode() : o.hashCode);
    }
    return hashJSObj(o);
  }
  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash == null) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }
  function hashString(string) {
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = (31 * hash + string.charCodeAt(ii)) & HASH_MAX_VAL;
    }
    return hash;
  }
  function hashJSObj(obj) {
    var hash = obj[UID_HASH_KEY];
    if (hash)
      return hash;
    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash)
        return hash;
      hash = getIENodeHash(obj);
      if (hash)
        return hash;
    }
    if (!canDefineProperty || Object.isExtensible(obj)) {
      hash = ++objHashUID & HASH_MAX_VAL;
      if (canDefineProperty) {
        Object.defineProperty(obj, UID_HASH_KEY, {
          'enumerable': false,
          'configurable': false,
          'writable': false,
          'value': hash
        });
      } else if (propertyIsEnumerable && obj.propertyIsEnumerable === propertyIsEnumerable) {
        obj.propertyIsEnumerable = function() {
          return propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
      } else if (obj.nodeType) {
        obj[UID_HASH_KEY] = hash;
      } else {
        throw new Error('Unable to set a non-enumerable property on object.');
      }
      return hash;
    } else {
      throw new Error('Non-extensible objects are not allowed as keys.');
    }
  }
  var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (e) {
      return false;
    }
  }());
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          return node.uniqueID;
        case 9:
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }
  var HASH_MAX_VAL = 0x7FFFFFFF;
  var objHashUID = 0;
  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol !== 'undefined') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }
  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};
  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  var ITERATOR_SYMBOL = typeof Symbol !== 'undefined' ? Symbol.iterator : FAUX_ITERATOR_SYMBOL;
  var Iterator = function Iterator(next) {
    this.next = next;
  };
  ($traceurRuntime.createClass)(Iterator, {toString: function() {
      return '[Iterator]';
    }}, {});
  var IteratorPrototype = Iterator.prototype;
  IteratorPrototype.inspect = IteratorPrototype.toSource = function() {
    return this.toString();
  };
  IteratorPrototype[ITERATOR_SYMBOL] = function() {
    return this;
  };
  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value,
      done: false
    });
    return iteratorResult;
  }
  function iteratorDone() {
    return {
      value: undefined,
      done: true
    };
  }
  function isIterable(maybeIterable) {
    return !!_iteratorFn(maybeIterable);
  }
  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }
  function getIterator(iterable) {
    var iteratorFn = _iteratorFn(iterable);
    if (typeof iteratorFn === 'function') {
      return iteratorFn.call(iterable);
    }
  }
  function _iteratorFn(iterable) {
    return iterable && (iterable[ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
  }
  var Sequence = function Sequence(value) {
    return $Sequence.from(arguments.length === 1 ? value : Array.prototype.slice.call(arguments));
  };
  var $Sequence = Sequence;
  ($traceurRuntime.createClass)(Sequence, {
    toArray: function() {
      assertNotInfinite(this.length);
      var array = new Array(this.length || 0);
      this.valueSeq().__iterate((function(v, i) {
        array[i] = v;
      }));
      return array;
    },
    toJS: function() {
      return this.map((function(value) {
        return value instanceof $Sequence ? value.toJS() : value;
      })).__toJS();
    },
    toMap: function() {
      assertNotInfinite(this.length);
      return Map.from(this);
    },
    toObject: function() {
      assertNotInfinite(this.length);
      var object = {};
      this.__iterate((function(v, k) {
        object[k] = v;
      }));
      return object;
    },
    toOrderedMap: function() {
      assertNotInfinite(this.length);
      return OrderedMap.from(this);
    },
    toSet: function() {
      assertNotInfinite(this.length);
      return Set.from(this);
    },
    toVector: function() {
      assertNotInfinite(this.length);
      return Vector.from(this);
    },
    toString: function() {
      return this.__toString('Seq {', '}');
    },
    __toString: function(head, tail) {
      if (this.length === 0) {
        return head + tail;
      }
      return head + ' ' + this.map(this.__toStringMapper).join(', ') + ' ' + tail;
    },
    __toStringMapper: function(v, k) {
      return k + ': ' + quoteString(v);
    },
    concat: function() {
      for (var values = [],
          $__2 = 0; $__2 < arguments.length; $__2++)
        values[$__2] = arguments[$__2];
      return concatFactory(this, values, true);
    },
    contains: function(searchValue) {
      return this.find((function(value) {
        return is(value, searchValue);
      }), null, NOT_SET) !== NOT_SET;
    },
    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function(predicate, context) {
      var returnValue = true;
      this.__iterate((function(v, k, c) {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      }));
      return returnValue;
    },
    filter: function(predicate, context) {
      return filterFactory(this, predicate, context, true);
    },
    find: function(predicate, context, notSetValue) {
      var foundValue = notSetValue;
      this.__iterate((function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          foundValue = v;
          return false;
        }
      }));
      return foundValue;
    },
    forEach: function(sideEffect, context) {
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function(separator) {
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate((function(v) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v != null ? v : '';
      }));
      return joined;
    },
    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function(mapper, context) {
      return mapFactory(this, mapper, context);
    },
    reduce: function(reducer, initialReduction, context) {
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate((function(v, k, c) {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      }));
      return reduction;
    },
    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },
    reverse: function() {
      return reverseFactory(this);
    },
    slice: function(begin, end) {
      if (wholeSlice(begin, end, this.length)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.length);
      var resolvedEnd = resolveEnd(end, this.length);
      if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
        return this.cacheResult().slice(begin, end);
      }
      var skipped = resolvedBegin === 0 ? this : this.skip(resolvedBegin);
      return resolvedEnd == null || resolvedEnd === this.length ? skipped : skipped.take(resolvedEnd - resolvedBegin);
    },
    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },
    sort: function(comparator) {
      return this.sortBy(valueMapper, comparator);
    },
    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },
    butLast: function() {
      return this.slice(0, -1);
    },
    count: function(predicate, context) {
      if (!predicate) {
        if (this.length == null) {
          this.length = this.__iterate(returnTrue);
        }
        return this.length;
      }
      return this.filter(predicate, context).count();
    },
    countBy: function(grouper, context) {
      var $__0 = this;
      var groupMap = {};
      var groups = [];
      this.__iterate((function(v, k) {
        var g = grouper.call(context, v, k, $__0);
        var h = hash(g);
        if (!groupMap.hasOwnProperty(h)) {
          groupMap[h] = groups.length;
          groups.push([g, 1]);
        } else {
          groups[groupMap[h]][1]++;
        }
      }));
      return $Sequence(groups).fromEntrySeq();
    },
    equals: function(other) {
      if (this === other) {
        return true;
      }
      if (!(other instanceof $Sequence)) {
        return false;
      }
      if (this.length != null && other.length != null) {
        if (this.length !== other.length) {
          return false;
        }
        if (this.length === 0 && other.length === 0) {
          return true;
        }
      }
      if (this.__hash != null && other.__hash != null && this.__hash !== other.__hash) {
        return false;
      }
      return this.__deepEquals(other);
    },
    __deepEquals: function(other) {
      var entries = this.entries();
      return other.every((function(v, k) {
        var entry = entries.next().value;
        return entry && is(entry[0], k) && is(entry[1], v);
      })) && entries.next().done;
    },
    entrySeq: function() {
      var sequence = this;
      if (sequence._cache) {
        return $Sequence(sequence._cache);
      }
      var entriesSequence = sequence.toKeyedSeq().map(entryMapper).valueSeq();
      entriesSequence.fromEntries = (function() {
        return sequence;
      });
      return entriesSequence;
    },
    findKey: function(predicate, context) {
      var foundKey;
      this.__iterate((function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          foundKey = k;
          return false;
        }
      }));
      return foundKey;
    },
    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function() {
      return this.find(returnTrue);
    },
    flatMap: function(mapper, context) {
      return this.map(mapper, context).flatten();
    },
    flatten: function() {
      return flattenFactory(this, true);
    },
    flip: function() {
      return flipFactory(this);
    },
    get: function(searchKey, notSetValue) {
      return this.find((function(_, key) {
        return is(key, searchKey);
      }), null, notSetValue);
    },
    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      if (searchKeyPath) {
        for (var ii = 0; ii < searchKeyPath.length; ii++) {
          nested = nested && nested.get ? nested.get(searchKeyPath[ii], NOT_SET) : NOT_SET;
          if (nested === NOT_SET) {
            return notSetValue;
          }
        }
      }
      return nested;
    },
    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context, true);
    },
    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    keySeq: function() {
      return this.flip().valueSeq();
    },
    last: function() {
      return this.findLast(returnTrue);
    },
    mapEntries: function(mapper, context) {
      var $__0 = this;
      return this.entrySeq().map((function(entry, index) {
        return mapper.call(context, entry, index, $__0);
      })).fromEntrySeq();
    },
    mapKeys: function(mapper, context) {
      var $__0 = this;
      return this.flip().map((function(k, v) {
        return mapper.call(context, k, v, $__0);
      })).flip();
    },
    rest: function() {
      return this.slice(1);
    },
    skip: function(amount) {
      return skipFactory(this, amount, true);
    },
    skipLast: function(amount) {
      return this.reverse().skip(amount).reverse();
    },
    skipWhile: function(predicate, context) {
      return skipWhileFactory(this, predicate, context, true);
    },
    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function(mapper, comparator) {
      comparator = comparator || defaultComparator;
      var seq = this;
      return $Sequence(this.entrySeq().entrySeq().toArray().sort((function(a, b) {
        return comparator(mapper(a[1][1], a[1][0], seq), mapper(b[1][1], b[1][0], seq)) || a[0] - b[0];
      }))).fromEntrySeq().valueSeq().fromEntrySeq();
    },
    take: function(amount) {
      return takeFactory(this, amount);
    },
    takeLast: function(amount) {
      return this.reverse().take(amount).reverse();
    },
    takeWhile: function(predicate, context) {
      return takeWhileFactory(this, predicate, context);
    },
    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    toKeyedSeq: function() {
      return this;
    },
    valueSeq: function() {
      return new ValuesSequence(this);
    },
    cacheResult: function() {
      if (!this._cache && this.__iterateUncached) {
        assertNotInfinite(this.length);
        this._cache = this.entrySeq().toArray();
        if (this.length == null) {
          this.length = this._cache.length;
        }
      }
      return this;
    },
    hashCode: function() {
      return this.__hash || (this.__hash = this.length === Infinity ? 0 : this.reduce((function(h, v, k) {
        return (h + (hash(v) ^ (v === k ? 0 : hash(k)))) & HASH_MAX_VAL;
      }), 0));
    },
    __makeSequence: function() {
      return Object.create(SequencePrototype);
    },
    __iterate: function(fn, reverse) {
      return iterate(this, fn, reverse, true);
    },
    __iterator: function(type, reverse) {
      return iterator(this, type, reverse, true);
    }
  }, {from: function(value) {
      if (value instanceof $Sequence) {
        return value;
      }
      if (!Array.isArray(value)) {
        if (isIterator(value)) {
          return new IteratorSequence(value);
        }
        if (isIterable(value)) {
          return new IterableSequence(value);
        }
        if (value && value.constructor === Object) {
          return new ObjectSequence(value);
        }
        value = [value];
      }
      return new ArraySequence(value);
    }});
  var SequencePrototype = Sequence.prototype;
  SequencePrototype[ITERATOR_SYMBOL] = SequencePrototype.entries;
  SequencePrototype.toJSON = SequencePrototype.toJS;
  SequencePrototype.__toJS = SequencePrototype.toObject;
  SequencePrototype.inspect = SequencePrototype.toSource = function() {
    return this.toString();
  };
  SequencePrototype.chain = SequencePrototype.flatMap;
  var IndexedSequence = function IndexedSequence() {
    $traceurRuntime.defaultSuperCall(this, $IndexedSequence.prototype, arguments);
  };
  var $IndexedSequence = IndexedSequence;
  ($traceurRuntime.createClass)(IndexedSequence, {
    toString: function() {
      return this.__toString('Seq [', ']');
    },
    concat: function() {
      for (var values = [],
          $__3 = 0; $__3 < arguments.length; $__3++)
        values[$__3] = arguments[$__3];
      return concatFactory(this, values, false);
    },
    filter: function(predicate, context) {
      return filterFactory(this, predicate, context, false);
    },
    findIndex: function(predicate, context) {
      var key = this.findKey(predicate, context);
      return key == null ? -1 : key;
    },
    indexOf: function(searchValue) {
      return this.findIndex((function(value) {
        return is(value, searchValue);
      }));
    },
    lastIndexOf: function(searchValue) {
      return this.toKeyedSeq().reverse().indexOf(searchValue);
    },
    splice: function(index, removeNum) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      index = resolveBegin(index, this.length);
      var spliced = this.slice(0, index);
      return numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum));
    },
    findLastIndex: function(predicate, context) {
      return this.toKeyedSeq().reverse().findIndex(predicate, context);
    },
    first: function() {
      return this.get(0);
    },
    flatten: function() {
      return flattenFactory(this, false);
    },
    flip: function() {
      return flipFactory(this.toKeyedSeq());
    },
    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },
    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.length === Infinity || (this.length != null && index > this.length))) ? notSetValue : this.find((function(_, key) {
        return key === index;
      }), null, notSetValue);
    },
    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context, false);
    },
    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.length != null ? this.length === Infinity || index < this.length : this.indexOf(index) !== -1);
    },
    interpose: function(separator) {
      return interposeFactory(this, separator);
    },
    last: function() {
      return this.get(this.length ? this.length - 1 : 0);
    },
    skip: function(amount) {
      var seq = this;
      var skipSeq = skipFactory(seq, amount, false);
      if (skipSeq !== seq) {
        skipSeq.get = function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index >= 0 ? seq.get(index + amount, notSetValue) : notSetValue;
        };
      }
      return skipSeq;
    },
    skipWhile: function(predicate, context) {
      return skipWhileFactory(this, predicate, context, false);
    },
    sortBy: function(mapper, comparator) {
      comparator = comparator || defaultComparator;
      var seq = this;
      return Sequence(this.entrySeq().toArray().sort((function(a, b) {
        return comparator(mapper(a[1], a[0], seq), mapper(b[1], b[0], seq)) || a[0] - b[0];
      }))).fromEntrySeq().valueSeq();
    },
    take: function(amount) {
      var seq = this;
      var takeSeq = takeFactory(seq, amount);
      if (takeSeq !== seq) {
        takeSeq.get = function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index >= 0 && index < amount ? seq.get(index, notSetValue) : notSetValue;
        };
      }
      return takeSeq;
    },
    toKeyedSeq: function() {
      return new KeyedIndexedSequence(this);
    },
    valueSeq: function() {
      return this;
    },
    __makeSequence: function() {
      return Object.create(IndexedSequencePrototype);
    },
    __iterate: function(fn, reverse) {
      return iterate(this, fn, reverse, false);
    },
    __iterator: function(type, reverse) {
      return iterator(this, type, reverse, false);
    }
  }, {}, Sequence);
  var IndexedSequencePrototype = IndexedSequence.prototype;
  IndexedSequencePrototype[ITERATOR_SYMBOL] = IndexedSequencePrototype.values;
  IndexedSequencePrototype.__toJS = IndexedSequencePrototype.toArray;
  IndexedSequencePrototype.__toStringMapper = quoteString;
  var IteratorSequence = function IteratorSequence(iterator) {
    this._iterator = iterator;
    this._iteratorCache = [];
  };
  ($traceurRuntime.createClass)(IteratorSequence, {
    __iterateUncached: function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    },
    __iteratorUncached: function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator((function() {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      }));
    }
  }, {}, IndexedSequence);
  var IterableSequence = function IterableSequence(iterable) {
    this._iterable = iterable;
    this.length = iterable.length || iterable.size;
  };
  ($traceurRuntime.createClass)(IterableSequence, {
    __iterateUncached: function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    },
    __iteratorUncached: function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator((function() {
          return iteratorDone();
        }));
      }
      var iterations = 0;
      return new Iterator((function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      }));
    }
  }, {}, IndexedSequence);
  var ObjectSequence = function ObjectSequence(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.length = keys.length;
  };
  ($traceurRuntime.createClass)(ObjectSequence, {
    toObject: function() {
      return this._object;
    },
    get: function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    },
    has: function(key) {
      return this._object.hasOwnProperty(key);
    },
    __iterate: function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    },
    __iterator: function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator((function() {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
      }));
    }
  }, {}, Sequence);
  var ArraySequence = function ArraySequence(array) {
    this._array = array;
    this.length = array.length;
  };
  ($traceurRuntime.createClass)(ArraySequence, {
    toArray: function() {
      return this._array;
    },
    get: function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    },
    __iterate: function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    },
    __iterator: function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator((function() {
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
      }));
    }
  }, {}, IndexedSequence);
  function ensureLength(indexedSeq) {
    if (indexedSeq.length == null) {
      indexedSeq.cacheResult();
    }
    invariant(indexedSeq.length < Infinity, 'Cannot reverse infinite range.');
    return indexedSeq.length;
  }
  function wholeSlice(begin, end, length) {
    return (begin === 0 || (length != null && begin <= -length)) && (end == null || (length != null && end >= length));
  }
  function resolveBegin(begin, length) {
    return resolveIndex(begin, length, 0);
  }
  function resolveEnd(end, length) {
    return resolveIndex(end, length, length);
  }
  function resolveIndex(index, length, defaultIndex) {
    return index == null ? defaultIndex : index < 0 ? Math.max(0, length + index) : length ? Math.min(length, index) : index;
  }
  function valueMapper(v) {
    return v;
  }
  function entryMapper(v, k) {
    return [k, v];
  }
  function returnTrue() {
    return true;
  }
  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }
  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : value;
  }
  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function wrapIndex(seq, index) {
    if (index < 0) {
      if (seq.length == null) {
        seq.cacheResult();
      }
      return seq.length + index;
    }
    return index;
  }
  function assertNotInfinite(length) {
    invariant(length !== Infinity, 'Cannot perform this action with an infinite sequence.');
  }
  function iterate(sequence, fn, reverse, useKeys) {
    var cache = sequence._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, sequence) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return sequence.__iterateUncached(fn, reverse);
  }
  function iterator(sequence, type, reverse, useKeys) {
    var cache = sequence._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator((function() {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      }));
    }
    return sequence.__iteratorUncached(type, reverse);
  }
  var ValuesSequence = function ValuesSequence(seq) {
    this._seq = seq;
    this.length = seq.length;
  };
  ($traceurRuntime.createClass)(ValuesSequence, {
    get: function(key, notSetValue) {
      return this._seq.get(key, notSetValue);
    },
    has: function(key) {
      return this._seq.has(key);
    },
    cacheResult: function() {
      this._seq.cacheResult();
      this.length = this._seq.length;
      return this;
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      return this._seq.__iterate((function(v) {
        return fn(v, iterations++, $__0);
      }), reverse);
    },
    __iterator: function(type, reverse) {
      var iterator = this._seq.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator((function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value, step);
      }));
    }
  }, {}, IndexedSequence);
  var KeyedIndexedSequence = function KeyedIndexedSequence(indexedSeq) {
    this._seq = indexedSeq;
    this.length = indexedSeq.length;
  };
  ($traceurRuntime.createClass)(KeyedIndexedSequence, {
    get: function(key, notSetValue) {
      return this._seq.get(key, notSetValue);
    },
    has: function(key) {
      return this._seq.has(key);
    },
    valueSeq: function() {
      return this._seq;
    },
    reverse: function() {
      var $__0 = this;
      var reversedSequence = reverseFactory(this);
      reversedSequence.valueSeq = (function() {
        return $__0._seq.reverse();
      });
      return reversedSequence;
    },
    map: function(mapper, context) {
      var $__0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      mappedSequence.valueSeq = (function() {
        return $__0._seq.map(mapper, context);
      });
      return mappedSequence;
    },
    cacheResult: function() {
      this._seq.cacheResult();
      this.length = this._seq.length;
      return this;
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      var ii = reverse ? ensureLength(this) : 0;
      return this._seq.__iterate((function(v) {
        return fn(v, reverse ? --ii : ii++, $__0);
      }), reverse);
    },
    __iterator: function(type, reverse) {
      var iterator = this._seq.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? ensureLength(this) : 0;
      return new Iterator((function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      }));
    }
  }, {}, Sequence);
  var FromEntriesSequence = function FromEntriesSequence(entriesSeq) {
    this._seq = entriesSeq;
    this.length = entriesSeq.length;
  };
  ($traceurRuntime.createClass)(FromEntriesSequence, {
    entrySeq: function() {
      return this._seq;
    },
    cacheResult: function() {
      this._seq.cacheResult();
      this.length = this._seq.length;
      return this;
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      return this._seq.__iterate((function(entry) {
        return entry && fn(entry[1], entry[0], $__0);
      }), reverse);
    },
    __iterator: function(type, reverse) {
      var iterator = this._seq.__iterator(ITERATE_VALUES, reverse);
      return new Iterator((function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, entry[0], entry[1], step);
          }
        }
      }));
    }
  }, {}, Sequence);
  function flipFactory(sequence) {
    var flipSequence = sequence.__makeSequence();
    flipSequence.length = sequence.length;
    flipSequence.flip = (function() {
      return sequence;
    });
    flipSequence.reverse = function() {
      var reversedSequence = sequence.reverse.apply(this);
      reversedSequence.flip = (function() {
        return sequence.reverse();
      });
      return reversedSequence;
    };
    flipSequence.has = (function(key) {
      return sequence.contains(key);
    });
    flipSequence.contains = (function(key) {
      return sequence.has(key);
    });
    flipSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      return sequence.__iterate((function(v, k) {
        return fn(k, v, $__0) !== false;
      }), reverse);
    };
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = sequence.__iterator(type, reverse);
        return new Iterator((function() {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        }));
      }
      return sequence.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
    };
    return flipSequence;
  }
  function mapFactory(sequence, mapper, context) {
    var mappedSequence = sequence.__makeSequence();
    mappedSequence.length = sequence.length;
    mappedSequence.has = (function(key) {
      return sequence.has(key);
    });
    mappedSequence.get = (function(key, notSetValue) {
      var v = sequence.get(key, NOT_SET);
      return v === NOT_SET ? notSetValue : mapper.call(context, v, key, sequence);
    });
    mappedSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      return sequence.__iterate((function(v, k, c) {
        return fn(mapper.call(context, v, k, c), k, $__0) !== false;
      }), reverse);
    };
    mappedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = sequence.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator((function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(type, key, mapper.call(context, entry[1], key, sequence), step);
      }));
    };
    return mappedSequence;
  }
  function reverseFactory(sequence) {
    var reversedSequence = sequence.__makeSequence();
    reversedSequence.length = sequence.length;
    reversedSequence.reverse = (function() {
      return sequence;
    });
    reversedSequence.flip = function() {
      var flipSequence = sequence.flip.apply(this);
      flipSequence.reverse = (function() {
        return sequence.flip();
      });
      return flipSequence;
    };
    reversedSequence.get = (function(key, notSetValue) {
      return sequence.get(key, notSetValue);
    });
    reversedSequence.has = (function(key) {
      return sequence.has(key);
    });
    reversedSequence.contains = (function(value) {
      return sequence.contains(value);
    });
    reversedSequence.cacheResult = function() {
      sequence.cacheResult();
      this.length = sequence.length;
      return this;
    };
    reversedSequence.__iterate = function(fn, reverse) {
      var $__0 = this;
      return sequence.__iterate((function(v, k) {
        return fn(v, k, $__0);
      }), !reverse);
    };
    reversedSequence.__iterator = (function(type, reverse) {
      return sequence.__iterator(type, !reverse);
    });
    return reversedSequence;
  }
  function filterFactory(sequence, predicate, context, useKeys) {
    var filterSequence = sequence.__makeSequence();
    filterSequence.has = (function(key) {
      var v = sequence.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, sequence);
    });
    filterSequence.get = (function(key, notSetValue) {
      var v = sequence.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, sequence) ? v : notSetValue;
    });
    filterSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      sequence.__iterate((function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, $__0);
        }
      }), reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function(type, reverse) {
      var iterator = sequence.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator((function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, sequence)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      }));
    };
    return filterSequence;
  }
  function groupByFactory(seq, grouper, context, useKeys) {
    var groupMap = {};
    var groups = [];
    seq.__iterate((function(v, k) {
      var g = grouper.call(context, v, k, seq);
      var h = hash(g);
      var e = useKeys ? [k, v] : v;
      if (!groupMap.hasOwnProperty(h)) {
        groupMap[h] = groups.length;
        groups.push([g, [e]]);
      } else {
        groups[groupMap[h]][1].push(e);
      }
    }));
    return Sequence(groups).fromEntrySeq().map(useKeys ? (function(group) {
      return Sequence(group).fromEntrySeq();
    }) : (function(group) {
      return Sequence(group);
    }));
  }
  function takeFactory(sequence, amount) {
    if (amount > sequence.length) {
      return sequence;
    }
    if (amount < 0) {
      amount = 0;
    }
    var takeSequence = sequence.__makeSequence();
    takeSequence.length = sequence.length && Math.min(sequence.length, amount);
    takeSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      if (amount === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      sequence.__iterate((function(v, k) {
        return ++iterations && fn(v, k, $__0) !== false && iterations < amount;
      }));
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = amount && sequence.__iterator(type, reverse);
      var iterations = 0;
      return new Iterator((function() {
        if (iterations++ > amount) {
          return iteratorDone();
        }
        return iterator.next();
      }));
    };
    return takeSequence;
  }
  function takeWhileFactory(sequence, predicate, context) {
    var takeSequence = sequence.__makeSequence();
    takeSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      sequence.__iterate((function(v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn(v, k, $__0);
      }));
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {
      var $__0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = sequence.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator((function() {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, $__0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      }));
    };
    return takeSequence;
  }
  function skipFactory(sequence, amount, useKeys) {
    if (amount <= 0) {
      return sequence;
    }
    var skipSequence = sequence.__makeSequence();
    skipSequence.length = sequence.length && Math.max(0, sequence.length - amount);
    skipSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      sequence.__iterate((function(v, k) {
        if (!(isSkipping && (isSkipping = skipped++ < amount))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, $__0);
        }
      }));
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = amount && sequence.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator((function() {
        while (skipped < amount) {
          skipped++;
          iterator.next();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations++, null, step);
        } else {
          return iteratorValue(type, iterations++, step.value[1], step);
        }
      }));
    };
    return skipSequence;
  }
  function skipWhileFactory(sequence, predicate, context, useKeys) {
    var skipSequence = sequence.__makeSequence();
    skipSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      sequence.__iterate((function(v, k, c) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, $__0);
        }
      }));
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {
      var $__0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = sequence.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator((function() {
        var step,
            k,
            v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, null, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, $__0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      }));
    };
    return skipSequence;
  }
  function concatFactory(sequence, values, useKeys) {
    var sequences = [sequence].concat(values);
    var concatSequence = Sequence(sequences);
    if (useKeys) {
      concatSequence = concatSequence.toKeyedSeq();
    }
    concatSequence = concatSequence.flatten();
    concatSequence.length = sequences.reduce((function(sum, seq) {
      if (sum !== undefined) {
        var len = Sequence(seq).length;
        if (len != null) {
          return sum + len;
        }
      }
    }), 0);
    return concatSequence;
  }
  function flattenFactory(sequence, useKeys) {
    var flatSequence = sequence.__makeSequence();
    flatSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      sequence.__iterate((function(seq) {
        var stopped = false;
        Sequence(seq).__iterate((function(v, k) {
          if (fn(v, useKeys ? k : iterations++, $__0) === false) {
            stopped = true;
            return false;
          }
        }), reverse);
        return !stopped;
      }), reverse);
      return iterations;
    };
    flatSequence.__iteratorUncached = function(type, reverse) {
      var sequenceIterator = sequence.__iterator(ITERATE_VALUES, reverse);
      var iterator;
      var iterations = 0;
      return new Iterator((function() {
        while (true) {
          if (iterator) {
            var step = iterator.next();
            if (!step.done) {
              if (useKeys || type === ITERATE_VALUES) {
                return step;
              } else if (type === ITERATE_KEYS) {
                return iteratorValue(type, iterations++, null, step);
              } else {
                return iteratorValue(type, iterations++, step.value[1], step);
              }
            }
          }
          var sequenceStep = sequenceIterator.next();
          if (sequenceStep.done) {
            return sequenceStep;
          }
          iterator = Sequence(sequenceStep.value).__iterator(type, reverse);
        }
      }));
    };
    return flatSequence;
  }
  function interposeFactory(sequence, separator) {
    var interposedSequence = sequence.__makeSequence();
    interposedSequence.length = sequence.length && sequence.length * 2 - 1;
    interposedSequence.__iterateUncached = function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      sequence.__iterate((function(v, k) {
        return (!iterations || fn(separator, iterations++, $__0) !== false) && fn(v, iterations++, $__0) !== false;
      }), reverse);
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = sequence.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator((function() {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
      }));
    };
    return interposedSequence;
  }
  var Cursor = function Cursor(rootData, keyPath, onChange, value) {
    value = value ? value : rootData.getIn(keyPath);
    this.length = value instanceof Sequence ? value.length : null;
    this._rootData = rootData;
    this._keyPath = keyPath;
    this._onChange = onChange;
  };
  ($traceurRuntime.createClass)(Cursor, {
    deref: function(notSetValue) {
      return this._rootData.getIn(this._keyPath, notSetValue);
    },
    get: function(key, notSetValue) {
      if (Array.isArray(key) && key.length === 0) {
        return this;
      }
      var value = this._rootData.getIn(this._keyPath.concat(key), NOT_SET);
      return value === NOT_SET ? notSetValue : wrappedValue(this, key, value);
    },
    set: function(key, value) {
      return updateCursor(this, (function(m) {
        return m.set(key, value);
      }), key);
    },
    remove: function(key) {
      return updateCursor(this, (function(m) {
        return m.remove(key);
      }), key);
    },
    clear: function() {
      return updateCursor(this, (function(m) {
        return m.clear();
      }));
    },
    update: function(keyOrFn, notSetValue, updater) {
      return arguments.length === 1 ? updateCursor(this, keyOrFn) : updateCursor(this, (function(map) {
        return map.update(keyOrFn, notSetValue, updater);
      }), keyOrFn);
    },
    withMutations: function(fn) {
      return updateCursor(this, (function(m) {
        return (m || Map.empty()).withMutations(fn);
      }));
    },
    cursor: function(subKey) {
      return Array.isArray(subKey) && subKey.length === 0 ? this : subCursor(this, subKey);
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      var deref = this.deref();
      return deref && deref.__iterate ? deref.__iterate((function(v, k) {
        return fn(wrappedValue($__0, k, v), k, $__0);
      }), reverse) : 0;
    },
    __iterator: function(type, reverse) {
      var $__0 = this;
      var deref = this.deref();
      var iterator = deref && deref.__iterator && deref.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator((function() {
        if (!iterator) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        return iteratorValue(type, k, wrappedValue($__0, k, v), step);
      }));
    }
  }, {}, Sequence);
  Cursor.prototype[DELETE] = Cursor.prototype.remove;
  Cursor.prototype.getIn = Cursor.prototype.get;
  function wrappedValue(cursor, key, value) {
    return value instanceof Sequence ? subCursor(cursor, key, value) : value;
  }
  function subCursor(cursor, key, value) {
    return new Cursor(cursor._rootData, cursor._keyPath.concat(key), cursor._onChange, value);
  }
  function updateCursor(cursor, changeFn, changeKey) {
    var newRootData = cursor._rootData.updateIn(cursor._keyPath, changeKey ? Map.empty() : undefined, changeFn);
    var keyPath = cursor._keyPath || [];
    cursor._onChange && cursor._onChange.call(undefined, newRootData, cursor._rootData, changeKey ? keyPath.concat(changeKey) : keyPath);
    return new Cursor(newRootData, cursor._keyPath, cursor._onChange);
  }
  function is(first, second) {
    if (first instanceof Cursor) {
      first = first.deref();
    }
    if (second instanceof Cursor) {
      second = second.deref();
    }
    if (first === second) {
      return first !== 0 || second !== 0 || 1 / first === 1 / second;
    }
    if (first !== first) {
      return second !== second;
    }
    if (first instanceof Sequence) {
      return first.equals(second);
    }
    return false;
  }
  var Map = function Map(sequence) {
    var map = $Map.empty();
    return sequence ? sequence.constructor === $Map ? sequence : map.merge(sequence) : map;
  };
  var $Map = Map;
  ($traceurRuntime.createClass)(Map, {
    toString: function() {
      return this.__toString('Map {', '}');
    },
    get: function(k, notSetValue) {
      return this._root ? this._root.get(0, hash(k), k, notSetValue) : notSetValue;
    },
    set: function(k, v) {
      return updateMap(this, k, v);
    },
    remove: function(k) {
      return updateMap(this, k, NOT_SET);
    },
    update: function(k, notSetValue, updater) {
      return arguments.length === 1 ? this.updateIn([], null, k) : this.updateIn([k], notSetValue, updater);
    },
    updateIn: function(keyPath, notSetValue, updater) {
      var $__14;
      if (!updater) {
        ($__14 = [notSetValue, updater], updater = $__14[0], notSetValue = $__14[1], $__14);
      }
      return updateInDeepMap(this, keyPath, notSetValue, updater, 0);
    },
    clear: function() {
      if (this.length === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.length = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return $Map.empty();
    },
    merge: function() {
      return mergeIntoMapWith(this, null, arguments);
    },
    mergeWith: function(merger) {
      for (var seqs = [],
          $__4 = 1; $__4 < arguments.length; $__4++)
        seqs[$__4 - 1] = arguments[$__4];
      return mergeIntoMapWith(this, merger, seqs);
    },
    mergeDeep: function() {
      return mergeIntoMapWith(this, deepMerger(null), arguments);
    },
    mergeDeepWith: function(merger) {
      for (var seqs = [],
          $__5 = 1; $__5 < arguments.length; $__5++)
        seqs[$__5 - 1] = arguments[$__5];
      return mergeIntoMapWith(this, deepMerger(merger), seqs);
    },
    cursor: function(keyPath, onChange) {
      if (!onChange && typeof keyPath === 'function') {
        onChange = keyPath;
        keyPath = [];
      } else if (arguments.length === 0) {
        keyPath = [];
      } else if (!Array.isArray(keyPath)) {
        keyPath = [keyPath];
      }
      return new Cursor(this, keyPath, onChange);
    },
    withMutations: function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    },
    asMutable: function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    },
    asImmutable: function() {
      return this.__ensureOwner();
    },
    wasAltered: function() {
      return this.__altered;
    },
    __iterator: function(type, reverse) {
      return new MapIterator(this, type, reverse);
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      this._root && this._root.iterate((function(entry) {
        iterations++;
        return fn(entry[1], entry[0], $__0);
      }), reverse);
      return iterations;
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.length, this._root, ownerID, this.__hash);
    }
  }, {empty: function() {
      return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
    }}, Sequence);
  var MapPrototype = Map.prototype;
  MapPrototype[DELETE] = MapPrototype.remove;
  Map.from = Map;
  var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  };
  var $BitmapIndexedNode = BitmapIndexedNode;
  ($traceurRuntime.createClass)(BitmapIndexedNode, {
    get: function(shift, hash, key, notSetValue) {
      var bit = (1 << ((shift === 0 ? hash : hash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, hash, key, notSetValue);
    },
    update: function(ownerID, shift, hash, key, value, didChangeLength, didAlter) {
      var hashFrag = (shift === 0 ? hash : hash >>> shift) & MASK;
      var bit = 1 << hashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;
      if (!exists && value === NOT_SET) {
        return this;
      }
      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : null;
      var newNode = updateNode(node, ownerID, shift + SHIFT, hash, key, value, didChangeLength, didAlter);
      if (newNode === node) {
        return this;
      }
      if (!exists && newNode && nodes.length >= MAX_BITMAP_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, hashFrag, newNode);
      }
      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }
      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }
      return new $BitmapIndexedNode(ownerID, newBitmap, newNodes);
    },
    iterate: function(fn, reverse) {
      var nodes = this.nodes;
      for (var ii = 0,
          maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
        if (nodes[reverse ? maxIndex - ii : ii].iterate(fn, reverse) === false) {
          return false;
        }
      }
    }
  }, {});
  var ArrayNode = function ArrayNode(ownerID, count, nodes) {
    this.ownerID = ownerID;
    this.count = count;
    this.nodes = nodes;
  };
  var $ArrayNode = ArrayNode;
  ($traceurRuntime.createClass)(ArrayNode, {
    get: function(shift, hash, key, notSetValue) {
      var idx = (shift === 0 ? hash : hash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, hash, key, notSetValue) : notSetValue;
    },
    update: function(ownerID, shift, hash, key, value, didChangeLength, didAlter) {
      var idx = (shift === 0 ? hash : hash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];
      if (removed && !node) {
        return this;
      }
      var newNode = updateNode(node, ownerID, shift + SHIFT, hash, key, value, didChangeLength, didAlter);
      if (newNode === node) {
        return this;
      }
      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_ARRAY_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }
      return new $ArrayNode(ownerID, newCount, newNodes);
    },
    iterate: function(fn, reverse) {
      var nodes = this.nodes;
      for (var ii = 0,
          maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[reverse ? maxIndex - ii : ii];
        if (node && node.iterate(fn, reverse) === false) {
          return false;
        }
      }
    }
  }, {});
  var HashCollisionNode = function HashCollisionNode(ownerID, hash, entries) {
    this.ownerID = ownerID;
    this.hash = hash;
    this.entries = entries;
  };
  var $HashCollisionNode = HashCollisionNode;
  ($traceurRuntime.createClass)(HashCollisionNode, {
    get: function(shift, hash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0,
          len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    },
    update: function(ownerID, shift, hash, key, value, didChangeLength, didAlter) {
      var removed = value === NOT_SET;
      if (hash !== this.hash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeLength);
        return mergeIntoNode(this, ownerID, shift, hash, [key, value]);
      }
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (removed && !exists) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeLength);
      if (removed && len === 2) {
        return new ValueNode(ownerID, this.hash, entries[idx ^ 1]);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new $HashCollisionNode(ownerID, this.hash, newEntries);
    },
    iterate: function(fn, reverse) {
      var entries = this.entries;
      for (var ii = 0,
          maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
        if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
          return false;
        }
      }
    }
  }, {});
  var ValueNode = function ValueNode(ownerID, hash, entry) {
    this.ownerID = ownerID;
    this.hash = hash;
    this.entry = entry;
  };
  var $ValueNode = ValueNode;
  ($traceurRuntime.createClass)(ValueNode, {
    get: function(shift, hash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    },
    update: function(ownerID, shift, hash, key, value, didChangeLength, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }
      SetRef(didAlter);
      if (removed) {
        SetRef(didChangeLength);
        return null;
      }
      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new $ValueNode(ownerID, hash, [key, value]);
      }
      SetRef(didChangeLength);
      return mergeIntoNode(this, ownerID, shift, hash, [key, value]);
    },
    iterate: function(fn) {
      return fn(this.entry);
    }
  }, {});
  var MapIterator = function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  };
  ($traceurRuntime.createClass)(MapIterator, {next: function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    }}, {}, Iterator);
  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }
  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }
  function makeMap(length, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.length = length;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }
  function updateMap(map, k, v) {
    var didChangeLength = MakeRef(CHANGE_LENGTH);
    var didAlter = MakeRef(DID_ALTER);
    var newRoot = updateNode(map._root, map.__ownerID, 0, hash(k), k, v, didChangeLength, didAlter);
    if (!didAlter.value) {
      return map;
    }
    var newLength = map.length + (didChangeLength.value ? v === NOT_SET ? -1 : 1 : 0);
    if (map.__ownerID) {
      map.length = newLength;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newLength, newRoot) : Map.empty();
  }
  function updateNode(node, ownerID, shift, hash, key, value, didChangeLength, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeLength);
      return new ValueNode(ownerID, hash, [key, value]);
    }
    return node.update(ownerID, shift, hash, key, value, didChangeLength, didAlter);
  }
  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }
  function mergeIntoNode(node, ownerID, shift, hash, entry) {
    if (node.hash === hash) {
      return new HashCollisionNode(ownerID, hash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.hash : node.hash >>> shift) & MASK;
    var idx2 = (shift === 0 ? hash : hash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, hash, entry)] : ((newNode = new ValueNode(ownerID, hash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }
  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0,
        bit = 1,
        len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node != null && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }
  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : null;
    }
    expandedNodes[including] = node;
    return new ArrayNode(ownerID, count + 1, expandedNodes);
  }
  function mergeIntoMapWith(map, merger, iterables) {
    var seqs = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var seq = iterables[ii];
      if (!(seq instanceof Sequence)) {
        seq = Sequence(seq);
        if (seq instanceof IndexedSequence) {
          seq = seq.fromEntrySeq();
        }
      }
      seq && seqs.push(seq);
    }
    return mergeIntoCollectionWith(map, merger, seqs);
  }
  function deepMerger(merger) {
    return (function(existing, value) {
      return existing && existing.mergeDeepWith ? existing.mergeDeepWith(merger, value) : merger ? merger(existing, value) : value;
    });
  }
  function mergeIntoCollectionWith(collection, merger, seqs) {
    if (seqs.length === 0) {
      return collection;
    }
    return collection.withMutations((function(collection) {
      var mergeIntoMap = merger ? (function(value, key) {
        var existing = collection.get(key, NOT_SET);
        collection.set(key, existing === NOT_SET ? value : merger(existing, value));
      }) : (function(value, key) {
        collection.set(key, value);
      });
      for (var ii = 0; ii < seqs.length; ii++) {
        seqs[ii].forEach(mergeIntoMap);
      }
    }));
  }
  function updateInDeepMap(collection, keyPath, notSetValue, updater, pathOffset) {
    var pathLen = keyPath.length;
    if (pathOffset === pathLen) {
      return updater(collection);
    }
    invariant(collection.set, 'updateIn with invalid keyPath');
    var notSet = pathOffset === pathLen - 1 ? notSetValue : Map.empty();
    var key = keyPath[pathOffset];
    var existing = collection.get(key, notSet);
    var value = updateInDeepMap(existing, keyPath, notSetValue, updater, pathOffset + 1);
    return value === existing ? collection : collection.set(key, value);
  }
  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }
  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }
  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }
  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }
  var MAX_BITMAP_SIZE = SIZE / 2;
  var MIN_ARRAY_SIZE = SIZE / 4;
  var EMPTY_MAP;
  var Vector = function Vector() {
    for (var values = [],
        $__6 = 0; $__6 < arguments.length; $__6++)
      values[$__6] = arguments[$__6];
    return $Vector.from(values);
  };
  var $Vector = Vector;
  ($traceurRuntime.createClass)(Vector, {
    toString: function() {
      return this.__toString('Vector [', ']');
    },
    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index < 0 || index >= this.length) {
        return notSetValue;
      }
      index += this._origin;
      var node = vectorNodeFor(this, index);
      return node && node.array[index & MASK];
    },
    set: function(index, value) {
      return updateVector(this, index, value);
    },
    remove: function(index) {
      return updateVector(this, index, NOT_SET);
    },
    clear: function() {
      if (this.length === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.length = this._origin = this._size = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return $Vector.empty();
    },
    push: function() {
      var values = arguments;
      var oldLength = this.length;
      return this.withMutations((function(vect) {
        setVectorBounds(vect, 0, oldLength + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          vect.set(oldLength + ii, values[ii]);
        }
      }));
    },
    pop: function() {
      return setVectorBounds(this, 0, -1);
    },
    unshift: function() {
      var values = arguments;
      return this.withMutations((function(vect) {
        setVectorBounds(vect, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          vect.set(ii, values[ii]);
        }
      }));
    },
    shift: function() {
      return setVectorBounds(this, 1);
    },
    merge: function() {
      return mergeIntoVectorWith(this, null, arguments);
    },
    mergeWith: function(merger) {
      for (var seqs = [],
          $__7 = 1; $__7 < arguments.length; $__7++)
        seqs[$__7 - 1] = arguments[$__7];
      return mergeIntoVectorWith(this, merger, seqs);
    },
    mergeDeep: function() {
      return mergeIntoVectorWith(this, deepMerger(null), arguments);
    },
    mergeDeepWith: function(merger) {
      for (var seqs = [],
          $__8 = 1; $__8 < arguments.length; $__8++)
        seqs[$__8 - 1] = arguments[$__8];
      return mergeIntoVectorWith(this, deepMerger(merger), seqs);
    },
    setLength: function(length) {
      return setVectorBounds(this, 0, length);
    },
    slice: function(begin, end) {
      var sliceSequence = $traceurRuntime.superCall(this, $Vector.prototype, "slice", [begin, end]);
      if (sliceSequence !== this) {
        var vector = this;
        var length = vector.length;
        sliceSequence.toVector = (function() {
          return setVectorBounds(vector, begin < 0 ? Math.max(0, length + begin) : length ? Math.min(length, begin) : begin, end == null ? length : end < 0 ? Math.max(0, length + end) : length ? Math.min(length, end) : end);
        });
      }
      return sliceSequence;
    },
    __iterator: function(type, reverse) {
      return new VectorIterator(this, type, reverse);
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      var iterations = 0;
      var eachFn = (function(v) {
        return fn(v, iterations++, $__0);
      });
      var tailOffset = getTailOffset(this._size);
      if (reverse) {
        iterateVNode(this._tail, 0, tailOffset - this._origin, this._size - this._origin, eachFn, reverse) && iterateVNode(this._root, this._level, -this._origin, tailOffset - this._origin, eachFn, reverse);
      } else {
        iterateVNode(this._root, this._level, -this._origin, tailOffset - this._origin, eachFn, reverse) && iterateVNode(this._tail, 0, tailOffset - this._origin, this._size - this._origin, eachFn, reverse);
      }
      return iterations;
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeVector(this._origin, this._size, this._level, this._root, this._tail, ownerID, this.__hash);
    }
  }, {
    empty: function() {
      return EMPTY_VECT || (EMPTY_VECT = makeVector(0, 0, SHIFT));
    },
    from: function(sequence) {
      if (!sequence || sequence.length === 0) {
        return $Vector.empty();
      }
      if (sequence.constructor === $Vector) {
        return sequence;
      }
      var isArray = Array.isArray(sequence);
      if (sequence.length > 0 && sequence.length < SIZE) {
        return makeVector(0, sequence.length, SHIFT, null, new VNode(isArray ? arrCopy(sequence) : Sequence(sequence).toArray()));
      }
      if (!isArray) {
        sequence = Sequence(sequence).valueSeq();
      }
      return $Vector.empty().merge(sequence);
    }
  }, IndexedSequence);
  var VectorPrototype = Vector.prototype;
  VectorPrototype[DELETE] = VectorPrototype.remove;
  VectorPrototype.update = MapPrototype.update;
  VectorPrototype.updateIn = MapPrototype.updateIn;
  VectorPrototype.cursor = MapPrototype.cursor;
  VectorPrototype.withMutations = MapPrototype.withMutations;
  VectorPrototype.asMutable = MapPrototype.asMutable;
  VectorPrototype.asImmutable = MapPrototype.asImmutable;
  VectorPrototype.wasAltered = MapPrototype.wasAltered;
  var VNode = function VNode(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
  };
  var $VNode = VNode;
  ($traceurRuntime.createClass)(VNode, {
    removeBefore: function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new $VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    },
    removeAfter: function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var removingLast = sizeIndex === this.array.length - 1;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingLast) {
          return this;
        }
      }
      if (removingLast && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingLast) {
        editable.array.pop();
      }
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    }
  }, {});
  function iterateVNode(node, level, offset, max, fn, reverse) {
    var ii;
    var array = node && node.array;
    if (level === 0) {
      var from = offset < 0 ? -offset : 0;
      var to = max - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      for (ii = from; ii < to; ii++) {
        if (fn(array && array[reverse ? from + to - 1 - ii : ii]) === false) {
          return false;
        }
      }
    } else {
      var step = 1 << level;
      var newLevel = level - SHIFT;
      for (ii = 0; ii <= MASK; ii++) {
        var levelIndex = reverse ? MASK - ii : ii;
        var newOffset = offset + (levelIndex << level);
        if (newOffset < max && newOffset + step > 0) {
          var nextNode = array && array[levelIndex];
          if (!iterateVNode(nextNode, newLevel, newOffset, max, fn, reverse)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  var VectorIterator = function VectorIterator(vector, type, reverse) {
    this._type = type;
    this._reverse = !!reverse;
    this._maxIndex = vector.length - 1;
    var tailOffset = getTailOffset(vector._size);
    var rootStack = vectIteratorFrame(vector._root && vector._root.array, vector._level, -vector._origin, tailOffset - vector._origin - 1);
    var tailStack = vectIteratorFrame(vector._tail && vector._tail.array, 0, tailOffset - vector._origin, vector._size - vector._origin - 1);
    this._stack = reverse ? tailStack : rootStack;
    this._stack.__prev = reverse ? rootStack : tailStack;
  };
  ($traceurRuntime.createClass)(VectorIterator, {next: function() {
      var stack = this._stack;
      while (stack) {
        var array = stack.array;
        var rawIndex = stack.index++;
        if (this._reverse) {
          rawIndex = MASK - rawIndex;
          if (rawIndex > stack.rawMax) {
            rawIndex = stack.rawMax;
            stack.index = SIZE - rawIndex;
          }
        }
        if (rawIndex >= 0 && rawIndex < SIZE && rawIndex <= stack.rawMax) {
          var value = array && array[rawIndex];
          if (stack.level === 0) {
            var type = this._type;
            var index;
            if (type !== 1) {
              index = stack.offset + (rawIndex << stack.level);
              if (this._reverse) {
                index = this._maxIndex - index;
              }
            }
            return iteratorValue(type, index, value);
          } else {
            this._stack = stack = vectIteratorFrame(value && value.array, stack.level - SHIFT, stack.offset + (rawIndex << stack.level), stack.max, stack);
          }
          continue;
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    }}, {}, Iterator);
  function vectIteratorFrame(array, level, offset, max, prevFrame) {
    return {
      array: array,
      level: level,
      offset: offset,
      max: max,
      rawMax: ((max - offset) >> level),
      index: 0,
      __prev: prevFrame
    };
  }
  function makeVector(origin, size, level, root, tail, ownerID, hash) {
    var vect = Object.create(VectorPrototype);
    vect.length = size - origin;
    vect._origin = origin;
    vect._size = size;
    vect._level = level;
    vect._root = root;
    vect._tail = tail;
    vect.__ownerID = ownerID;
    vect.__hash = hash;
    vect.__altered = false;
    return vect;
  }
  function updateVector(vector, index, value) {
    index = wrapIndex(vector, index);
    if (index >= vector.length || index < 0) {
      return value === NOT_SET ? vector : vector.withMutations((function(vect) {
        index < 0 ? setVectorBounds(vect, index).set(0, value) : setVectorBounds(vect, 0, index + 1).set(index, value);
      }));
    }
    index += vector._origin;
    var newTail = vector._tail;
    var newRoot = vector._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(vector._size)) {
      newTail = updateVNode(newTail, vector.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, vector.__ownerID, vector._level, index, value, didAlter);
    }
    if (!didAlter.value) {
      return vector;
    }
    if (vector.__ownerID) {
      vector._root = newRoot;
      vector._tail = newTail;
      vector.__hash = undefined;
      vector.__altered = true;
      return vector;
    }
    return makeVector(vector._origin, vector._size, vector._level, newRoot, newTail);
  }
  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var removed = value === NOT_SET;
    var newNode;
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (removed && !nodeHas) {
      return node;
    }
    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }
    if (!removed && nodeHas && node.array[idx] === value) {
      return node;
    }
    SetRef(didAlter);
    newNode = editableVNode(node, ownerID);
    if (removed && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = removed ? undefined : value;
    }
    return newNode;
  }
  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }
  function vectorNodeFor(vector, rawIndex) {
    if (rawIndex >= getTailOffset(vector._size)) {
      return vector._tail;
    }
    if (rawIndex < 1 << (vector._level + SHIFT)) {
      var node = vector._root;
      var level = vector._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }
  function setVectorBounds(vector, begin, end) {
    var owner = vector.__ownerID || new OwnerID();
    var oldOrigin = vector._origin;
    var oldSize = vector._size;
    var newOrigin = oldOrigin + begin;
    var newSize = end == null ? oldSize : end < 0 ? oldSize + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newSize === oldSize) {
      return vector;
    }
    if (newOrigin >= newSize) {
      return vector.clear();
    }
    var newLevel = vector._level;
    var newRoot = vector._root;
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [null, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newSize += offsetShift;
      oldSize += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldSize);
    var newTailOffset = getTailOffset(newSize);
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }
    var oldTail = vector._tail;
    var newTail = newTailOffset < oldTailOffset ? vectorNodeFor(vector, newSize - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldSize && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }
    if (newSize < oldSize) {
      newTail = newTail && newTail.removeAfter(owner, 0, newSize);
    }
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newSize -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      var beginIndex,
          endIndex;
      offsetShift = 0;
      do {
        beginIndex = ((newOrigin) >>> newLevel) & MASK;
        endIndex = ((newTailOffset - 1) >>> newLevel) & MASK;
        if (beginIndex === endIndex) {
          if (beginIndex) {
            offsetShift += (1 << newLevel) * beginIndex;
          }
          newLevel -= SHIFT;
          newRoot = newRoot && newRoot.array[beginIndex];
        }
      } while (newRoot && beginIndex === endIndex);
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot && newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot && newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newSize -= offsetShift;
      }
    }
    if (vector.__ownerID) {
      vector.length = newSize - newOrigin;
      vector._origin = newOrigin;
      vector._size = newSize;
      vector._level = newLevel;
      vector._root = newRoot;
      vector._tail = newTail;
      vector.__hash = undefined;
      vector.__altered = true;
      return vector;
    }
    return makeVector(newOrigin, newSize, newLevel, newRoot, newTail);
  }
  function mergeIntoVectorWith(vector, merger, iterables) {
    var seqs = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var seq = iterables[ii];
      seq && seqs.push(Sequence(seq));
    }
    var maxLength = Math.max.apply(null, seqs.map((function(s) {
      return s.length || 0;
    })));
    if (maxLength > vector.length) {
      vector = vector.setLength(maxLength);
    }
    return mergeIntoCollectionWith(vector, merger, seqs);
  }
  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }
  var EMPTY_VECT;
  var Stack = function Stack() {
    for (var values = [],
        $__9 = 0; $__9 < arguments.length; $__9++)
      values[$__9] = arguments[$__9];
    return $Stack.from(values);
  };
  var $Stack = Stack;
  ($traceurRuntime.createClass)(Stack, {
    toString: function() {
      return this.__toString('Stack [', ']');
    },
    get: function(index, notSetValue) {
      var head = this._head;
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    },
    peek: function() {
      return this._head && this._head.value;
    },
    unshift: function() {
      if (arguments.length === 0) {
        return this;
      }
      var newLength = this.length + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.length = newLength;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newLength, head);
    },
    unshiftAll: function(seq) {
      seq = Sequence(seq);
      if (seq.length === 0) {
        return this;
      }
      var newLength = this.length;
      var head = this._head;
      seq.reverse().forEach((function(value) {
        newLength++;
        head = {
          value: value,
          next: head
        };
      }));
      if (this.__ownerID) {
        this.length = newLength;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newLength, head);
    },
    shift: function() {
      return this.slice(1);
    },
    clear: function() {
      if (this.length === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.length = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return $Stack.empty();
    },
    slice: function(begin, end) {
      if (wholeSlice(begin, end, this.length)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.length);
      var resolvedEnd = resolveEnd(end, this.length);
      if (resolvedEnd !== this.length) {
        return $traceurRuntime.superCall(this, $Stack.prototype, "slice", [begin, end]);
      }
      var newLength = this.length - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.length = newLength;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newLength, head);
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.length, this._head, ownerID, this.__hash);
    },
    __iterateUncached: function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    },
    __iteratorUncached: function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator((function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      }));
    }
  }, {
    empty: function() {
      return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
    },
    from: function(sequence) {
      var stack = $Stack.empty();
      return sequence ? sequence.constructor === $Stack ? sequence : stack.unshiftAll(sequence) : stack;
    }
  }, IndexedSequence);
  var StackPrototype = Stack.prototype;
  StackPrototype.push = StackPrototype.unshift;
  StackPrototype.pop = StackPrototype.shift;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;
  function makeStack(length, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.length = length;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }
  var EMPTY_STACK;
  var Set = function Set() {
    for (var values = [],
        $__10 = 0; $__10 < arguments.length; $__10++)
      values[$__10] = arguments[$__10];
    return $Set.from(values);
  };
  var $Set = Set;
  ($traceurRuntime.createClass)(Set, {
    toString: function() {
      return this.__toString('Set {', '}');
    },
    has: function(value) {
      return this._map.has(value);
    },
    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    add: function(value) {
      var newMap = this._map.set(value, null);
      if (this.__ownerID) {
        this.length = newMap.length;
        this._map = newMap;
        return this;
      }
      return newMap === this._map ? this : makeSet(newMap);
    },
    remove: function(value) {
      var newMap = this._map.remove(value);
      if (this.__ownerID) {
        this.length = newMap.length;
        this._map = newMap;
        return this;
      }
      return newMap === this._map ? this : newMap.length === 0 ? $Set.empty() : makeSet(newMap);
    },
    clear: function() {
      if (this.length === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.length = 0;
        this._map.clear();
        return this;
      }
      return $Set.empty();
    },
    union: function() {
      var seqs = arguments;
      if (seqs.length === 0) {
        return this;
      }
      return this.withMutations((function(set) {
        for (var ii = 0; ii < seqs.length; ii++) {
          Sequence(seqs[ii]).forEach((function(value) {
            return set.add(value);
          }));
        }
      }));
    },
    intersect: function() {
      for (var seqs = [],
          $__11 = 0; $__11 < arguments.length; $__11++)
        seqs[$__11] = arguments[$__11];
      if (seqs.length === 0) {
        return this;
      }
      seqs = seqs.map((function(seq) {
        return Sequence(seq);
      }));
      var originalSet = this;
      return this.withMutations((function(set) {
        originalSet.forEach((function(value) {
          if (!seqs.every((function(seq) {
            return seq.contains(value);
          }))) {
            set.remove(value);
          }
        }));
      }));
    },
    subtract: function() {
      for (var seqs = [],
          $__12 = 0; $__12 < arguments.length; $__12++)
        seqs[$__12] = arguments[$__12];
      if (seqs.length === 0) {
        return this;
      }
      seqs = seqs.map((function(seq) {
        return Sequence(seq);
      }));
      var originalSet = this;
      return this.withMutations((function(set) {
        originalSet.forEach((function(value) {
          if (seqs.some((function(seq) {
            return seq.contains(value);
          }))) {
            set.remove(value);
          }
        }));
      }));
    },
    isSubset: function(seq) {
      seq = Sequence(seq);
      return this.every((function(value) {
        return seq.contains(value);
      }));
    },
    isSuperset: function(seq) {
      var set = this;
      seq = Sequence(seq);
      return seq.every((function(value) {
        return set.contains(value);
      }));
    },
    wasAltered: function() {
      return this._map.wasAltered();
    },
    hashCode: function() {
      return this._map.hashCode();
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      return this._map.__iterate((function(_, k) {
        return fn(k, k, $__0);
      }), reverse);
    },
    __iterator: function(type, reverse) {
      return this._map.map((function(_, k) {
        return k;
      })).__iterator(type, reverse);
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeSet(newMap, ownerID);
    }
  }, {
    empty: function() {
      return EMPTY_SET || (EMPTY_SET = makeSet(Map.empty()));
    },
    from: function(sequence) {
      var set = $Set.empty();
      return sequence ? sequence.constructor === $Set ? sequence : set.union(sequence) : set;
    },
    fromKeys: function(sequence) {
      return $Set.from(Sequence(sequence).flip());
    }
  }, Sequence);
  var SetPrototype = Set.prototype;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype[ITERATOR_SYMBOL] = SetPrototype.values;
  SetPrototype.contains = SetPrototype.has;
  SetPrototype.mergeDeep = SetPrototype.merge = SetPrototype.union;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith = function(merger) {
    for (var seqs = [],
        $__13 = 1; $__13 < arguments.length; $__13++)
      seqs[$__13 - 1] = arguments[$__13];
    return this.merge.apply(this, seqs);
  };
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;
  SetPrototype.__toJS = IndexedSequencePrototype.__toJS;
  SetPrototype.__toStringMapper = IndexedSequencePrototype.__toStringMapper;
  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.length = map ? map.length : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }
  var EMPTY_SET;
  var OrderedMap = function OrderedMap(sequence) {
    var map = $OrderedMap.empty();
    return sequence ? sequence.constructor === $OrderedMap ? sequence : map.merge(sequence) : map;
  };
  var $OrderedMap = OrderedMap;
  ($traceurRuntime.createClass)(OrderedMap, {
    toString: function() {
      return this.__toString('OrderedMap {', '}');
    },
    get: function(k, notSetValue) {
      var index = this._map.get(k);
      return index != null ? this._vector.get(index)[1] : notSetValue;
    },
    clear: function() {
      if (this.length === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.length = 0;
        this._map.clear();
        this._vector.clear();
        return this;
      }
      return $OrderedMap.empty();
    },
    set: function(k, v) {
      return updateOrderedMap(this, k, v);
    },
    remove: function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    },
    wasAltered: function() {
      return this._map.wasAltered() || this._vector.wasAltered();
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      return this._vector.__iterate((function(entry) {
        return entry && fn(entry[1], entry[0], $__0);
      }), reverse);
    },
    __iterator: function(type, reverse) {
      return this._vector.fromEntrySeq().__iterator(type, reverse);
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newVector = this._vector.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._vector = newVector;
        return this;
      }
      return makeOrderedMap(newMap, newVector, ownerID, this.__hash);
    }
  }, {empty: function() {
      return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(Map.empty(), Vector.empty()));
    }}, Map);
  OrderedMap.from = OrderedMap;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
  function makeOrderedMap(map, vector, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.length = map ? map.length : 0;
    omap._map = map;
    omap._vector = vector;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }
  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var vector = omap._vector;
    var i = map.get(k);
    var has = i !== undefined;
    var removed = v === NOT_SET;
    if ((!has && removed) || (has && v === vector.get(i)[1])) {
      return omap;
    }
    if (!has) {
      i = vector.length;
    }
    var newMap = removed ? map.remove(k) : has ? map : map.set(k, i);
    var newVector = removed ? vector.remove(i) : vector.set(i, [k, v]);
    if (omap.__ownerID) {
      omap.length = newMap.length;
      omap._map = newMap;
      omap._vector = newVector;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newVector);
  }
  var EMPTY_ORDERED_MAP;
  var Record = function Record(defaultValues, name) {
    var RecordType = function(values) {
      if (!(this instanceof RecordType)) {
        return new RecordType(values);
      }
      this._map = Map(values);
    };
    var keys = Object.keys(defaultValues);
    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    name && (RecordTypePrototype._name = name);
    RecordTypePrototype._defaultValues = defaultValues;
    RecordTypePrototype._keys = keys;
    RecordTypePrototype.length = keys.length;
    try {
      Sequence(defaultValues).forEach((function(_, key) {
        Object.defineProperty(RecordType.prototype, key, {
          get: function() {
            return this.get(key);
          },
          set: function(value) {
            invariant(this.__ownerID, 'Cannot set on an immutable record.');
            this.set(key, value);
          }
        });
      }));
    } catch (error) {}
    return RecordType;
  };
  var $Record = Record;
  ($traceurRuntime.createClass)(Record, {
    toString: function() {
      return this.__toString(this._name + ' {', '}');
    },
    has: function(k) {
      return this._defaultValues.hasOwnProperty(k);
    },
    get: function(k, notSetValue) {
      if (notSetValue !== undefined && !this.has(k)) {
        return notSetValue;
      }
      return this._map.get(k, this._defaultValues[k]);
    },
    clear: function() {
      if (this.__ownerID) {
        this._map.clear();
        return this;
      }
      var Record = Object.getPrototypeOf(this).constructor;
      return $Record._empty || ($Record._empty = makeRecord(this, Map.empty()));
    },
    set: function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + this._name);
      }
      var newMap = this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    },
    remove: function(k) {
      if (k == null || !this.has(k)) {
        return this;
      }
      var newMap = this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    },
    keys: function() {
      return this._map.keys();
    },
    values: function() {
      return this._map.values();
    },
    entries: function() {
      return this._map.entries();
    },
    wasAltered: function() {
      return this._map.wasAltered();
    },
    __iterator: function(type, reverse) {
      return this._map.__iterator(type, reverse);
    },
    __iterate: function(fn, reverse) {
      var $__0 = this;
      return Sequence(this._defaultValues).map((function(_, k) {
        return $__0.get(k);
      })).__iterate(fn, reverse);
    },
    __ensureOwner: function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    }
  }, {}, Sequence);
  var RecordPrototype = Record.prototype;
  RecordPrototype._name = 'Record';
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.cursor = MapPrototype.cursor;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;
  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }
  var Range = function Range(start, end, step) {
    if (!(this instanceof $Range)) {
      return new $Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end == null) {
      end = Infinity;
    }
    if (start === end && __EMPTY_RANGE) {
      return __EMPTY_RANGE;
    }
    step = step == null ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.length = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
  };
  var $Range = Range;
  ($traceurRuntime.createClass)(Range, {
    toString: function() {
      if (this.length === 0) {
        return 'Range []';
      }
      return 'Range [ ' + this._start + '...' + this._end + (this._step > 1 ? ' by ' + this._step : '') + ' ]';
    },
    get: function(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    },
    contains: function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.length && possibleIndex === Math.floor(possibleIndex);
    },
    slice: function(begin, end) {
      if (wholeSlice(begin, end, this.length)) {
        return this;
      }
      begin = resolveBegin(begin, this.length);
      end = resolveEnd(end, this.length);
      if (end <= begin) {
        return __EMPTY_RANGE;
      }
      return new $Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    },
    indexOf: function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.length) {
          return index;
        }
      }
      return -1;
    },
    lastIndexOf: function(searchValue) {
      return this.indexOf(searchValue);
    },
    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },
    __iterate: function(fn, reverse) {
      var maxIndex = this.length - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    },
    __iterator: function(type, reverse) {
      var maxIndex = this.length - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator((function() {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      }));
    },
    __deepEquals: function(other) {
      return other instanceof $Range ? this._start === other._start && this._end === other._end && this._step === other._step : $traceurRuntime.superCall(this, $Range.prototype, "__deepEquals", [other]);
    }
  }, {}, IndexedSequence);
  var RangePrototype = Range.prototype;
  RangePrototype.__toJS = RangePrototype.toArray;
  RangePrototype.first = VectorPrototype.first;
  RangePrototype.last = VectorPrototype.last;
  var __EMPTY_RANGE = Range(0, 0);
  var Repeat = function Repeat(value, times) {
    if (times === 0 && EMPTY_REPEAT) {
      return EMPTY_REPEAT;
    }
    if (!(this instanceof $Repeat)) {
      return new $Repeat(value, times);
    }
    this._value = value;
    this.length = times == null ? Infinity : Math.max(0, times);
  };
  var $Repeat = Repeat;
  ($traceurRuntime.createClass)(Repeat, {
    toString: function() {
      if (this.length === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.length + ' times ]';
    },
    get: function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    },
    contains: function(searchValue) {
      return is(this._value, searchValue);
    },
    slice: function(begin, end) {
      var length = this.length;
      begin = begin < 0 ? Math.max(0, length + begin) : Math.min(length, begin);
      end = end == null ? length : end > 0 ? Math.min(length, end) : Math.max(0, length + end);
      return end > begin ? new $Repeat(this._value, end - begin) : EMPTY_REPEAT;
    },
    reverse: function() {
      return this;
    },
    indexOf: function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    },
    lastIndexOf: function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.length;
      }
      return -1;
    },
    __iterate: function(fn, reverse) {
      for (var ii = 0; ii < this.length; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    },
    __iterator: function(type, reverse) {
      var $__0 = this;
      var ii = 0;
      return new Iterator((function() {
        return ii < $__0.length ? iteratorValue(type, ii++, $__0._value) : iteratorDone();
      }));
    },
    __deepEquals: function(other) {
      return other instanceof $Repeat ? is(this._value, other._value) : $traceurRuntime.superCall(this, $Repeat.prototype, "__deepEquals", [other]);
    }
  }, {}, IndexedSequence);
  var RepeatPrototype = Repeat.prototype;
  RepeatPrototype.last = RepeatPrototype.first;
  RepeatPrototype.has = RangePrototype.has;
  RepeatPrototype.take = RangePrototype.take;
  RepeatPrototype.skip = RangePrototype.skip;
  RepeatPrototype.__toJS = RangePrototype.__toJS;
  var EMPTY_REPEAT = new Repeat(undefined, 0);
  function fromJS(json, converter) {
    if (converter) {
      return _fromJSWith(converter, json, '', {'': json});
    }
    return _fromJSDefault(json);
  }
  function _fromJSWith(converter, json, key, parentJSON) {
    if (json && (Array.isArray(json) || json.constructor === Object)) {
      return converter.call(parentJSON, key, Sequence(json).map((function(v, k) {
        return _fromJSWith(converter, v, k, json);
      })));
    }
    return json;
  }
  function _fromJSDefault(json) {
    if (json) {
      if (Array.isArray(json)) {
        return Sequence(json).map(_fromJSDefault).toVector();
      }
      if (json.constructor === Object) {
        return Sequence(json).map(_fromJSDefault).toMap();
      }
    }
    return json;
  }
  var Immutable = {
    Sequence: Sequence,
    Map: Map,
    Vector: Vector,
    Stack: Stack,
    Set: Set,
    OrderedMap: OrderedMap,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS
  };
  return Immutable;
}
typeof exports === 'object' ? module.exports = universalModule() : typeof define === 'function' && define.amd ? define(universalModule) : Immutable = universalModule();

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__;
"use strict";
var Immutable = ($___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__ = require("../bower_components/immutable/dist/Immutable"), $___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__ && $___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__.__esModule && $___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__ || {default: $___46__46__47_bower_95_components_47_immutable_47_dist_47_Immutable__}).default;
var $__default = angular.module('Immutable', []).service('Immutable', function() {
  return Immutable;
});

},{"../bower_components/immutable/dist/Immutable":3}],5:[function(require,module,exports){
"use strict";
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__default = angular.module('dispatcher', []).service('dispatcher', function($rootScope) {
  return $rootScope.$new();
});

},{}],6:[function(require,module,exports){
"use strict";
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__default = angular.module('im.path', []).directive('imPath', function($parse) {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function(element, attrs) {
      var path = attrs.imPath.toString();
      if (element[0].nodeName.toLowerCase() !== 'input') {
        return;
      }
      var expr = $parse(attrs.imOnEdit);
      return function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          if (ngModel.$isEmpty(value))
            return null;
          var model = ngModel.$modelValue.update(path, (function() {
            return value;
          }));
          expr(scope, {model: model});
          return model;
        });
        if (element.attr('type') == 'number') {
          ngModel.$formatters.push(function(value) {
            if (!ngModel.$isEmpty(value)) {
              value = value.get(path);
              value = parseFloat(value.toString(), 10);
            }
            return value;
          });
        }
        ngModel.$render = function() {
          if (!ngModel.$isEmpty(ngModel.$modelValue)) {
            var val = ngModel.$modelValue.get(path);
            element.val(val);
          }
        };
      };
    }
  };
});

},{}],7:[function(require,module,exports){
"use strict";
'use strict';
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var _uid = 89123;
var nextUid = function() {
  return (++_uid);
};
var createMap = function() {
  return Object.create(null);
};
var jqLite = angular.element;
var forEach = angular.forEach;
var toJson = angular.toJson;
function hashKey(obj, nextUidFn) {
  var key = obj && obj.$$hashKey;
  if (key) {
    if (typeof key === 'function') {
      key = obj.$$hashKey();
    }
    return key;
  }
  var objType = typeof obj;
  if (objType == 'function' || (objType == 'object' && obj !== null)) {
    key = obj.$$hashKey = objType + ':' + (nextUidFn || nextUid)();
  } else {
    key = objType + ':' + obj;
  }
  return key;
}
var imRepeatDirective = ['$parse', '$animate', function($parse, $animate) {
  var NG_REMOVED = '$$IM_NG_REMOVED';
  var imRepeatMinErr = Error;
  var updateScope = function(scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
    scope[valueIdentifier] = value;
    if (keyIdentifier)
      scope[keyIdentifier] = key;
    scope.$index = index;
    scope.$first = (index === 0);
    scope.$last = (index === (arrayLength - 1));
    scope.$middle = !(scope.$first || scope.$last);
    scope.$odd = !(scope.$even = (index & 1) === 0);
  };
  var getBlockStart = function(block) {
    return block.clone[0];
  };
  var getBlockEnd = function(block) {
    return block.clone[block.clone.length - 1];
  };
  return {
    restrict: 'A',
    multiElement: true,
    transclude: 'element',
    priority: 1000,
    terminal: true,
    $$tlb: true,
    compile: function imRepeatCompile($element, $attr) {
      var expression = $attr.imRepeat;
      console.log(expression);
      var imRepeatEndComment = document.createComment(' end imRepeat: ' + expression + ' ');
      var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
      if (!match) {
        throw imRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
      }
      var lhs = match[1];
      var rhs = match[2];
      var aliasAs = match[3];
      var trackByExp = match[4];
      match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
      if (!match) {
        throw imRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
      }
      if (!trackByExp) {
        throw imRepeatMinErr('Need track by expression');
      }
      var valueIdentifier = match[3] || match[1];
      var keyIdentifier = match[2];
      if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(aliasAs))) {
        throw imRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", aliasAs);
      }
      var trackByExpGetter,
          trackByIdExpFn,
          trackByIdArrayFn,
          trackByIdObjFn,
          trackByImmFn;
      var hashFnLocals = {$id: hashKey};
      trackByExpGetter = $parse(trackByExp);
      return function imRepeatLink($scope, $element, $attr, ctrl, $transclude) {
        if (trackByExpGetter) {
          trackByIdExpFn = function(key, value, index) {
            if (keyIdentifier)
              hashFnLocals[keyIdentifier] = key;
            hashFnLocals[valueIdentifier] = value;
            hashFnLocals.$index = index;
            return trackByExpGetter($scope, hashFnLocals);
          };
        }
        var lastBlockMap = createMap();
        $scope.$watchCollection(rhs, function imRepeatAction(collection) {
          var index,
              length,
              previousNode = $element[0],
              nextNode,
              nextBlockMap = createMap(),
              collectionLength,
              key,
              value,
              trackById,
              trackByIdFn,
              collectionKeys,
              block,
              nextBlockOrder,
              elementsToRemove;
          if (aliasAs) {
            $scope[aliasAs] = collection;
          }
          if (collection instanceof Immutable.Sequence) {
            var _collection = collection.toJS();
            trackByIdFn = trackByIdExpFn || trackByIdObjFn;
            collectionKeys = [];
            for (var itemKey in _collection) {
              if (_collection.hasOwnProperty(itemKey) && itemKey.charAt(0) != '$') {
                collectionKeys.push(itemKey);
              }
            }
            collectionKeys.sort();
          } else {
            throw new imRepeatMinErr('Need to be an Immutable structure');
          }
          collectionLength = collectionKeys.length;
          nextBlockOrder = new Array(collectionLength);
          console.log(collection);
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection.get(key.toString());
            trackById = trackByIdFn(key, value, index);
            if (lastBlockMap[trackById]) {
              block = lastBlockMap[trackById];
              delete lastBlockMap[trackById];
              nextBlockMap[trackById] = block;
              nextBlockOrder[index] = block;
            } else if (nextBlockMap[trackById]) {
              forEach(nextBlockOrder, function(block) {
                if (block && block.scope)
                  lastBlockMap[block.id] = block;
              });
              throw imRepeatMinErr('dupes', "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", expression, trackById, toJson(value));
            } else {
              nextBlockOrder[index] = {
                id: trackById,
                scope: undefined,
                clone: undefined
              };
              nextBlockMap[trackById] = true;
            }
          }
          for (var blockKey in lastBlockMap) {
            block = lastBlockMap[blockKey];
            elementsToRemove = getBlockNodes(block.clone);
            $animate.leave(elementsToRemove);
            if (elementsToRemove[0].parentNode) {
              for (index = 0, length = elementsToRemove.length; index < length; index++) {
                elementsToRemove[index][NG_REMOVED] = true;
              }
            }
            block.scope.$destroy();
          }
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection.get(key.toString());
            block = nextBlockOrder[index];
            if (block.scope) {
              nextNode = previousNode;
              do {
                nextNode = nextNode.nextSibling;
              } while (nextNode && nextNode[NG_REMOVED]);
              if (getBlockStart(block) != nextNode) {
                $animate.move(getBlockNodes(block.clone), null, jqLite(previousNode));
              }
              previousNode = getBlockEnd(block);
              updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
            } else {
              $transclude(function imRepeatTransclude(clone, scope) {
                block.scope = scope;
                var endNode = imRepeatEndComment.cloneNode(false);
                clone[clone.length++] = endNode;
                $animate.enter(clone, null, jqLite(previousNode));
                previousNode = endNode;
                block.clone = clone;
                nextBlockMap[block.id] = block;
                updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
              });
            }
          }
          lastBlockMap = nextBlockMap;
        });
      };
    }
  };
}];
var $__default = angular.module('im.repeat', []).directive('imRepeat', imRepeatDirective);

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $___46__46__47_dispatcher__;
"use strict";
var dispatcher = ($___46__46__47_dispatcher__ = require("../dispatcher"), $___46__46__47_dispatcher__ && $___46__46__47_dispatcher__.__esModule && $___46__46__47_dispatcher__ || {default: $___46__46__47_dispatcher__}).default;
var $__default = angular.module('movies.actions', [dispatcher.name]).constant('ACTIONS', {
  ADD_MOVIE: 'ADD_MOVIE',
  UPDATE_MOVIE: 'UPDATE_MOVIE',
  DEL_MOVIE: 'DEL_MOVIE'
}).service('movieActions', function(dispatcher, ACTIONS) {
  return {
    addMovie: function(movie) {
      dispatcher.$emit(ACTIONS.ADD_MOVIE, movie);
    },
    delMovie: function(movie) {
      dispatcher.$emit(ACTIONS.DEL_MOVIE, movie);
    },
    updateMovie: function(movie) {
      dispatcher.$emit(ACTIONS.UPDATE_MOVIE, movie);
    }
  };
});

},{"../dispatcher":5}],9:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__movies_46_store__,
    $__movies_46_actions__;
"use strict";
var store = ($__movies_46_store__ = require("./movies.store"), $__movies_46_store__ && $__movies_46_store__.__esModule && $__movies_46_store__ || {default: $__movies_46_store__}).default;
var actions = ($__movies_46_actions__ = require("./movies.actions"), $__movies_46_actions__ && $__movies_46_actions__.__esModule && $__movies_46_actions__ || {default: $__movies_46_actions__}).default;
var MoviesCtrl = function MoviesCtrl(moviesStore, movieActions) {
  var $__2 = this;
  this.movieItems = moviesStore.movieItems.toJS();
  this.movieActions = movieActions;
  moviesStore.$on('change', (function() {
    $__2.movieItems = moviesStore.movieItems.toJS();
  }));
};
($traceurRuntime.createClass)(MoviesCtrl, {
  addMovie: function(movie) {
    this.movieActions.addMovie(movie);
  },
  delMovie: function(movie) {
    this.movieActions.delMovie(movie);
  },
  updateMovie: function(movie) {
    this.movieActions.updateMovie(movie);
  }
}, {});
var $__default = angular.module('movies.controller', [store.name, actions.name]).controller('MoviesCtrl', MoviesCtrl);

},{"./movies.actions":8,"./movies.store":11}],10:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__movies_46_controller__;
"use strict";
var moviesController = ($__movies_46_controller__ = require("./movies.controller"), $__movies_46_controller__ && $__movies_46_controller__.__esModule && $__movies_46_controller__ || {default: $__movies_46_controller__}).default;
var $__default = angular.module('movies', [moviesController.name]);

},{"./movies.controller":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__movies_46_actions__,
    $___46__46__47_dispatcher__,
    $___46__46__47_Immutable__;
"use strict";
var actions = ($__movies_46_actions__ = require("./movies.actions"), $__movies_46_actions__ && $__movies_46_actions__.__esModule && $__movies_46_actions__ || {default: $__movies_46_actions__}).default;
var dispatcher = ($___46__46__47_dispatcher__ = require("../dispatcher"), $___46__46__47_dispatcher__ && $___46__46__47_dispatcher__.__esModule && $___46__46__47_dispatcher__ || {default: $___46__46__47_dispatcher__}).default;
var Immutable = ($___46__46__47_Immutable__ = require("../Immutable"), $___46__46__47_Immutable__ && $___46__46__47_Immutable__.__esModule && $___46__46__47_Immutable__ || {default: $___46__46__47_Immutable__}).default;
var validMovie = function(movie) {
  var errs = 0;
  if (!movie.title) {
    console.error('No movie title');
    errs++;
  }
  if (!movie.year) {
    console.error('No movie year');
    errs++;
  }
  if (movie.year && movie.year <= 1900) {
    console.error('Movie way to old');
    errs++;
  }
  return errs == 0;
};
var _i = 0;
var getId = function() {
  return (++_i);
};
var $__default = angular.module('movies.store', [actions.name, dispatcher.name, Immutable.name]).service('moviesStore', function(ACTIONS, dispatcher, Immutable, $rootScope) {
  var store = $rootScope.$new();
  store.movieItems = Immutable.Map();
  var addMovie = function(movie) {
    if (validMovie(movie)) {
      var id = movie.id = getId();
      var obj = {};
      obj[id] = movie;
      var map = Immutable.fromJS(obj);
      store.movieItems = store.movieItems.merge(map);
      store.movieItems[store.movieItems.length - 1] = true;
      store.$emit('change');
    }
  };
  addMovie({
    title: 'Rambo',
    year: 1982
  });
  addMovie({
    title: 'Titanic',
    year: 1997
  });
  var delMovie = function(movie) {
    store.movieItems = store.movieItems.filter((function(m) {
      return m.get('id') !== movie.id;
    })).toVector();
    store.$emit('change');
  };
  var updateMovie = function(movie) {
    if (validMovie(movie.toJS())) {
      store.movieItems = store.movieItems.updateIn(movie.get('id'), (function(m) {
        console.log(m);
        return m.merge(movie);
      }));
      store.$emit('change');
    }
  };
  dispatcher.$on(ACTIONS.ADD_MOVIE, (function(_, d) {
    addMovie(d);
  }));
  dispatcher.$on(ACTIONS.DEL_MOVIE, (function(_, d) {
    delMovie(d);
  }));
  dispatcher.$on(ACTIONS.UPDATE_MOVIE, (function(_, d) {
    updateMovie(d);
  }));
  return store;
});

},{"../Immutable":4,"../dispatcher":5,"./movies.actions":8}]},{},[1])(1)
});