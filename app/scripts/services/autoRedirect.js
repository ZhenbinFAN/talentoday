(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name appApp.AutoRedirect
     * @description
     * # AutoRedirect
     * Factory in the appApp.
     */
    angular.module('appApp')
        .factory('AutoRedirect', function ($rootScope, $location) {
            if(!$rootScope.checked) {
                $location.path('/')
            }
            return {};
        });

})();
