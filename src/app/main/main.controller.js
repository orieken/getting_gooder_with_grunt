angular
    .module('pizzaStore')
    .controller('MainController', MainController);

function MainController($scope) {

  $scope.welcomeMessage = 'Welcome to the Pizza Store!';
}