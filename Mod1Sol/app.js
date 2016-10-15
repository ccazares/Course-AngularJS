(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.placeholder = "list comma separated dishes you usually have for lunch";
  $scope.Mensaje = "";

  $scope.Separa = function () {
    var Coma = ",";
    var Cadena = $scope.placeholder.split(Coma);

    if (Cadena == "") {
      $scope.Mensaje = "Please enter data first";
    }
    else {
      if (Cadena.length > 3) {
        $scope.Mensaje = "Too much!!";
      }
      else {
        $scope.Mensaje = "Enjoy!";
      }
    }
  };

}

})();
