angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html',
                controller: 'mainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html',
                controller: 'mainCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '../views/blog.html',
                controller: 'mainCtrl'
            })
            .state('pets', {
                url: '/pets',
                templateUrl: '../views/pets.html',
                controller: 'mainCtrl'
            })
            .state('pets-templ', {
                url: '/pets-templ',
                templateUrl: '../views/pets-tmpl.html',
                controller: 'mainCtrl'
            })
            .state('bio', {
                url: '/bio/:id',
                templateUrl: '../views/pet-bio.html',
                controller: 'bioCtrl'
            })

        $urlRouterProvider.otherwise('/');

    });
