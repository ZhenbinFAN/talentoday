'use strict';

/**
 * @ngdoc service
 * @name appApp.FirebaseFactory
 * @description
 * # FirebaseFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('FirebaseFactory', function ($firebaseObject, $firebaseArray, FIREBASEROOT) {
      var factory = {
          ref : function () {
              return new Firebase(FIREBASEROOT);
          },
          playersArray : function () {
              return $firebaseArray(new Firebase(FIREBASEROOT + '/Players'));
          },
          playerObject : function (playerID) {
              return $firebaseObject(new Firebase(FIREBASEROOT + '/Players/'+ playerID));
          }
      };
      return factory;
  });
