angular.module('app').controller('mainCtrl', function($scope, mainService){

  getPets = function(){
    mainService.getPets().then(function(response){
      $scope.pets = response.data;
      console.log(response.data);
    });
  }

  getPets();

$scope.show = true;

  $scope.toggle = ()=>{
    console.log('x');
    $scope.show = !$scope.show;
  }

})
