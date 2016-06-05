(function () {
  describe('unit controller: SelectPizzaController', function () {
    var $scope, $controller, mockOrderService;

    beforeEach(module('pizzaStore'));
    beforeEach(function(){
      mockOrderService = jasmine.createSpyObj('OrderService', ['placeOrder']);
      inject(function ($q) {
        mockOrderService.placeOrder.and.returnValue($q.when({}))
      })
    });
    beforeEach(inject(function ($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_('SelectPizzaController', {
        $scope: $scope,
        OrderService: mockOrderService
      });
    }));

    describe('PlaceOrder:  ', function () {
      it('is defined', function (done) {
        expect($controller).toBeDefined();
        done();
      });
      it('does not place order when no pizza type is selected', function(){
        $scope.pizzaType = '';
        $scope.PlaceOrder();

        expect(mockOrderService.placeOrder).not.toHaveBeenCalled();
      });

      it('places order when pizza type is selected', function(){
        $scope.pizzaType = $scope.choices[0];
        $scope.PlaceOrder();

        expect(mockOrderService.placeOrder).toHaveBeenCalled();
      });

    });
  });
})();