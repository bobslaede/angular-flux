"use strict";

export default angular.module('im.path', [])
  .directive('imPath', function ($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function (element, attrs) {
        var path = attrs.imPath.toString();

        if (element[0].nodeName.toLowerCase() !== 'input') {
          return;
        }

        var expr = $parse(attrs.imOnEdit);
        console.log(expr());

        return function (scope, element, attrs, ngModel) {

          ngModel.$parsers.push(function(value) {
            if (ngModel.$isEmpty(value))      return null;
            var model = ngModel.$modelValue
              .update(path, () => value);
            expr(scope, {model: model});
            return model;
          });

          if (element.attr('type') == 'number') {
            ngModel.$formatters.push(function (value) {
              if (!ngModel.$isEmpty(value)) {
                value = value.get(path);
                value = parseFloat(value.toString(), 10);
              }
              return value;
            });
          }

          ngModel.$render = function () {
            if (!ngModel.$isEmpty(ngModel.$modelValue)) {
              let val = ngModel.$modelValue.get(path);

              element.val(val);
            }
          }

        }
      }
    }
  })
