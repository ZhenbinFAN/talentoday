'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('appApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        'checklist-model',
        'angularSpinner',
        'btford.markdown',
        'ui.bootstrap',
        'textAngular',
        'toaster'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/players', {
                templateUrl: 'views/players.html',
                controller: 'PlayersCtrl'
            })
            .when('/players/:playerID', {
                templateUrl: 'views/player.html',
                controller: 'PlayerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
