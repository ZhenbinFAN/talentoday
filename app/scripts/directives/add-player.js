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
                controller: function ($scope, toaster) {
                    
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
                        var player = {
                            firstName: $scope.newPlayer.FirstName,
                            lastName: $scope.newPlayer.LastName,
                            emailAddress: $scope.newPlayer.Email,
                            phoneNumber: $scope.newPlayer.PhoneNumber,
                            description: $scope.newPlayer.Description,
                            birthday: $scope.newPlayer.Birthday.toString(),
                            rate: $scope.newPlayer.Rate

                        };

                        $scope.players.$add(player)
                            .then(
                            function (playerRef) {
                                init();
                                $scope.newPlayerAdded();
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
