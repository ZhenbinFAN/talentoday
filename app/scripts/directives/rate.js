'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:rate
 * @description
 * # rate
 */
angular.module('appApp')
    .directive('rate', function () {
        return {
            templateUrl: 'templates/rate.html',
            restrict: 'E',
            scope: {
                rate: '='
            }
        };
    });

