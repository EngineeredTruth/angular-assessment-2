angular.module('app').service('mainService', function($http){
  this.getPets = function(){
    return $http({
      method:'GET',
      url: 'http://practiceapi.devmounta.in/pets'
    })
  }
  this.getPetDetails = function(id){
              return $http({
                method: 'GET',
                url: 'http://practiceapi.devmounta.in/pets/' + id
              }).then(function(response){
                return response.data;
              })
            }

})
