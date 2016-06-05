angular
    .module('pizzaStore')
    .factory('OrderService', function ($q) {
      return {
        placeOrder: placeOrder
      };

      function placeOrder(pizzaType) {
        var deferred = $q.defer();
        deferred.resolve({
          'success': true,
          'message': 'Order placed for a ' + pizzaType
        });
        return deferred.promise;

      }
    });
