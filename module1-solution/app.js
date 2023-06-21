(function() {
'use strict';

angular.module("lunchCheck", [])
.controller("lunchCheckController", lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.clear = function() {
    $scope.message = "";
  };
  $scope.checkLunch = function() {
    if ($scope.lunchItems == "") {
      $scope.message = "Please enter data first";
    } else {
      var lunchIems = $scope.lunchItems.split(',');
      var itemCount = lunchIems.length;
      if(itemCount <= 3) {
        $scope.message = "Enjoy!";
      } else{
        $scope.message = "Too much!";
      }
    }
  };
}
})();
