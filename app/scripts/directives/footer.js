'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:footer
 * @description
 * # footer
 */
angular.module('appApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E'
    };
  });
