'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PlayersCtrl', function ($scope, $routeParams, FirebaseFactory, AutoRedirect) {

        $scope.players = FirebaseFactory.playersArray();
        $scope.players.$loaded().then(function () {
            $scope._ready = true;

            // pagination
            $scope.totalItems = $scope.players.length;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.itemsPerPage = 4;

            $scope.reversedList = angular.copy($scope.players.reverse());

            $scope.pageChanged = function (page) {
                if ($scope.players.length > $scope.itemsPerPage) {
                    $scope.filteredList = $scope.reversedList.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
                } else {
                    $scope.filteredList = $scope.reversedList
                }
            };
            $scope.pageChanged(1);

            $scope.newPlayerAdded = function () {
                $scope.players = FirebaseFactory.playersArray();
                $scope.players.$loaded().then(function () {
                    $scope.totalItems = $scope.players.length;
                    $scope.reversedList = angular.copy($scope.players.reverse());
                    $scope.currentPage = 1;
                    $scope.pageChanged(1);
                })
            };

            $scope.setItemsPerPage = function (num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1;
                $scope.pageChanged(1);
            }

        });
  });
