'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:lengthLimit
 * @function
 * @description
 * # limit the length
 * Filter in the appApp.
 */
angular.module('appApp')
  .filter('lengthLimit', function () {
    return function (input) {
      if (!input) {
        return input;
      }

      return input.length < 80 ? input : input.substring(0, 60) + "...";
    };
  });
