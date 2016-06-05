angular
  .module('pizzaStore', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'selectPizza/selectPizza.html',
          controller: 'SelectPizzaController'
        })
        .when('/order-status', {
          templateUrl: 'orderStatus/orderStatus.html',
          controller: 'OrderStatusController'
        })
        .otherwise({
          redirectTo: '/'
        });
  });