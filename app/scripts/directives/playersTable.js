'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:playersTable
 * @description
 * # playersTable
 */
angular.module('appApp')
    .directive('playersTable', function () {
        return {
            templateUrl: 'templates/playersTable.html',
            restrict: 'E',
            scope: {
                list: '=',
                searchText: '=*'
            }
        };
    });

