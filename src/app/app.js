angular
  .module('pizzaStore', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainController'
        })
        .otherwise({
          redirectTo: '/'
        });
  });