(function(){
'use strict';

angular.module("nameCalculator", [])
.controller("nameCalculatorController", function($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function() {
    var totalNumericValue = calculateNumericforString($scope.name);
    $scope.totalValue = totalNumericValue;
  };

  function calculateNumericforString(string) {
    var totalNumericValue = 0;
    for(var i = 0; i < string.length; i++){
      totalNumericValue += string.charCodeAt(i);
    }
    return totalNumericValue;
  }
});
})();
