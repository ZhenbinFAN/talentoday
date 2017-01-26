'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PlayerCtrl', function ($scope, $routeParams, toaster, FirebaseFactory, AutoRedirect) {
        $scope.player = FirebaseFactory.playerObject($routeParams.playerID);
        $scope.player.$loaded().then(function () {
            if($scope.player.birthday) {
                $scope.player.birthday = new Date($scope.player.birthday);
            }
            $scope.edit = function () {
                $scope.player.birthday = $scope.player.birthday.toString();
                $scope.player.$save().then(function(ref) {
                    $scope.player.birthday = new Date($scope.player.birthday);
                    toaster.pop('success', "", "Informaton has been updated.");
                }, function(error) {
                    toaster.pop('error', "", err);
                });
            };
            $scope._ready = true;
        });
  });
