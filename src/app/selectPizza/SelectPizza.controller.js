angular
    .module('pizzaStore')
    .controller('SelectPizzaController', SelectPizza);

function SelectPizza($scope, $location, OrderService) {
  $scope.pizzaType = '';
  $scope.choices = ['canadian', 'pepperoni', 'vegetarian']
  $scope.orderInProgress = false;
  $scope.PlaceOrder = PlaceOrder;

  function PlaceOrder() {
    $scope.orderInProgress = false;
    if ($scope.pizzaType !== ''){
      OrderService.placeOrder($scope.pizzaType).then(function(data) {
        $scope.orderInProgress = false;
        $location.path('/order-status');
      })
    }
  }
}