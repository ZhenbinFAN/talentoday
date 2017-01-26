(function () {

    'use strict';

    /**
     * @ngdoc directive
     * @name appApp.directive:datePicker
     * @description
     * # pick a date
     */
    angular.module('appApp')
        .directive('datePicker', function () {
            return {
                scope: {
                  myDate: '='
                },
                controller: function ($scope) {

                    // All the datepicker needed configuration
                    $scope.inlineOptions = {
                        customClass: getDayClass,
                        minDate: new Date(),
                        showWeeks: true
                    };
                    $scope.dateOptions = {
                        dateDisabled: disabled,
                        formatYear: 'yy',
                        maxDate: new Date(2020, 5, 22),
                        minDate: new Date(),
                        startingDay: 1
                    };
                    $scope.format = "dd-MMMM-yyyy";
                    $scope.altInputFormats = ['M!/d!/yyyy'];
                    $scope.popup = {
                        opened: false
                    };

                    $scope.today = function() {
                        $scope.myDate = new Date();
                    };

                    $scope.clear = function() {
                        $scope.myDate = null;
                    };

                    // Disable weekend selection
                    function disabled(data) {
                        var date = data.date,
                            mode = data.mode;
                        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                    }

                    $scope.toggleMin = function() {
                        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
                        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
                    };

                    $scope.toggleMin();

                    $scope.open = function() {
                        $scope.popup.opened = true;
                    };

                    $scope.setDate = function(year, month, day) {
                        $scope.myDate = new Date(year, month, day);
                    };

                    var tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    var afterTomorrow = new Date();
                    afterTomorrow.setDate(tomorrow.getDate() + 1);
                    $scope.events = [
                        {
                            date: tomorrow,
                            status: 'full'
                        },
                        {
                            date: afterTomorrow,
                            status: 'partially'
                        }
                    ];

                    function getDayClass(data) {
                        var date = data.date,
                            mode = data.mode;
                        if (mode === 'day') {
                            var dayToCheck = new Date(date).setHours(0,0,0,0);

                            for (var i = 0; i < $scope.events.length; i++) {
                                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                                if (dayToCheck === currentDay) {
                                    return $scope.events[i].status;
                                }
                            }
                        }

                        return '';
                    }
                },
                templateUrl: 'templates/datePicker.html',
                restrict: 'E'
            }
        });
})();
