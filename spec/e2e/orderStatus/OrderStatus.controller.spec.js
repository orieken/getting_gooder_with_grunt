(function () {
  describe('unit controller: OrderStatusController', function () {
    var $scope, $controller;

    beforeEach(module('pizzaStore'));
    beforeEach(function(){});
    beforeEach(inject(function ($rootScope, _$controller_) {
      $scope = $rootScope.$new();
      $controller = _$controller_('OrderStatusController', {
        $scope: $scope
      });
    }));

    describe('PlaceOrder:  ', function () {
      it('is defined', function (done) {
        expect($controller).toBeDefined();
        done();
      });

      it('navigates to order status page after order is placed', function(){
        browser.get('/#/');

        expect(browser.getLocationAbsUrl()).toBe('/');
      })

    });
  });
})();