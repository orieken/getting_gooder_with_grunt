angular
  .module('pizzaStore')
  .controller('OrderStatusController', OrderStatus);

function OrderStatus($scope) {
  $scope.orderStatus = 'pizza is on the way!'
}