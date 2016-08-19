angular.module('app')
.controller('bioCtrl', detailCtrl);

function detailCtrl($scope, $http, $stateParams, mainService){
  console.log($stateParams);
  $scope.getProdDetails = mainService.getPetDetails($stateParams.id).then(function(response){
    console.log(response);
    $scope.pet = response;
  })
}
