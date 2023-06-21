(function () {
  'use strict';
  angular.module('angularApp', [])
  .controller("angularController", function($scope){
    $scope.name = "Sheetal";
    $scope.myFunction = function() {
      return "Hello Coursera!";
    };
  });
})();
