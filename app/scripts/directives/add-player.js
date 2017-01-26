(function () {

    'use strict';

    /**
     * @ngdoc directive
     * @name appApp.directive:addPlayer
     * @description
     * # addPlayer
     */
    angular.module('appApp')
        .directive('addPlayer', function () {
            return {
                controller: function ($scope, toaster, FirebaseFactory) {

                    $scope.players = FirebaseFactory.playersArray();

                    function init() {
                        $scope.newPlayer = {
                            FirstName: '',
                            LastName: '',
                            Email: '',
                            PhoneNumber:'',
                            Rate:1,
                            Description:'',
                            Birthday: new Date(1990,1,1)
                        }
                    }
                    init();

                    $scope.addPlayer = function () {

                        $scope.players.$add({
                            firstName: $scope.newPlayer.FirstName,
                            lastName: $scope.newPlayer.LastName,
                            emailAddress: $scope.newPlayer.Email,
                            phoneNumber: $scope.newPlayer.PhoneNumber,
                            description: $scope.newPlayer.Description,
                            birthday: $scope.newPlayer.Birthday,
                            rate: $scope.newPlayer.Rate

                        })
                            .then(
                            function (playerRef) {
                                init();
                                toaster.pop('success', "", "The player has been added.");
                            },
                            function (err) {
                                toaster.pop('error', "", err);
                            }
                        );


                    };

                },
                templateUrl: 'templates/add-player.html',
                restrict: 'E'
            }
        });
})();
