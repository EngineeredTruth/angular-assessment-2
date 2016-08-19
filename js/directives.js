angular.module('app')
    .directive('pets', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/pet-tmpl.html',
            controller: 'mainCtrl',
            scope: {
              pet: '='
            }
        };
    });
