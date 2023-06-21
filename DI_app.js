(function() {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter', '$injector'];
  function DIController($scope, $filter, $injector) {
    $scope.name = "Sheetal";

    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));

    $scope.lower = function() {
      var lowerCase = $filter('lowercase');
      $scope.name = lowerCase($scope.name);
    };
  }

})();
