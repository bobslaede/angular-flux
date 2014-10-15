'use strict';

var _uid = 89123;
var nextUid = function () {
  return (++_uid);
};

var createMap = function() {
  return Object.create(null);
}

var isArrayLike = function () {
  return true;
}

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

var imRepeatDirective = ['$parse', '$animate', function ($parse, $animate) {
  var NG_REMOVED = '$$IM_NG_REMOVED';
  var imRepeatMinErr = Error;

  var updateScope = function (scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
    // TODO(perf): generate setters to shave off ~40ms or 1-1.5%
    scope[valueIdentifier] = value;
    if (keyIdentifier) scope[keyIdentifier] = key;
    scope.$index = index;
    scope.$first = (index === 0);
    scope.$last = (index === (arrayLength - 1));
    scope.$middle = !(scope.$first || scope.$last);
    // jshint bitwise: false
    scope.$odd = !(scope.$even = (index & 1) === 0);
    // jshint bitwise: true
  };

  var getBlockStart = function (block) {
    return block.clone[0];
  };

  var getBlockEnd = function (block) {
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
        throw imRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
          expression);
      }

      var lhs = match[1];
      var rhs = match[2];
      var aliasAs = match[3];
      var trackByExp = match[4];

      match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);

      if (!match) {
        throw imRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
          lhs);
      }
      var valueIdentifier = match[3] || match[1];
      var keyIdentifier = match[2];

      if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) ||
        /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(aliasAs))) {
        throw imRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
          aliasAs);
      }

      var trackByExpGetter, trackByIdExpFn, trackByIdArrayFn, trackByIdObjFn, trackByImmFn;
      var hashFnLocals = {$id: hashKey};

      if (trackByExp) {
        trackByExpGetter = $parse(trackByExp);
      } else {
        trackByIdArrayFn = function (key, value) {
          return hashKey(value);
        };
        trackByIdObjFn = function (key) {
          return key;
        };
        trackByImmFn = function (key, value) {
          console.log('track by', key);
          return key;
        }
      }

      return function imRepeatLink($scope, $element, $attr, ctrl, $transclude) {

        if (trackByExpGetter) {
          trackByIdExpFn = function (key, value, index) {
            // assign key, value, and $index to the locals so that they can be used in hash functions
            if (keyIdentifier) hashFnLocals[keyIdentifier] = key;
            hashFnLocals[valueIdentifier] = value;
            hashFnLocals.$index = index;
            return trackByExpGetter($scope, hashFnLocals);
          };
        }

        // Store a list of elements from previous run. This is a hash where key is the item from the
        // iterator, and the value is objects with following properties.
        //   - scope: bound scope
        //   - element: previous element.
        //   - index: position
        //
        // We are using no-proto object so that we don't need to guard against inherited props via
        // hasOwnProperty.
        var lastBlockMap = createMap();

        //watch props
        $scope.$watchCollection(rhs, function imRepeatAction(collection) {
          var index, length,
            previousNode = $element[0],     // node that cloned nodes should be inserted after
                                            // initialized to the comment node anchor
            nextNode,
          // Same as lastBlockMap but it has the current state. It will become the
          // lastBlockMap on the next iteration.
            nextBlockMap = createMap(),
            collectionLength,
            key, value, // key/value of iteration
            trackById,
            trackByIdFn,
            collectionKeys,
            block,       // last object information {scope, element, id}
            nextBlockOrder,
            elementsToRemove;

          if (aliasAs) {
            $scope[aliasAs] = collection;
          }

          if (collection instanceof Immutable.Map) {
            var _collection = collection.toJS();
            trackByIdFn = trackByIdExpFn || trackByIdObjFn;
            // if object, extract keys, sort them and use to determine order of iteration over obj props
            collectionKeys = [];
            for (var itemKey in _collection) {
              if (_collection.hasOwnProperty(itemKey) && itemKey.charAt(0) != '$') {
                collectionKeys.push(itemKey);
              }
            }
            collectionKeys.sort();
            console.log("KEYS", collectionKeys)

          } else if (isArrayLike(collection)) {
            collectionKeys = collection;
            trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
          } else {
            trackByIdFn = trackByIdExpFn || trackByIdObjFn;
            // if object, extract keys, sort them and use to determine order of iteration over obj props
            collectionKeys = [];
            for (var itemKey in collection) {
              if (collection.hasOwnProperty(itemKey) && itemKey.charAt(0) != '$') {
                collectionKeys.push(itemKey);
              }
            }
            collectionKeys.sort();
          }

          collectionLength = collectionKeys.length;
          nextBlockOrder = new Array(collectionLength);

          console.log(collection);

          // locate existing items
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection.get(key.toString());
            trackById = trackByIdFn(key, value, index);
            if (lastBlockMap[trackById]) {
              // found previously seen block
              block = lastBlockMap[trackById];
              delete lastBlockMap[trackById];
              nextBlockMap[trackById] = block;
              nextBlockOrder[index] = block;
            } else if (nextBlockMap[trackById]) {
              // if collision detected. restore lastBlockMap and throw an error
              forEach(nextBlockOrder, function (block) {
                if (block && block.scope) lastBlockMap[block.id] = block;
              });
              throw imRepeatMinErr('dupes',
                "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                expression, trackById, toJson(value));
            } else {
              // new never before seen block
              nextBlockOrder[index] = {id: trackById, scope: undefined, clone: undefined};
              nextBlockMap[trackById] = true;
            }
          }

          // remove leftover items
          for (var blockKey in lastBlockMap) {
            block = lastBlockMap[blockKey];
            elementsToRemove = getBlockNodes(block.clone);
            $animate.leave(elementsToRemove);
            if (elementsToRemove[0].parentNode) {
              // if the element was not removed yet because of pending animation, mark it as deleted
              // so that we can ignore it later
              for (index = 0, length = elementsToRemove.length; index < length; index++) {
                elementsToRemove[index][NG_REMOVED] = true;
              }
            }
            block.scope.$destroy();
          }

          // we are not using forEach for perf reasons (trying to avoid #call)
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection.get(key.toString());
            block = nextBlockOrder[index];

            if (block.scope) {
              // if we have already seen this object, then we need to reuse the
              // associated scope/element

              nextNode = previousNode;

              // skip nodes that are already pending removal via leave animation
              do {
                nextNode = nextNode.nextSibling;
              } while (nextNode && nextNode[NG_REMOVED]);

              if (getBlockStart(block) != nextNode) {
                // existing item which got moved
                $animate.move(getBlockNodes(block.clone), null, jqLite(previousNode));
              }
              previousNode = getBlockEnd(block);
              updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
            } else {
              // new item which we don't know about
              $transclude(function imRepeatTransclude(clone, scope) {
                block.scope = scope;
                // http://jsperf.com/clone-vs-createcomment
                var endNode = imRepeatEndComment.cloneNode(false);
                clone[clone.length++] = endNode;

                // TODO(perf): support naked previousNode in `enter` to avoid creation of jqLite wrapper?
                $animate.enter(clone, null, jqLite(previousNode));
                previousNode = endNode;
                // Note: We only need the first/last node of the cloned nodes.
                // However, we need to keep the reference to the jqlite wrapper as it might be changed later
                // by a directive with templateUrl when its template arrives.
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

export default angular.module('im.repeat', [])
  .directive('imRepeat', imRepeatDirective);
